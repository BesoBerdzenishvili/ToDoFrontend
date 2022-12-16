import { styled } from "../stitches.config";
import useTasksContext from "../hooks/useTasksContext";
import TasksFilter from "./TasksFilter";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "14px 21px",
  backgroundColor: "white",
  borderRadius: "0px 0px 7px 7px",

  variants: {
    darkMode: {
      true: {
        backgroundColor: "$VeryDarkDesaturBlue2",
      },
    },
  },

  "& p": {
    fontSize: 14,
    color: "$DarkGrayishBlue1",
  },

  "& button": {
    backgroundColor: "transparent",
    color: "$DarkGrayishBlue1",
    border: "none",
    cursor: "pointer",

    "&:hover": {
      color: "white",
    },
  },
});

export default function Controllers({ darkMode, setFilterTasks }) {
  const { tasks, dispatch } = useTasksContext();
  const handleClick = async () => {
    const response = await fetch("/api/tasks/deleteCompleted", {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TASKS", payload: json });
    }
  };

  return (
    <Wrapper darkMode={darkMode}>
      <p>
        {tasks && tasks.filter((i) => i.isCompleted === false).length} items
        left
      </p>
      <TasksFilter setFilter={setFilterTasks} mobile={false} />
      <button onClick={handleClick}>Clear Completed</button>
    </Wrapper>
  );
}
