import { queryBuilder } from '@/helpers/queryBuilder'

type GeneratePassword = {
  length?: number
  exclude_numbers?: boolean
  exclude_special_chars?: boolean
}
export async function generate({
  length = 16,
  exclude_numbers = false,
  exclude_special_chars = false
}: GeneratePassword) {
  const query = queryBuilder({
    length,
    exclude_numbers,
    exclude_special_chars
  })
  const URL = import.meta.env.VITE_API_URL as string
  const headers = {
    'X-Api-Key': import.meta.env.VITE_API_KEY as string
  }
  const response = await fetch(`${URL}?${query}`, {
    headers
  })
  const data = await response.json()
  return data as {
    random_password: string
  }
}
