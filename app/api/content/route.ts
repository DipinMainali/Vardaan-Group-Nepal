import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/content - Get content by key
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Content key is required" },
        { status: 400 },
      );
    }

    // Uncomment when Prisma is ready:
    // const content = await prisma.content.findUnique({ where: { key } });
    // if (!content) {
    //   return NextResponse.json({ error: "Content not found" }, { status: 404 });
    // }

    return NextResponse.json({ content: null });
  } catch (error) {
    console.error("Content API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// PUT /api/content - Create or update content (admin only)
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { key, title, body: contentBody, image, metadata } = body;

    if (!key) {
      return NextResponse.json(
        { error: "Content key is required" },
        { status: 400 },
      );
    }

    // Uncomment when Prisma is ready:
    // const content = await prisma.content.upsert({
    //   where: { key },
    //   update: { title, body: contentBody, image, metadata },
    //   create: { key, title, body: contentBody, image, metadata },
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Content update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
