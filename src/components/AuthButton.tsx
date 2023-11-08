"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="px-4 py-2 font-bold text-white bg-black rounded-lg hover:bg-gray-900 dark:bg-gray-900"
    >
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 font-bold text-white bg-black rounded-lg hover:bg-gray-900 dark:bg-gray-900"
    >
      Sign Out
    </button>
  );
};
