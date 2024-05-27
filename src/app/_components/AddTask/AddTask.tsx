"use client";
import React, {  useContext } from "react";
import { TodosContextData } from "../../context/TodosContext";

const buttonStyle = `border p-1 px-4 rounded text-white`;

export default function AddTask() {
 const {OnSubmit,taskTitle,OnChange}= useContext(TodosContextData);

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e)=>OnChange(e)}
        className="border rounded p-1 mr-4 w-60 text-black"
      />
      <button className={buttonStyle}>追加</button>
    </form>
  );
}
