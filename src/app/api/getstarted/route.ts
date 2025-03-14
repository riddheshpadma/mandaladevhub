import connect from "@/lib/db";
import GetStarted from "../../../lib/modals/getstarted";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    await connect();
    const body = await request.json();
    const getStarted = new GetStarted(body);
    await getStarted.save();
    return new NextResponse("GetStarted created successfully", { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Registration error:", error);

      // If error is a Mongoose validation error
      const validationErrors = (error as any).errors 
        ? Object.keys((error as any).errors).map((key) => ({
            field: key,
            message: (error as any).errors[key].message,
          }))
        : null;

      return NextResponse.json(
        {
          message: "Error in creating GetStarted Registration",
          details: error.message,
          validation: validationErrors,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Unknown error occurred" },
      { status: 500 }
    );
  }
};
