import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";
import { Context } from "../../AuthContext";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../TodosContext/page";

export default function TodoContets() {
  const session = useContext(Context);
  const [data, setData] = useState<any[] | null>(null);
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
        const data = res.posts;
        setData(data);
      } catch (error) {
      } finally {
      }
    };
    getAllList();
  }, []);
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
