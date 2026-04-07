// Komponen baru untuk image dengan fallback yang lebih baik
"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  src: string
  alt: string
  fallbackSrc?: string
  fallbackText?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  fallbackText = "",
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [error, setError] = useState<boolean>(false)

  const handleError = () => {
    setError(true)
    if (fallbackSrc) {
      const query = fallbackText ? `?height=300&width=300&query=${encodeURIComponent(fallbackText)}` : ""
      setImgSrc(`${fallbackSrc}${query}`)
    }
  }

  return (
    <>
      {error && !fallbackSrc ? (
        <div
          className="flex items-center justify-center bg-zinc-800 text-zinc-400 text-sm"
          style={{ width: props.width, height: props.height }}
        >
          {fallbackText || alt || "Image not available"}
        </div>
      ) : (
        <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} />
      )}
    </>
  )
}
