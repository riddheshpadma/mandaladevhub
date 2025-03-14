import connect from "@/lib/db";
import GetStarted from "../../../lib/modals/getstarted";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST = async (request: Request) => {
  try {
    await connect();
    const body = await request.json();
    const getStarted = new GetStarted(body);
    await getStarted.save();
    return new NextResponse("GetStarted created successfully", { status: 201 });
  } catch (error: unknown) {
    if (error instanceof mongoose.Error.ValidationError) {
      const validationErrors = Object.keys(error.errors).map((key) => ({
        field: key,
        message: error.errors[key].message,
      }));

      return NextResponse.json(
        {
          message: "Error in creating GetStarted Registration",
          validation: validationErrors,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      console.error("Registration error:", error);
      return NextResponse.json(
        {
          message: "Error in creating GetStarted Registration",
          details: error.message,
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
