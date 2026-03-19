import { type NextRequest, NextResponse } from "next/server"
import { getUserByEmail } from "@/lib/userslocal"
import { verifyPassword, createSession } from "@/lib/auth"
import { validateLogin } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    const validation = validateLogin({ email, password })
    if (!validation.isValid) {
      return NextResponse.json({ error: "Validation failed", details: validation.errors }, { status: 400 })
    }

    // Find user
    const user = await getUserByEmail(email.toLowerCase().trim())
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create session
    await createSession({
      id: user.id || user.id?.toString() || "",
      email: user.email,
      name: user.name,
    })

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user.id || user.id?.toString(),
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
