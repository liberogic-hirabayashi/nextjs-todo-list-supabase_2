import AddTask from "@/_components/AddTask/AddTask";
import Todo from "@/_components/Todo/Todo";
import { Context } from "../../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/TodosContext";

export default function TodoContets() {
  const session = useContext(Context);
  return (
    <div className="text-white pt-32 w-[500px] m-auto flex-col flex items-center">
      <div className="mb-4 text-center">
        <h1 className="text-3xl">Next Todo List </h1>
        <p>supabase Auth2</p>
      </div>
      {session ? (
        <div>
          <AuthContext>
            <AddTask />
            <Todo />
          </AuthContext>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
