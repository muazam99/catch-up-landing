import type { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import BlogExplorer from "@/components/blogs/BlogExplorer";
import {
  BlogCategory,
  BlogListResponse,
  getBlogCategories,
  getBlogErrorMessage,
  getBlogs,
} from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blogs | Qiyam",
  description:
    "Ideas, practical guidance, and reflections to help you build a lasting connection with the masjid.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Qiyam Blogs",
    description:
      "Ideas, practical guidance, and reflections to help you build a lasting connection with the masjid.",
    url: "/blogs",
    type: "website",
  },
};

interface BlogsPageProps {
  searchParams: Promise<{ category?: string | string[] }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const resolvedSearchParams = await searchParams;
  const categoryValue = resolvedSearchParams.category;
  const requestedCategory = (
    Array.isArray(categoryValue) ? categoryValue[0] : categoryValue || ""
  ).trim();

  let categories: BlogCategory[] = [];
  let result: BlogListResponse = {
    items: [],
    pagination: {
      total_count: 0,
      page: 1,
      page_size: 10,
      total_pages: 0,
      has_next: false,
      has_previous: false,
    },
  };
  let activeCategory = requestedCategory;
  let initialError = "";

  try {
    categories = await getBlogCategories();
    activeCategory = categories.some((category) => category.category === requestedCategory)
      ? requestedCategory
      : "";
    result = await getBlogs({ category: activeCategory || undefined });
  } catch (error) {
    initialError = getBlogErrorMessage(error);
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main id="top">
        <section className="border-b border-[var(--border)]/60">
          <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              BLOGS
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <BlogExplorer
            initialCategories={categories}
            initialResult={result}
            initialCategory={activeCategory}
            initialError={initialError}
          />
        </section>
      </main>
    </div>
  );
}
