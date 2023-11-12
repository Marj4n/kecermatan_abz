import React from "react";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import QuizLobby from "@/components/forms/QuizLobby";

export const metadata = {
  title: "Quiz | Kecermatan ABZ",
  description: "Quiz yourself on anything!",
};

const Quiz = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }
  return <QuizLobby />;
};

export default Quiz;
