import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle redirects for old URLs or alternate paths
  if (pathname.startsWith("/old-path")) {
    return NextResponse.redirect(new URL("/new-path", request.url))
  }

  // Handle trailing slashes consistently
  if (pathname !== "/" && pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(pathname.slice(0, -1), request.url))
  }

  // Normalize URL parameters
  if (request.nextUrl.search.includes("?category=all")) {
    return NextResponse.redirect(new URL(pathname, request.url))
  }

  // Get response
  const response = NextResponse.next()

  // Add security headers
  const securityHeaders = {
    "X-DNS-Prefetch-Control": "on",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), autoplay=()",
    "Content-Security-Policy": `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-insights.com https://*.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https://*.asha-777.com https://asha-777.com blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://*.vercel-insights.com https://*.googleapis.com;
      frame-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'self';
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-site",
  }

  // Add the headers to the response
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
}
