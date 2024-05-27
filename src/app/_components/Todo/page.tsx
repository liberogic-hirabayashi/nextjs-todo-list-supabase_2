import React from "react";
import { Todos } from "../../../types";
import Link from "next/link";
import { useContext } from "react";
import { AuthContextData } from "../AuthContext/page";

const statusStyle = `border text-sm p-1 rounded min-w-[50px] text-center`;

// const getAllList = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}todos`, {
//     cache: "no-cache",
//   });
//   const data = await res.json();
//   return data.posts;
// };

export default function Todo() {
  const { todos } = useContext(AuthContextData);

  return (
    <div>
      <ul className="w-full">
        {todos !== null &&
          todos.map((todo: Todos) => (
            <li
              key={todo.id}
              className="pb-2 pl-4  border-b border-[#ffffff33] mt-4 text-white "
            >
              <Link
                className="hover:text-cyan-300 text-lg flex justify-between"
                href={`/todos/edit/${todo.id}`}
              >
                {todo.title}
                {todo.status === "完了" && (
                  <span className={`${statusStyle} text-blue-500`}>
                    {todo.status}
                  </span>
                )}
                {todo.status === "進行中" && (
                  <span className={`${statusStyle} text-green-500`}>
                    {todo.status}
                  </span>
                )}
                {todo.status === "未着手" && (
                  <span className={`${statusStyle} text-red-500`}>
                    {todo.status}
                  </span>
                )}
                {todo.status === "" && (
                  <span className={`${statusStyle} text-red-500`}>未着手</span>
                )}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
