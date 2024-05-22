import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";
import { Context } from "../../AuthContext";
import React, { useContext } from "react";

export default function TodoContets() {
  const session = useContext(Context);
  return (
    <div className="text-white">
      {session ? (
        <div className="pt-32 w-[500px] m-auto flex-col flex items-center">
          <AddTask />
          <Todo />
        </div>
      ) : (
       ""
      )}
    </div>
  );
}
