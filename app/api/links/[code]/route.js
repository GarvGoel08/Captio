import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import Link from "@/models/links";
import { NextResponse } from "next/server";

await dbConnect();

export const GET = catchAsync(async (req, context) => {
  const {code} = context.params;
  const link = await Link.findOne({ code });
  if (!link) {
    return new NextResponse(JSON.stringify({ error: "Link not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new NextResponse(JSON.stringify(link), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});