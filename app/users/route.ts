import { type NextRequest, NextResponse } from "next/server"
import { getUserCount } from "@/lib/userslocal"
import { getSession } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userCount = await getUserCount()

    return NextResponse.json({
      userCount,
      message: "User statistics retrieved successfully",
    })
  } catch (error) {
    console.error("Get users error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
