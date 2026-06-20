"use client";

import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  BLOG_PAGE_SIZE,
  BlogCategory,
  BlogListResponse,
  BlogPagination,
  BlogSummary,
  formatBlogCategory,
  formatBlogDate,
} from "@/lib/blogs";
import BlogCoverImage from "./BlogCoverImage";

interface BlogExplorerProps {
  initialCategories: BlogCategory[];
  initialResult: BlogListResponse;
  initialCategory: string;
  initialError?: string;
}

async function readApiResponse<T>(response: Response): Promise<T> {
  const body = (await response.json().catch(() => null)) as
    | T
    | { error?: string }
    | null;

  if (!response.ok) {
    const errorMessage =
      body &&
      typeof body === "object" &&
      "error" in body &&
      typeof body.error === "string"
        ? body.error
        : "We could not load the blog right now. Please try again.";

    throw new Error(
      errorMessage,
    );
  }

  return body as T;
}

function buildPostsUrl(category: string, page = 1) {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(BLOG_PAGE_SIZE),
  });
  if (category) params.set("category", category);
  return `/api/blogs?${params.toString()}`;
}

function updateCategoryUrl(category: string) {
  const url = new URL(window.location.href);
  if (category) url.searchParams.set("category", category);
  else url.searchParams.delete("category");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function BlogRowsSkeleton() {
  return (
    <div className="space-y-5" aria-label="Loading blog posts" role="status">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] sm:grid sm:grid-cols-[220px_minmax(0,1fr)]"
        >
          <div className="aspect-[16/10] animate-pulse bg-[var(--muted)] sm:aspect-auto sm:min-h-56" />
          <div className="space-y-4 p-6">
            <div className="h-4 w-24 animate-pulse rounded bg-[var(--muted)]" />
            <div className="h-7 w-4/5 animate-pulse rounded bg-[var(--muted)]" />
            <div className="h-4 w-full animate-pulse rounded bg-[var(--muted)]" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-[var(--muted)]" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading blog posts…</span>
    </div>
  );
}

