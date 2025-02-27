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
    } catch (error: any) {
        console.error("Registration error:", error);
        
        // Return a more structured error response
        return NextResponse.json({ 
            message: "Error in creating GetStarted Registration", 
            details: error.message,
            validation: error.errors ? Object.keys(error.errors).map(key => ({
                field: key,
                message: error.errors[key].message
            })) : null
        }, { status: 500 });
    }
}