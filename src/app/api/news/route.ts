import { newsList } from "@/data/news";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = newsList.slice(startIndex, endIndex);

    return NextResponse.json({
        page,
        limit,
        total: newsList.length,
        totalPages: Math.ceil(newsList.length / limit),
        data: results,
    });
}
