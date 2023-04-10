import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

export default function TaskList() {
  const tasks = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter.choice);

  return (
    <div className="listB">
      {tasks
        .filter((e) => {
          if (filter === "done") {
            return e.done === true;
          } else if (filter === "todo") {
            return e.done === false;
          } else {
            return e;
          }
        })
        .map((e) => (
          <Task key={e.id} task={e} />
        ))}
    </div>
  );
}
