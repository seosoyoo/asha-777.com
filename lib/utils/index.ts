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
