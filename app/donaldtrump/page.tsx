/* eslint-disable no-console */
"use server";

import React, { useEffect } from "react";

function breakCode(): void {
  console.log("[DEBUG] Breaking code...");
  throw new Error("User-initiated runtime error.");
}

export default function DonaldTrumpPage() {
  useEffect(() => {
    console.log("[DEBUG] useEffect called in a server component.");
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Donald Trump Page</h1>
      <button
        onClick={breakCode}
        className="px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Break the App
      </button>
    </div>
  );
}
