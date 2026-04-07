"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  src: string
  alt: string
  fallbackSrc?: string
  contentType?: "image/webp" | "image/jpeg" | "image/png"
  isPriority?: boolean
  isLCP?: boolean // Flag untuk Largest Contentful Paint
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  contentType = "image/webp",
  isPriority = false,
  isLCP = false,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  // Convert to WebP if not already and if supported
  const optimizedSrc = imgSrc.includes(".webp") ? imgSrc : imgSrc.replace(/\.(jpeg|jpg|png)$/, ".webp")

  // Generate appropriate sizes attribute if not provided
  const sizes = props.sizes || "(max-width: 768px) 100vw, 50vw"

  // Set priority for LCP elements
  const shouldPrioritize = isPriority || isLCP

  return (
    <picture>
      {/* WebP source */}
      <source srcSet={optimizedSrc} type="image/webp" />

      {/* Original format fallback */}
      <source srcSet={imgSrc} type={contentType} />

      <Image
        {...props}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        sizes={sizes}
        onError={() => {
          setImgSrc(fallbackSrc)
        }}
        loading={shouldPrioritize ? "eager" : "lazy"}
        priority={shouldPrioritize}
        fetchPriority={shouldPrioritize ? "high" : "auto"}
        decoding={shouldPrioritize ? "sync" : "async"}
      />
    </picture>
  )
}
