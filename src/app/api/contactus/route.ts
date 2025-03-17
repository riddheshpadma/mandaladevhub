import connect from "@/lib/db";
import Contact from "../../../lib/modals/contactus";
import { NextResponse } from "next/server";
import { allowedOrigins } from "../ReqOrigin"; // Import allowed origins

const checkOrigin = (request: Request) => {
  const origin = request.headers.get("Origin") || request.headers.get("Referer");
  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse("Forbidden", { status: 403 });
  }
};

export const GET = async (request: Request) => {
  const originCheck = checkOrigin(request);
  if (originCheck) return originCheck;

  try {
    await connect();
    const contact = await Contact.find();
    return new Response(JSON.stringify(contact), { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse("Error in fetching contact: " + error.message, {
        status: 500,
      });
    }
    return new NextResponse("Unknown error occurred", { status: 500 });
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

    return new NextResponse(
      JSON.stringify({ message: "Message sent", contact: contact.name }),
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse("Error in sending message: " + error.message, {
        status: 500,
      });
    }
    return new NextResponse("Unknown error occurred", { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const originCheck = checkOrigin(request);
  if (originCheck) return originCheck;

  try {
    await connect();

    // Extract query params from URL
    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get("id");

    if (!contactId) {
      return new NextResponse("Contact ID is required", { status: 400 });
    }

    await Contact.findByIdAndDelete(contactId);
    return new NextResponse("Message deleted successfully", { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse("Error in deleting message: " + error.message, {
        status: 500,
      });
    }
    return new NextResponse("Unknown error occurred", { status: 500 });
  }
};
