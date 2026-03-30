import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// GET /api/leads - List all leads (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const business = searchParams.get("business");
    const status = searchParams.get("status");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    // Uncomment when Prisma is ready:
    // const where: any = {};
    // if (business) where.business = business;
    // if (status) where.status = status;
    //
    // const [leads, total] = await Promise.all([
    //   prisma.lead.findMany({
    //     where,
    //     orderBy: { createdAt: "desc" },
    //     skip: (page - 1) * limit,
    //     take: limit,
    //   }),
    //   prisma.lead.count({ where }),
    // ]);

    // Placeholder response
    return NextResponse.json({
      leads: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
    });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// PATCH /api/leads - Update lead status
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Lead ID is required" },
        { status: 400 },
      );
    }

    // Uncomment when Prisma is ready:
    // const lead = await prisma.lead.update({
    //   where: { id },
    //   data: {
    //     ...(status && { status }),
    //     ...(notes !== undefined && { notes }),
    //   },
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
