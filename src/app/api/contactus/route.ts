import connect from "../../..//lib/db";
import Contact from "../../../lib/modals/contactus";
import { NextResponse } from "next/server";
import { allowedOrigins } from "../ReqOrigin"; // Import allowed origins

const checkOrigin = (request: Request) => {
  const origin = request.headers.get("Origin") || request.headers.get("Referer");
  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse("Forbidden", { status: 403 });
  }
};

export const POST = async (request: Request) => {
  const originCheck = checkOrigin(request);
  if (originCheck) return originCheck;

  try {
    const body = await request.json();
    await connect();
    const contact = await new Contact(body);
    await contact.save();

    console.log("Data saved:", contact); // Log the saved data

    return new NextResponse(
      JSON.stringify({ message: "Message sent", contact: contact.name }),
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error saving data:", error); // Log the error
      return new NextResponse("Error in sending message: " + error.message, {
        status: 500,
      });
    }
    return new NextResponse("Unknown error occurred", { status: 500 });
  }
};