"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

interface BlogCoverImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}

export default function BlogCoverImage({
  src,
  alt,
  sizes,
  priority = false,
}: BlogCoverImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--primary)]/15 via-[var(--secondary)] to-[var(--chart-2)]/20 text-[var(--primary)]">
        <ImageIcon className="h-10 w-10" aria-hidden="true" />
        <span className="sr-only">No cover image available</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      onError={() => setFailed(true)}
    />
  );
}
