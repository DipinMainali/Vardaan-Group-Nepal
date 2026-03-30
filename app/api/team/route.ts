import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { teamMemberSchema } from "@/lib/validations";

// GET /api/team - List team members
export async function GET() {
  try {
    // Uncomment when Prisma is ready:
    // const members = await prisma.teamMember.findMany({
    //   orderBy: { order: "asc" },
    // });

    return NextResponse.json({ members: [] });
  } catch (error) {
    console.error("Team API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// POST /api/team - Add team member (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validationResult = teamMemberSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Uncomment when Prisma is ready:
    // const member = await prisma.teamMember.create({
    //   data: validationResult.data,
    // });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Team create error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// PUT /api/team - Update team member (admin only)
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Member ID is required" },
        { status: 400 },
      );
    }

    // Uncomment when Prisma is ready:
    // const member = await prisma.teamMember.update({
    //   where: { id },
    //   data,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Team update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// DELETE /api/team - Delete team member (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Member ID is required" },
        { status: 400 },
      );
    }

    // Uncomment when Prisma is ready:
    // await prisma.teamMember.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Team delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
