import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CardTitle } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";

export const metadata = {
  title: "Manage User | Kecermatan ABZ",
};

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "jokowi@jokowi.com",
    },
    {
      id: "99",
      amount: 99,
      status: "processing",
      email: "cirno@cirno.com",
    },
    {
      id: "100",
      amount: 100,
      status: "failed",
      email: "asdasdsa",
    },
  ];
};

const ManageUser = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData();

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
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default ManageUser;
