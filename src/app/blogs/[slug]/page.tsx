import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import sanitizeHtml from "sanitize-html";

import SiteHeader from "@/components/SiteHeader";
import BlogCoverImage from "@/components/blogs/BlogCoverImage";
import {
  BlogApiError,
  formatBlogCategory,
  formatBlogDate,
  getBlogBySlug,
} from "@/lib/blogs";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

function sanitizeArticleHtml(content: string) {
  return sanitizeHtml(content, {
    allowedTags: [
      "p",
      "br",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "ul",
      "ol",
      "li",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "a",
      "img",
      "figure",
      "figcaption",
      "code",
      "pre",
      "hr",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel", "title"],
      img: ["src", "srcset", "sizes", "alt", "title", "width", "height", "loading"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform(
        "a",
        { rel: "noopener noreferrer" },
        true,
      ),
      img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }, true),
    },
  });
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = await getBlogBySlug(slug);
    const description = article.meta_description || article.excerpt;

    return {
      title: `${article.meta_title || article.title} | Qiyam`,
      description,
      alternates: {
        canonical: `/blogs/${article.slug}`,
      },
      openGraph: {
        title: article.title,
        description,
        url: `/blogs/${article.slug}`,
        type: "article",
        publishedTime: article.published_at,
        images: article.cover_image_url
          ? [{ url: article.cover_image_url, alt: article.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description,
        images: article.cover_image_url ? [article.cover_image_url] : undefined,
      },
    };
  } catch (error) {
    if (error instanceof BlogApiError && error.status === 404) {
      return { title: "Article not found | Qiyam" };
    }

    return { title: "Qiyam Blogs" };
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  let article;

  try {
    article = await getBlogBySlug(slug);
  } catch (error) {
    if (error instanceof BlogApiError && error.status === 404) notFound();
    throw error;
  }

  const contentHtml = sanitizeArticleHtml(article.content_html);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main id="top">
        <article>
          <header className="border-b border-[var(--border)]/60 bg-hero-gradient">
            <div className="mx-auto max-w-4xl px-6 pb-12 pt-10 sm:pb-16 sm:pt-12">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All blogs
              </Link>

              <Link
                href={`/blogs?category=${encodeURIComponent(article.category)}`}
                className="mt-9 block w-fit text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)] hover:underline"
              >
                {formatBlogCategory(article.category)}
              </Link>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted-foreground)] sm:text-xl">
                {article.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted-foreground)]">
                <time dateTime={article.published_at} className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {formatBlogDate(article.published_at)}
                </time>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-6 pt-10 sm:pt-14">
            <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted)] shadow-sm sm:rounded-3xl">
              <BlogCoverImage
                src={article.cover_image_url}
                alt={article.title}
                sizes="(max-width: 1024px) calc(100vw - 48px), 1024px"
                priority
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 pb-20 pt-12 sm:pb-24 sm:pt-16">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-16 border-t border-[var(--border)] pt-8">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 font-semibold text-[var(--primary)] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all blogs
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
