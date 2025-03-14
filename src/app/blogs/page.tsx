import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-600 mb-4">
        Blogs Page is Under Development 🚧
      </h1>
      <Link href="/">
        <button className="px-4 py-2 text-black bg-gray-300 rounded-xl">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default page;
