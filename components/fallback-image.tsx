"use client"

import Image from "next/image"
import { useState } from "react"

interface FallbackImageProps {
  src: string
  alt: string
  title?: string
  fallbackSrc: string
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function FallbackImage({
  src,
  alt,
  title,
  fallbackSrc,
  fill = false,
  className = "",
  priority = false,
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      title={title || alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
}
