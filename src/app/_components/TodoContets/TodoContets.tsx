import React from "react";
import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";

export default function TodoContets({ value }: { value: any }) {
  return (
    <div className="text-white">
      {value ? (
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
