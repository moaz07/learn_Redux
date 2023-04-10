import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        Filter by :
        <input
          type="radio"
          name="filterChoice"
          value="all"
          onClick={() => dispatch(setFilter("all"))}
        ></input>
        <label for="all">All</label>
        <input
          type="radio"
          name="filterChoice"
          value="done"
          onClick={() => dispatch(setFilter("done"))}
        ></input>
        <label for="done">Done</label>
        <input
          type="radio"
          name="filterChoice"
          value="todo"
          onClick={() => dispatch(setFilter("todo"))}
        ></input>
        <label for="todo">To do</label>
      </form>
    </div>
  );
}
