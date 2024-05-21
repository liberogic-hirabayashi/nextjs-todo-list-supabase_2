import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";
import { Context } from "../../AuthContext";
import React, { useContext } from "react";

export default function TodoContets() {
    const session = useContext(Context);
  return (
    <div className="text-white">
      {session ? (
        <p>
          サインイン中 ここにTodoアプリが入ります。  
          {/* <AddTask />
              <Todo /> */}
        </p>
      ) : (
        <p>サインアウト</p>
      )}
    </div>
  );
}
