import { NextResponse } from "next/server";

export async function GET() {
  console.log("[GET /api/donaldtrump] Returning dummy data.");

  const fakeData = {
    id: "donaldtrump123",
    name: "Donald J. Trump",
    title: "45th President of the United States",
    description:
      "Donald John Trump is an American media personality, businessman, and politician who served as the 45th president of the US.",
    fact: "He is the first US president with no prior military or government experience.",
  };

  return NextResponse.json(fakeData);
}
