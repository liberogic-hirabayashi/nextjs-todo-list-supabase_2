import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";
import { Context } from "../../AuthContext";
import React, { useContext } from "react";

export default function TodoContets() {
  const { session } = useContext(Context);
  return (
    <div className="text-white pt-32 w-[500px] m-auto flex-col flex items-center">
      <div className="mb-4 text-center">
        <h1 className="text-3xl">Next Todo List </h1>
        <p>supabase Auth2</p>
      </div>
      {session ? (
        <div>
          <AddTask />
          <Todo />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
