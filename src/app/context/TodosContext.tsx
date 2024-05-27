"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {TodoData} from "../../types"

const buttonStyle = `border p-1 px-4 rounded text-white`;


const defaultAuthData: TodoData = {
  todos: null,
  OnSubmit: async () => {},
  tasktitle: '',
  OnChange: () => {},
};

export const TodosContextData = React.createContext<TodoData>(defaultAuthData);

export default function TodosContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<any[] | null>(null);
  const [click, setClick] = useState(false);

  const [tasktitle, setTaskTitle] = useState<string>("");

  const router = useRouter();

  const postTodo = async (title: string, status: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}todos`, {
      method: "POST",
      body: JSON.stringify({ title, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  };

  const OnSubmit = async (e: React.FormEvent) => {
    if (tasktitle != "") {
      e.preventDefault();
      await postTodo(tasktitle, "");
      await router.refresh();
      setTaskTitle("");
      setClick(true);
    }
  };
  const OnChange = (e: any) => {
    setTaskTitle(e.target.value);
  };

  
  useEffect(() => {
    const getAllList = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_PATH}todos`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${session.access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();
        const resData = res.posts;
        setData(resData);
        setClick(false);
      } catch (error) {
      } finally {
      }
    };
    getAllList();
  }, [click]);
  const todos = data;
  return (
    <TodosContextData.Provider value={{ todos, OnSubmit, tasktitle, OnChange }}>
      {children}
    </TodosContextData.Provider>
  );
}
