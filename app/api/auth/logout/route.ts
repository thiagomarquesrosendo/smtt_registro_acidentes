import { NextResponse } from "next/server"
import { deleteSession } from "@/lib/auth"

export async function POST() {
  try {
    await deleteSession()
    return NextResponse.json({ message: "Saída realizada com sucesso" }, { status: 200 })
  } catch (error) {
    console.error("Erro de saída do sistema:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
