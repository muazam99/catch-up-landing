export interface BlogCategory {
  category_id: number;
  category: string;
  category_name: string;
  blog_count: number;
}

export interface BlogSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  category_id: number;
  category: string;
  category_name: string;
  cover_image_url: string;
  published_at: string;
}

export interface BlogArticle extends BlogSummary {
  content_html: string;
  meta_title: string | null;
  meta_description: string | null;
}

export interface BlogPagination {
  total_count: number;
  page: number;
  page_size: number;
  total_pages: number;
  has_next: boolean;
  has_previous: boolean;
}

export interface BlogListResponse {
  items: BlogSummary[];
  pagination: BlogPagination;
}

interface ApiBlogSummary extends Omit<BlogSummary, "cover_image_url"> {
  cover_image_url: string | null;
}

interface ApiBlogArticle extends Omit<BlogArticle, "cover_image_url"> {
  cover_image_url: string | null;
}

interface ApiBlogListResponse extends Omit<BlogListResponse, "items"> {
  items: ApiBlogSummary[];
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T | null;
  error: unknown;
}

export interface BlogListParams {
  category?: string;
  page?: number;
  pageSize?: number;
}

export const BLOG_PAGE_SIZE = 10;

export class BlogApiError extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.name = "BlogApiError";
    this.status = status;
  }
}

function getApiBaseUrl() {
  const baseUrl = process.env.BLOG_API_BASE_URL?.trim();

  if (!baseUrl) {
    throw new BlogApiError("The blog API is not configured.", 503);
  }

  return baseUrl.replace(/\/$/, "");
}

function normalizeCoverImageUrl(value: string | null) {
  const imagePath = value?.trim() || "";

  if (!imagePath || /^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  const hostname = process.env.BLOG_IMAGE_HOST?.trim();
  const protocol = process.env.BLOG_IMAGE_PROTOCOL === "http" ? "http" : "https";

  if (!hostname) {
    return `/${imagePath.replace(/^\/+/, "")}`;
  }

  return `${protocol}://${hostname.replace(/^https?:\/\//i, "").replace(/\/$/, "")}/${imagePath.replace(/^\/+/, "")}`;
}

function normalizeBlogSummary<T extends { cover_image_url: string | null }>(
  blog: T,
): Omit<T, "cover_image_url"> & { cover_image_url: string } {
  return {
    ...blog,
    cover_image_url: normalizeCoverImageUrl(blog.cover_image_url),
  };
}

function getEnvelopeErrorMessage(error: unknown) {
  if (typeof error === "string" && error.trim()) return error;

  if (error && typeof error === "object" && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message.trim()) return message;
  }

  return "The blog service is currently unavailable.";
}

async function blogApiRequest<T>(path: string): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  let envelope: ApiEnvelope<T>;

  try {
    envelope = (await response.json()) as ApiEnvelope<T>;
  } catch {
    throw new BlogApiError("The blog service returned an invalid response.", 502);
  }

  if (!response.ok) {
    throw new BlogApiError(
      response.status === 404
        ? "The requested blog content was not found."
        : getEnvelopeErrorMessage(envelope.error),
      response.status,
    );
  }

  if (!envelope.success || envelope.data === null) {
    throw new BlogApiError(getEnvelopeErrorMessage(envelope.error), 502);
  }

  return envelope.data;
}

export function getBlogCategories() {
  return blogApiRequest<BlogCategory[]>("/blogs/categories");
}

export function getBlogs({
  category,
  page = 1,
  pageSize = BLOG_PAGE_SIZE,
}: BlogListParams = {}) {
  const searchParams = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });

  if (category) {
    searchParams.set("category", category);
  }

  return blogApiRequest<ApiBlogListResponse>(`/blogs?${searchParams.toString()}`).then(
    (result) => ({
      ...result,
      items: result.items.map(normalizeBlogSummary),
    }),
  );
}

export async function getBlogBySlug(slug: string) {
  const article = await blogApiRequest<ApiBlogArticle>(
    `/blogs/${encodeURIComponent(slug)}`,
  );
  return normalizeBlogSummary(article);
}

export function formatBlogDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function getBlogErrorMessage(error: unknown) {
  return error instanceof BlogApiError
    ? error.message
    : "We could not load the blog right now. Please try again.";
}
