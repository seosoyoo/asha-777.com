import type React from "react"
/**
 * Utilitas umum
 * Fungsi-fungsi utilitas yang digunakan di seluruh aplikasi
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Menggabungkan class names dengan clsx dan tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format angka sebagai mata uang
 */
export function formatCurrency(amount: number, currency = "BDT") {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
  }).format(amount)
}

/**
 * Memotong teks dengan panjang tertentu dan menambahkan ellipsis
 */
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

/**
 * Mendapatkan URL gambar placeholder
 */
export function getPlaceholderImage(width: number, height: number, text = "Image") {
  return `/placeholder.svg?height=${height}&width=${width}&query=${text}`
}

/**
 * Menangani error gambar
 */
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, width = 100, height = 100) {
  const target = e.target as HTMLImageElement
  target.src = getPlaceholderImage(width, height)
}

// Add this utility function to sanitize IDs for ARIA attributes
/**
 * Sanitizes a string to be used as an HTML ID
 * Removes special characters and ensures the ID is valid
 */
export function sanitizeId(id: string): string {
  // Replace special characters with hyphens and ensure it starts with a letter
  return `id-${id.toLowerCase().replace(/[^a-z0-9]/g, "-")}`
}

// Add this function to fix invalid ARIA attributes
/**
 * Fixes invalid ARIA attributes in the DOM
 * Should be called after component rendering
 */
export function fixAriaAttributes(): void {
  if (typeof document === "undefined") return

  // Fix aria-controls attributes that point to invalid IDs
  document.querySelectorAll("[aria-controls]").forEach((element) => {
    const controlsValue = element.getAttribute("aria-controls")
    if (controlsValue && (controlsValue.includes("«") || controlsValue.includes("»") || controlsValue.includes(" "))) {
      // Generate a valid ID
      const newId = sanitizeId(controlsValue)

      // Update the aria-controls attribute
      element.setAttribute("aria-controls", newId)

      // Try to find and update the corresponding element
      const controlledElement = document.getElementById(controlsValue)
      if (controlledElement) {
        controlledElement.id = newId
      }
    }
  })

  // Fix other invalid ARIA attributes as needed
  document.querySelectorAll("[aria-labelledby]").forEach((element) => {
    const labelledbyValue = element.getAttribute("aria-labelledby")
    if (
      labelledbyValue &&
      (labelledbyValue.includes("«") || labelledbyValue.includes("»") || labelledbyValue.includes(" "))
    ) {
      const newId = sanitizeId(labelledbyValue)
      element.setAttribute("aria-labelledby", newId)
    }
  })
}

export function generateBreadcrumbSchema(currentPageName: string, currentPageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ASHA777",
        item: "https://www.asha-777.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentPageName,
        item: currentPageUrl,
      },
    ],
  }
}
