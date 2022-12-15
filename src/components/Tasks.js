import { useEffect } from "react";
import useTasksContext from "../hooks/useTasksContext";
import Task from "./Task";

export default function Tasks({ darkMode }) {
  const { tasks, dispatch } = useTasksContext();
  console.log(tasks, "tasks");
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };

    fetchTasks();
  }, [dispatch]);
  return (
    <div>
      {tasks &&
        tasks.map((i) => (
          <Task
            key={i._id}
            id={i._id}
            text={i.text}
            isCompleted={i.isCompleted}
            darkMode={darkMode}
          />
        ))}
    </div>
  );
}
