import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doneTask, editTask, deleteTask } from "../redux/todoSlice";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(task.text);
  const id = task.id;

  const edit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id, edited }));
    setEditing(false);
  };

  return (
    <div className="task">
      <div className="div1">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => dispatch(doneTask(task))}
        />
      </div>

      {editing ? (
        <div className="div2">
          <input
            className="inp2"
            value={edited}
            onChange={(e) => setEdited(e.target.value)}
          />
          <button className="btn2" onClick={edit}>
            <img src="Save.png" alt="Save" />
          </button>
        </div>
      ) : (
        <div className="div2">
          <span className={task.done ? "done" : ""}>{task.text}</span>
        </div>
      )}
      <div className="div3">
        <span className={task.done ? "completed" : "incomplete"}>
          {task.done ? "Completed" : "Incomplete"}
        </span>
      </div>

      <div className="div4">
        <button className="btn2" onClick={() => setEditing(true)}>
          <img src="edit.png" alt="edit" />
        </button>
        <button className="btn2" onClick={() => dispatch(deleteTask(task))}>
          <img src="delete.png" alt="delete" />
        </button>
      </div>
    </div>
  );
}
