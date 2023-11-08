import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import RecentActivityCard from "@/components/home/RecentActivityCard";
import ToManageUserCard from "@/components/dashboard/ToManageUserCard";
import ToManageQuizCard from "@/components/dashboard/ToManageQuizCard";

export const metadata = {
  title: "Dashboard | Kecermatan ABZ",
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!(session?.user.role == "admin")) {
    redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-sm mt-5">
          Welcome, <b>{session?.user.name}</b> !
        </p>
      </div>

      <div className={`grid gap-4 mt-4 md:grid-cols-2`}>
        <ToManageUserCard />
        <ToManageQuizCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dashboard;
