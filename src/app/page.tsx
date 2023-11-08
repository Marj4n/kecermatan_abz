import QuizMeCard from "@/components/home/QuizMeCard";
import ToDashboardCard from "@/components/home/ToDashboardCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import RecentActivityCard from "@/components/home/RecentActivityCard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  const adminGridCols = role === "admin" ? 2 : 1;

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Home</h2>
      </div>

      <div className={`grid gap-4 mt-4 md:grid-cols-${adminGridCols}`}>
        <QuizMeCard />
        {role === "admin" && <ToDashboardCard />}
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <RecentActivityCard />
      </div>
    </main>
  );
}
