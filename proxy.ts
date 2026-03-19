import { type NextRequest, NextResponse } from "next/server"
import { decrypt } from "@/lib/auth"

const protectedRoutes = ["/(pages)/acidente"]
const authRoutes = ["/(pages)/login"]

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get session from cookie
  const sessionCookie = request.cookies.get("session")?.value
  const session = sessionCookie ? await decrypt(sessionCookie) : null

  // Check if user is trying to access protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL("/(pages)/login", request.url))
    }
  }

  // Redirect authenticated users away from auth pages
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (session) {
      return NextResponse.redirect(new URL("/(pages)/acidente", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
