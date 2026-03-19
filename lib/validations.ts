export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export function validateSignup(data: {
  name: string
  email: string
  password: string
  confirmPassword: string
}): ValidationResult {
  const errors: Record<string, string> = {}

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long"
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Password validation
  if (!data.password || data.password.length < 6) {
    errors.password = "Password must be at least 6 characters long"
  }

  // Confirm password validation
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export function validateLogin(data: {
  email: string
  password: string
}): ValidationResult {
  const errors: Record<string, string> = {}

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Password validation
  if (!data.password || data.password.length < 1) {
    errors.password = "Password is required"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
