"use client";
import React, { useContext } from "react";
import { supabase } from "./supabase-client";
import Header from "./_components/Header/page";
import TodoContets from "./_components/TodoContets/TodoContets"

export const Context = React.createContext(null);

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
      <Header/>
      {children}
      <TodoContets/>
    </Context.Provider>
  );
}
