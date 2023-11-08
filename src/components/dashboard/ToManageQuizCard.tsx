"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarkedIcon, UserCogIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const ToManageQuizCard = async () => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => {
        router.push("/dashboard/manage-quiz");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Manage Quiz</CardTitle>
        <BookMarkedIcon size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Go to the manage quiz to add or edit quiz.
        </p>
      </CardContent>
    </Card>
  );
};

export default ToManageQuizCard;
