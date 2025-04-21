import { NextRequest, NextResponse } from "next/server";
import Booking from "../../../lib/modals/Booking";
import dbConnect from "../../..//lib/db";
import { allowedOrigins } from "../ReqOrigin"; // Import allowed origins

const checkOrigin = (request: Request) => {
  const origin =
    request.headers.get("Origin") || request.headers.get("Referer");
  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse("Forbidden", { status: 403 });
  }
};
export async function POST(request: NextRequest) {
  const originCheck = checkOrigin(request);
  try {
    await dbConnect();

    const body = await request.json();
    const { meetingType, name, email, phone, date, time, notes } = body;

    // Validate required fields
    if (!meetingType || !name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate date format
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    // Create new booking
    const booking = await Booking.create({
      meetingType,
      name,
      email,
      phone,
      date: parsedDate,
      time,
      notes,
    });



    return NextResponse.json(
      { message: "Booking created successfully", booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
