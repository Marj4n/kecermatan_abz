import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import RegisterForm from "@/components/RegisterForm";

const Register = async () => {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Kecermatan ABZ 🔥!</CardTitle>
          <CardDescription>
            Kecermatan ABZ is a platform for creating quizzes using AI!. Get
            started by loggin in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
