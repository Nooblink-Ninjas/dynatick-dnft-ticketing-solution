import { NextResponse } from "next/server";

const DATA_SOURCE_URL =
  "https://api.sportmonks.com/v3/football/fixtures/date/2024-05-15?api_token=ZvZv41TCMKM8sl7HTmJp253s6X7ZGSoXVgc4I4KeGrMRo3WmftQOWSVLIFBU&includes=scores";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const finalResponse = await res.json();
  return NextResponse.json(finalResponse.data);
}
