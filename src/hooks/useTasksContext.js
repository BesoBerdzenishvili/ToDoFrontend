import { TasksContext } from "../context/TaskContext";
import { useContext } from "react";

export default function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw Error("useTasksContext must be used inside an TasksContextProvider");
  }

  return context;
}
