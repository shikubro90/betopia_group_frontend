import { newsList } from "@/data/news";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    // Await the params in Next.js 15
    const { id } = await context.params;

    const newsItem = newsList.find((item) => String(item.id) === id);

    if (!newsItem) {
        return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    return NextResponse.json(newsItem);
}
