"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export function FormularioLoginHook() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.details) {
          setFieldErrors(result.details)
        } else {
          setError(result.error || "An error occurred")
        }
        return
      }

      // Success - redirect to dashboard
      router.push("/acidente")
      router.refresh()
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, setIsLoading, error, setError, fieldErrors, setFieldErrors, handleSubmit }
}