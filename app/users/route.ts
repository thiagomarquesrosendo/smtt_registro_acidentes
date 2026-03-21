import { type NextRequest, NextResponse } from "next/server"
import { getUserCount } from "@/lib/userslocal"
import { getSession } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Acesso não autorizado" }, { status: 401 })
    }

    const userCount = await getUserCount()

    return NextResponse.json({
      userCount,
      message: "Estatísticas do usuário recuperadas com sucesso",
    })
  } catch (error) {
    console.error("Erro no retorno dos usuários:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
