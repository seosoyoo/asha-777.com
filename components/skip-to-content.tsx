"use client"

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-500 focus:text-black focus:font-medium focus:rounded"
    >
      Skip to content
    </a>
  )
}
