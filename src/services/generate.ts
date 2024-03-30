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
  const URL = 'https://api.api-ninjas.com/v1/passwordgenerator'
  const response = await fetch(`${URL}?${query}`, {
    headers: {
      'X-Api-Key': 'MH51eNgBEn79bqVP5AlaBQ==XAJeb6kPaSbb4V4U'
    }
  })
  const data = await response.json()
  return data as {
    random_password: string
  }
}
