import { NextRequest, NextResponse } from "next/server";

import {
  BLOG_PAGE_SIZE,
  BlogApiError,
  getBlogErrorMessage,
  getBlogs,
} from "@/lib/blogs";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category")?.trim() || undefined;
  const requestedPage = Number(request.nextUrl.searchParams.get("page"));
  const page = Number.isInteger(requestedPage)
    ? Math.max(requestedPage, 1)
    : 1;
  const requestedPageSize = Number(request.nextUrl.searchParams.get("page_size"));
  const pageSize = Number.isInteger(requestedPageSize)
    ? Math.min(Math.max(requestedPageSize, 1), 100)
    : BLOG_PAGE_SIZE;

  try {
    return NextResponse.json(await getBlogs({ category, page, pageSize }));
  } catch (error) {
    const status = error instanceof BlogApiError ? error.status : 500;
    return NextResponse.json(
      { error: getBlogErrorMessage(error) },
      { status: status >= 400 && status < 600 ? status : 500 },
    );
  }
}
