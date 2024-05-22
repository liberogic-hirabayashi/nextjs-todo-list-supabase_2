"use client";
import React, { useContext } from "react";
import AuthContext from "../../AuthContext";
import { supabase } from "../../supabase-client";
import { Context } from "../../AuthContext";

const buttonStyle = `border p-1 px-4 rounded text-white`;

export default function Header() {
  const {session} = useContext(Context);

  const login = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const logout = () => {
    supabase.auth.signOut();
  };

  return (
    <header className="sticky flex text-white justify-center border-b">
      <div className="flex items-center justify-end w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        {session ? (
          <button onClick={logout} className={buttonStyle}>
            ログアウト
          </button>
        ) : (
          <div className="flex items-center">
            <p className="mr-4 text-sm">🔑 ログインしてください</p>
            <button onClick={login} className={buttonStyle}>
              GitHubでログイン
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
