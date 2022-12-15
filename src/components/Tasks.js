import Loading from "../assets/Loading";
import Task from "./Task";

export default function Tasks({ tasks, darkMode, loading }) {
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
