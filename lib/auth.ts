import "server-only"
import { JWTPayload, SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
// import bcrypt from "bcryptjs"

const secretKey = process.env.JWT_SECRET || "your-secret-key-change-in-production"
const encodedKey = new TextEncoder().encode(secretKey)

// export interface SessionPayload {
//   userId: string
//   email: string
//   name: string
//   expiresAt: Date
// }

// export let SessionPayload: JWTPayload = {
//   userId: 'abc-123',
//   role: 'admin',
//   email: "",
//   name: 'João Silva',
//   sub: '1234567890',  // Assunto - Identificador único do usuário ou recurso.

//   iat: Number.parseInt("2026-04-10"),  // Tempo da criação (em segundos).
//   exp: Number.parseInt("2026-04-10"),  // Tempo da expiração (em segundos). É importante para segurança.
// }

export interface SessionPayload extends JWTPayload {
  userId: string
  role?: string
  email: string
  name: string
  iat?: number
  exp: number
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    })
    return payload as SessionPayload
  } catch (error) {
    console.log("Failed to verify session")
    return null
  }
}

export async function createSession(user: { id: string; email: string; name: string }) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({
    userId: user.id,
    email: user.email,
    name: user.name,
    exp: Number.parseInt(expiresAt + ""),
  })

  const cookieStore = await cookies()
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("session")?.value
  if (!session) return null
  return await decrypt(session)
}

export async function hashPassword(password: string) {
  // return await bcrypt.hash(password, 12)
  return await password
}

export async function verifyPassword(password: string, hashedPassword: string) {
  // return await bcrypt.compare(password, hashedPassword)
  return password == hashedPassword
}
