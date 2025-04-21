import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "mandala-brandDB",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error: ", err.message);
      throw new Error(err.message);
    }
    throw new Error("Unknown error occurred during database connection");
  }
};

export default connect;

export function collection(arg0: string) {
    throw new Error('Function not implemented.');
}
