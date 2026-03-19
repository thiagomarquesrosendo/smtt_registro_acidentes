import { UserModel, type User, type CreateUserData } from "@/lib/models/userlocal"

export type { User, CreateUserData }

export async function getUserByEmail(email: string): Promise<User | null> {
  return await UserModel.getUserByEmail(email)
}

export async function getUserById(id: string): Promise<User | null> {
  return await UserModel.getUserById(id)
}

export async function getUserCount(): Promise<number> {
  return await UserModel.getUserCount()
}
