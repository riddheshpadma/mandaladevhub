import connect from "@/lib/db";
import Contact from "../../../lib/modals/contactus";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const contact = await Contact.find();
    return new Response(JSON.stringify(contact), { status: 201 });
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
  try {
    await connect();
    const contactId = request.query?.id; // Handle query properly here
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
