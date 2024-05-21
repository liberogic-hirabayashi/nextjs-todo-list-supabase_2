"use client";
import React, { useContext } from "react";
import { supabase } from "./supabase-client";
import Header from "./_components/Header/page";
import TodoContets from "./_components/TodoContets/TodoContets"

const Context = React.createContext();

export default function Page({ children }: { children: any; }) {

  const [session, setSession] = React.useState<any>(null)

  React.useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSession(null)
        } else if (session) {
          setSession(session)
        }
      })

    return () => {
      subscription.data.subscription.unsubscribe();
    }
  }, [])
  return (
    <Context.Provider value={session}>
      <Header value={session}/>
      {children}
      <TodoContets value={session}/>
    </Context.Provider>
  );
}
