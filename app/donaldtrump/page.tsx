"use server";

import React, { useEffect } from "react";

export default function DonaldTrumpPage() {
  useEffect(() => {
    console.log("useEffect called in a server component");
  }, []);

  return (
    <div>
      <h1>Donald Trump Page</h1>
    </div>
  );
}
