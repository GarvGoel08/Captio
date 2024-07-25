import dbConnect from "@/lib/connectDb";
import catchAsync from "@/middleware/catchAsync";
import Link from "@/models/links";
import { NextResponse } from "next/server";

await dbConnect();

// Get Request with catchAsync

export const POST = catchAsync(async (req) => {
  const { code, long_url } = await req.json();

  if (!long_url) {
    return new NextResponse(JSON.stringify({ error: "Long URL is required" }), {
      status: 400,
    });
  }

  let generatedCode = code;
  if (!generatedCode) {
    generatedCode = Math.random().toString(36).substring(2, 8);
  }

  const existingLink = await Link.findOne({ code: generatedCode });

  if (existingLink) {
    return new NextResponse(JSON.stringify({ error: "Code already exists" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newLink = await Link.create({ code: generatedCode, long_url });

  return new NextResponse(JSON.stringify(newLink), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
});
