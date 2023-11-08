import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CardTitle } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Manage User | Kecermatan ABZ",
};

const ManageUser = async () => {
  const session = await getServerSession(authOptions);

  if (!(session?.user.role == "admin")) {
    redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="items-center flex">
        <Link
          href="/dashboard"
          className="mr-2 text-3xl font-bold tracking-tight"
        >
          Dashboard{" "}
        </Link>
        <CardTitle className="text-2xl font-light">/ Manage User</CardTitle>
      </div>
    </main>
  );
};

export default ManageUser;
