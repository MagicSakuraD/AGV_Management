"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600"> {session.user.name} </p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return <Button onClick={() => signIn()}>sign in</Button>;
};

export { SigninButton };
