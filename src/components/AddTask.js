import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="addB">
      <input
        className="inp1"
        placeholder="Write new task ..."
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className="btn1" type="" onClick={() => dispatch(addTask(text))}>
        Add
      </button>
    </div>
  );
}
