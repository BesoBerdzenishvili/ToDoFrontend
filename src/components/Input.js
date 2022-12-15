import { useState, useEffect, useRef } from "react";
import useTasksContext from "../hooks/useTasksContext";
import { styled } from "../stitches.config";

export const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const onMouseDown = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  });
  return domNode;
};

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "white",
  padding: "14px 21px",
  margin: "44px 0 0 0",
  borderRadius: 7,

  variants: {
    darkMode: {
      true: {
        backgroundColor: "$VeryDarkDesaturBlue2",
      },
    },
  },
});
const Circle = styled("div", {
  backgroundColor: "transparent",
  width: 33,
  height: 31,
  borderRadius: 44,
  border: "1px solid white",

  variants: {
    darkMode: {
      true: {
        border: "1px solid $VeryDarkGrayishBlue2",
      },
    },
  },
});
const TaskInput = styled("input", {
  backgroundColor: "transparent",
  maxWidth: 494,
  width: "100%",
  paddingLeft: 21,
  outline: "none",
  border: "none",
  fontSize: 18,
  caretColor: "$BrightBlue",
  color: "$VeryDarkGrayishBlue2",

  variants: {
    darkMode: {
      true: {
        color: "1px solid white",
      },
    },
  },
});

const Error = styled("div", {
  backgroundColor: "white",
  border: "2px solid red",
  color: "red",
  margin: "12px 0",
  padding: 4,
  textAlign: "center",
});

export default function Input({ darkMode }) {
  const { dispatch } = useTasksContext();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const domNode = useClickOutside(() => {
    setError("");
  });

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const response = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ text: text, isCompleted: false }),
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setError("");
        setText("");
        dispatch({ type: "CREATE_TASK", payload: json });
      }
    }
  };
  return (
    <>
      <Wrapper darkMode={darkMode}>
        <Circle darkMode={darkMode} />
        <TaskInput
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          darkMode={darkMode}
          onKeyDown={handleKeyDown}
        />
      </Wrapper>
      {error && <Error ref={domNode}>{error}</Error>}
    </>
  );
}
