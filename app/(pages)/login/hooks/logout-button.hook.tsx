"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function LogoutButtonHook() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })

      if (response.ok) {
        router.push("/login")
        router.refresh()
      }
    } catch (error) {
      console.error("Erro de saída do sistema:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, setIsLoading, handleLogout }
}