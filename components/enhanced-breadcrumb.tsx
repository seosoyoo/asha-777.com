"use client"

import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem as UICreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { APP_URL } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schemas/breadcrumbSchema"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface EnhancedBreadcrumbProps {
  includeSchema?: boolean
}

export function EnhancedBreadcrumb({ includeSchema = false }: EnhancedBreadcrumbProps) {
  const pathname = usePathname()

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean)

    // Always start with home
    const breadcrumbs: BreadcrumbItem[] = [{ label: "ASHA777", href: "/", isCurrent: paths.length === 0 }]

    // Add path segments
    let currentPath = ""
    paths.forEach((path, i) => {
      currentPath += `/${path}`
      breadcrumbs.push({
        label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
        href: currentPath,
        isCurrent: i === paths.length - 1,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Generate JSON-LD schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs[breadcrumbs.length - 1].label,
    `${APP_URL}${breadcrumbs[breadcrumbs.length - 1].href}`,
  )

  return (
    <>
      {/* JSON-LD Schema - only render if includeSchema is true */}
      {includeSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}

      {/* Visible Breadcrumb */}
      <Breadcrumb aria-label="Breadcrumb">
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.href}>
              <UICreadcrumbItem>
                {breadcrumb.isCurrent ? (
                  <BreadcrumbLink aria-current="page">{breadcrumb.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </UICreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}
