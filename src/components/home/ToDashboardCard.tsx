"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { BrainCircuit, LayoutDashboard } from "lucide-react";
import { useSession } from "next-auth/react";

const ToDashboardCard = () => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => {
        router.push("/dashboard");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">To Dashboard</CardTitle>
        <LayoutDashboard size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Go to the dashboard to see progress and manage account.
        </p>
      </CardContent>
    </Card>
  );
};

export default ToDashboardCard;
