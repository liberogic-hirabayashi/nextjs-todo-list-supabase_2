"use client";
import React, { useContext,useState } from "react";
import { supabase } from "./supabase-client";
import Header from "./_components/Header/page";
import TodoContets from "./_components/TodoContets/TodoContets"


interface AuthContextType {
  session: any | null;

}
export const Context = React.createContext<AuthContextType | undefined>(undefined);

export default function Page() {
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
      <TodoContets/>
    </Context.Provider>
  );
}
