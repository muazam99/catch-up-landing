import { NextResponse } from "next/server";

import {
  BlogApiError,
  getBlogCategories,
  getBlogErrorMessage,
} from "@/lib/blogs";

export async function GET() {
  try {
    return NextResponse.json(await getBlogCategories());
  } catch (error) {
    const status = error instanceof BlogApiError ? error.status : 500;
    return NextResponse.json(
      { error: getBlogErrorMessage(error) },
      { status: status >= 400 && status < 600 ? status : 500 },
    );
  }
}
