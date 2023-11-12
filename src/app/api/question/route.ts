import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { questionSchema } from "@/schemas/questions";

export async function POST(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const gameId = searchParams.get("gameId");

    if (!gameId) {
      return NextResponse.json(
        { error: "GameId is required." },
        {
          status: 400,
        }
      );
    }

    const body = await req.json();

    const { question, answer, options, questionType } =
      questionSchema.parse(body);

    const createdQuestion = await prisma.question.create({
      data: {
        question,
        answer,
        options,
        questionType,
        gameId: gameId || "",
      },
    });

    return NextResponse.json(
      {
        success: true,
        question: createdQuestion,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating question:", error);
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
    const { searchParams } = new URL(req.url);
    const gameId = searchParams.get("gameId");

    if (!gameId) {
      return NextResponse.json(
        { error: "GameId is required." },
        {
          status: 400,
        }
      );
    }

    const questions = await prisma.question.findMany({
      where: {
        gameId: gameId?.toString(),
      },
    });

    if (!questions || questions.length === 0) {
      return NextResponse.json(
        { error: "No questions found for this game." },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      { gameId: gameId, questions },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error getting questions:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const questionId = searchParams.get("questionId");

    if (!questionId) {
      return NextResponse.json(
        { error: "QuestionId is required." },
        {
          status: 400,
        }
      );
    }

    const body = await req.json();
    const { newData } = body;

    const updatedQuestion = await prisma.question.update({
      where: {
        id: questionId?.toString(),
      },
      data: newData,
    });

    if (!updatedQuestion) {
      return NextResponse.json(
        { error: "Question not found." },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        question: updatedQuestion,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating question:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const questionId = searchParams.get("questionId");

    if (!questionId) {
      return NextResponse.json(
        { error: "QuestionId is required." },
        {
          status: 400,
        }
      );
    }

    await prisma.question.delete({
      where: {
        id: questionId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Question deleted.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting question:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}
