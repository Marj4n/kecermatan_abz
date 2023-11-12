import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { gameCreationSchema } from "@/schemas/game";
import { generateUniqueToken } from "@/lib/utils";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { questions, token, duration, name } = gameCreationSchema.parse(body);

    const game = await prisma.game.create({
      data: {
        questions: {
          create: questions,
        },
        token: token || generateUniqueToken(),
        duration: duration || 900,
        name,
      },
    });

    return NextResponse.json(
      {
        success: true,
        game,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating game:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const games = await prisma.game.findMany({
      include: {
        questions: true,
      },
    });

    return NextResponse.json(
      {
        games,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error getting games:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { gameId, newData } = body;

    const updatedGame = await prisma.game.update({
      where: {
        id: gameId,
      },
      data: newData,
    });

    return NextResponse.json(
      {
        success: true,
        game: updatedGame,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating game:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const gameId = searchParams.get("gameId");

    // Delete associated questions first
    await prisma.question.deleteMany({
      where: {
        gameId: gameId?.toString(),
      },
    });

    // Now delete the game
    await prisma.game.delete({
      where: {
        id: gameId?.toString(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Game and associated questions deleted.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting game:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}
