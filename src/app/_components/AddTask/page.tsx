"use client";
import React, {  useContext } from "react";
import { AuthContextData } from "../AuthContext/page";

const buttonStyle = `border p-1 px-4 rounded text-white`;

export default function AddTask() {
 const {OnSubmit,tasktitle,OnChange}= useContext(AuthContextData);

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="text"
        value={tasktitle}
        onChange={(e)=>OnChange(e)}
        className="border rounded p-1 mr-4 w-60 text-black"
      />
      <button className={buttonStyle}>追加</button>
    </form>
  );
}
