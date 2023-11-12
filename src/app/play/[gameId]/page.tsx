import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: {
    gameId: string;
  };
};

const PlayPage = async ({ params: { gameId } }: Props) => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }

  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: true,
    },
  });

  if (!game) {
    return <div>Game not found</div>;
  }

  return <div>gameId = {gameId}</div>;
};

export default PlayPage;
