import { NextRequest, NextResponse } from "next/server";
import { getGiphyApiUrl } from "../../../utils/helpers/service";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const req = await fetch(getGiphyApiUrl(parseInt(offset || "0")))
  const { data } = await req.json()
  return NextResponse.json({ data });
}