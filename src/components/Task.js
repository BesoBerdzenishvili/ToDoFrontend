import { useState } from "react";
import { styled } from "../stitches.config";
import useTasksContext from "../hooks/useTasksContext";
import cross from "../assets/icon-cross.svg";
import checkMark from "../assets/icon-check.svg";

const Wrapper = styled("div", {
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  padding: "14px 21px",
  borderBottom: "1px solid grey",

  variants: {
    darkMode: {
      true: {
        backgroundColor: "$VeryDarkDesaturBlue2",
        color: "white",
      },
    },
  },

  "&:first-child": {
    borderRadius: "7px 7px 0 0",
  },

  "&:hover > img:nth-child(2)": {
    display: "initial",
  },
});
const Img = styled("img", {
  cursor: "pointer",
  display: "none",
});

const LeftWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  "& p": {
    marginLeft: 14,
  },
});

const OuterCircle = styled("label", {
  cursor: "pointer",
  padding: 2,
  borderRadius: 999,

  "&:hover": {
    backgroundImage: "$CheckBackground",
  },
});

const Input = styled("input", {
  width: 0,
  height: 0,
  visibility: "hidden",
});

const CheckMark = styled("img", {
  margin: "8.5px 9px 6px 8px",
  width: 16,
});

const Circle = styled("div", {
  backgroundColor: "transparent",
  width: 33,
  height: 32,
  borderRadius: 44,
  border: "1px solid white",

  "&:hover": {
    border: "none",
    cursor: "pointer",
  },
});

export default function Task({
  text,
  isCompleted,
  id,
  darkMode,
  displayFilter,
}) {
  const [editText, setEditText] = useState(false);
  const [editValue, setEditValue] = useState(text);
  const [editCheck, setEditCheck] = useState(isCompleted);
  const { dispatch } = useTasksContext();

  const handleClick = async (e, check) => {
    if (check || e.key === "Enter") {
      e.preventDefault();
      const response = await fetch("/api/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ text: editValue, isCompleted: !isCompleted }),
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }
      if (response.ok) {
        setEditText(false);
        dispatch({ type: "UPDATE_TASKS", payload: json });
      }
    }
  };
  const deleteTask = async () => {
    const response = await fetch("/api/tasks/" + id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: json });
    }
  };

  const handleInputChange = (e) => {
    setEditCheck(!editCheck);
    handleClick(e, true);
  };
  return (
    <Wrapper
      darkMode={darkMode}
      style={{ display: isCompleted === displayFilter ? "none" : "flex" }}
    >
      <LeftWrapper>
        <OuterCircle
          htmlFor={id}
          style={{
            backgroundImage:
              isCompleted &&
              "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
          }}
        >
          {isCompleted ? (
            <CheckMark src={checkMark} alt="check mark" />
          ) : (
            <Circle />
          )}
        </OuterCircle>
        <Input
          id={id}
          type="checkbox"
          checked={isCompleted}
          onChange={handleInputChange}
        />
        {editText ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleClick}
            onBlur={() => setEditText(false)}
            autoFocus
          />
        ) : (
          <p
            onDoubleClick={() => setEditText(true)}
            style={{
              textDecoration: isCompleted && "line-through",
              color: isCompleted && "hsl(234, 11%, 52%)",
            }}
          >
            {editValue}
          </p>
        )}
      </LeftWrapper>
      <Img src={cross} alt="x" onClick={deleteTask} />
    </Wrapper>
  );
}
