import "server-only"

export let collection: User[] = [
  { id: "1", name: "Thiago", email: "thiago@thiago.com", password: "123456" },
  { id: "2", name: "Safira", email: "safira@safira.com", password: "123456" },
  { id: "3", name: "Lucas", email: "lucas@lucas.com", password: "123456" },
]

export interface User {
  id?: string
  name: string
  email: string
  password: string
}

export interface CreateUserData {
  name: string
  email: string
  password: string
}

export class UserModel {
  static async getUserByEmail(email: string): Promise<User | null> {
    const user = collection.find((usr) => usr.email === email.toLowerCase().trim())
    if (!user) return null

    return {
      ...user,
      id: user.id,
    }
  }

  static async getUserById(id: string): Promise<User | null> {
    const user = collection.find((usr) => usr.id === id)

    if (!user) return null

    return {
      ...user,
      id: user.id,
    }
  }

  static async getUserCount(): Promise<number> {
    return collection.length;
  }
}
