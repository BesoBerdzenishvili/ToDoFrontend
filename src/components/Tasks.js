import { useState, useEffect } from "react";
import useTasksContext from "../hooks/useTasksContext";
import Loading from "../assets/Loading";
import Task from "./Task";

export default function Tasks({ darkMode, tasksFilter }) {
  const [loading, setLoading] = useState(null);

  const { tasks, dispatch } = useTasksContext();
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const response = await fetch("/api/tasks");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
        setLoading(null);
      }
    };
    fetchTasks();
  }, [dispatch, tasks]);
  return (
    <div>
      {tasks ? (
        tasks.map((i) => (
          <Task
            key={i._id}
            id={i._id}
            text={i.text}
            isCompleted={i.isCompleted}
            darkMode={darkMode}
            displayFilter={tasksFilter}
          />
        ))
      ) : loading ? (
        <Loading />
      ) : (
        ""
      )}
    </div>
  );
}