function BlogRow({ post }: { post: BlogSummary }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:grid sm:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]">
      <Link
        href={`/blogs/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[var(--muted)] sm:aspect-auto sm:min-h-60"
        tabIndex={-1}
        aria-hidden="true"
      >
        <BlogCoverImage
          src={post.cover_image_url}
          alt=""
          sizes="(max-width: 640px) 100vw, 260px"
        />
      </Link>

      <div className="flex min-w-0 flex-col p-6 sm:p-7">
        <Link
          href={`/blogs?category=${encodeURIComponent(post.category)}`}
          className="w-fit text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)] hover:underline"
        >
          {formatBlogCategory(post.category)}
        </Link>

        <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
          <Link href={`/blogs/${post.slug}`} className="hover:text-[var(--primary)]">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-2 leading-relaxed text-[var(--muted-foreground)]">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted-foreground)]">
          <time dateTime={post.published_at} className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatBlogDate(post.published_at)}
          </time>
        </div>

        <Link
          href={`/blogs/${post.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-[gap] hover:gap-2.5"
        >
          Continue reading
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogExplorer({
  initialCategories,
  initialResult,
  initialCategory,
  initialError,
}: BlogExplorerProps) {
  const [categories, setCategories] = useState(initialCategories);
  const [posts, setPosts] = useState(initialResult.items);
  const [pagination, setPagination] = useState<BlogPagination>(
    initialResult.pagination,
  );
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(initialError || "");
  const [loadMoreError, setLoadMoreError] = useState("");
  const categoryRequest = useRef<AbortController | null>(null);

  useEffect(() => () => categoryRequest.current?.abort(), []);

  const loadCategory = async (category: string) => {
    categoryRequest.current?.abort();
    const controller = new AbortController();
    categoryRequest.current = controller;

    setSelectedCategory(category);
    setLoading(true);
    setError("");
    setLoadMoreError("");
    setPosts([]);
    setPagination((current) => ({
      ...current,
      total_count: 0,
      page: 1,
      total_pages: 0,
      has_next: false,
      has_previous: false,
    }));
    updateCategoryUrl(category);

    try {
      const response = await fetch(buildPostsUrl(category), {
        signal: controller.signal,
      });
      const result = await readApiResponse<BlogListResponse>(response);
      setPosts(result.items);
      setPagination(result.pagination);
    } catch (requestError) {
      if (requestError instanceof DOMException && requestError.name === "AbortError") return;
      setError(
        requestError instanceof Error
          ? requestError.message
          : "We could not load the selected category.",
      );
    } finally {
      if (!controller.signal.aborted) setLoading(false);
    }
  };

  const retryAll = async () => {
    setLoading(true);
    setError("");

    try {
      const [categoriesResponse, postsResponse] = await Promise.all([
        fetch("/api/blogs/categories"),
        fetch(buildPostsUrl(selectedCategory)),
      ]);
      const [nextCategories, nextPosts] = await Promise.all([
        readApiResponse<BlogCategory[]>(categoriesResponse),
        readApiResponse<BlogListResponse>(postsResponse),
      ]);
      setCategories(nextCategories);
      setPosts(nextPosts.items);
      setPagination(nextPosts.pagination);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "We could not load the blog right now.",
      );
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!pagination.has_next || loadingMore) return;

    setLoadingMore(true);
    setLoadMoreError("");

    try {
      const response = await fetch(
        buildPostsUrl(selectedCategory, pagination.page + 1),
      );
      const result = await readApiResponse<BlogListResponse>(response);
      setPosts((currentPosts) => {
        const currentIds = new Set(currentPosts.map((post) => post.id));
        return [
          ...currentPosts,
          ...result.items.filter((post) => !currentIds.has(post.id)),
        ];
      });
      setPagination(result.pagination);
    } catch (requestError) {
      setLoadMoreError(
        requestError instanceof Error
          ? requestError.message
          : "Could not load more posts.",
      );
    } finally {
      setLoadingMore(false);
    }
  };

  const allBlogCount = categories.reduce(
    (total, category) => total + category.blog_count,
    0,
  );
  const categoryOptions: BlogCategory[] = [
    {
      category: "",
      blog_count:
        allBlogCount || (selectedCategory === "" ? pagination.total_count : 0),
    },
    ...categories,
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
      <aside aria-label="Blog categories">
        <h2 className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)] lg:block">
          Categories
        </h2>
        <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:sticky lg:top-24 lg:mx-0 lg:mt-4 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0">
          {categoryOptions.map((category) => {
            const selected = selectedCategory === category.category;

            return (
              <button
                key={category.category || "all"}
                type="button"
                onClick={() => loadCategory(category.category)}
                disabled={loading && selected}
                aria-pressed={selected}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:cursor-wait lg:block lg:w-full lg:rounded-xl lg:border-transparent lg:px-3 lg:text-left ${
                  selected
                    ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] lg:bg-[var(--primary)]/10 lg:text-[var(--primary)]"
                    : "border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                <span>{category.category ? formatBlogCategory(category.category) : "All"}</span>
                <span className="ml-2 text-xs opacity-70">{category.blog_count}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <section aria-label="Blog posts" aria-busy={loading}>
        {loading ? (
          <BlogRowsSkeleton />
        ) : error ? (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-14 text-center">
            <h2 className="text-xl font-semibold">The blog could not be loaded</h2>
            <p className="mx-auto mt-2 max-w-md text-[var(--muted-foreground)]">{error}</p>
            <button
              type="button"
              onClick={retryAll}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)]"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Try again
            </button>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)] px-6 py-16 text-center">
            <h2 className="text-xl font-semibold">No articles here yet</h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Try another category or check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post) => (
              <BlogRow key={post.id} post={post} />
            ))}
          </div>
        )}

        {!loading && !error && pagination.has_next && (
          <div className="mt-9 text-center">
            <button
              type="button"
              onClick={loadMore}
              disabled={loadingMore}
              className="inline-flex min-w-36 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--muted)] disabled:cursor-wait disabled:opacity-70"
            >
              {loadingMore && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {loadingMore ? "Loading…" : "Load more"}
            </button>
            {loadMoreError && (
              <div className="mt-3" role="alert">
                <p className="text-sm text-[var(--destructive)]">{loadMoreError}</p>
                <button
                  type="button"
                  onClick={loadMore}
                  className="mt-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                >
                  Try loading again
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
