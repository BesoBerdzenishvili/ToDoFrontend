import { useContext } from "react";
import { TasksContext } from "../context/TaskContext";

export default function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw Error("useTasksContext must be used inside an TasksContextProvider");
  }

  return context;
}
