"use client";
import React, { useState,useContext } from "react";
import { useRouter } from "next/navigation";

const buttonStyle = `border p-1 px-4 rounded text-white`;

const postTodo = async (title: string, status: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}todos`, {
    method: "POST",
    body: JSON.stringify({ title, status }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data.posts);
  return data;
};

export default function AddTask() {
  const [tasktitle, setTaskTitle] = useState<string>("");

  const router = useRouter();

  const handleClick = async (e: React.FormEvent) => {
    if (tasktitle != "") {
      e.preventDefault();
      await postTodo(tasktitle, "");
      await router.refresh();
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        value={tasktitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
        className="border rounded p-1 mr-4 w-60 text-black"
      />
      <button className={buttonStyle}>追加</button>
    </form>
  );
}
