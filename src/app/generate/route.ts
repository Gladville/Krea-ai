import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Call fal.ai API
    const response = await fetch("https://api.fal.ai/v1/run/fal-ai/flux-pro-1.1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${process.env.FAL_KEY}`, // API key from .env
      },
      body: JSON.stringify({
        input: {
          prompt, // user’s textarea text
        },
      }),
    });

    const data = await response.json();

    // Fal.ai returns images inside `data.output.images[0].url`
    const imageUrl = data.output?.images?.[0]?.url || null;

    return NextResponse.json({ imageUrl });
  } catch (err) {
    console.error("Fal API Error:", err);
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
  }
}
