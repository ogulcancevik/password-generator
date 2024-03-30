export function queryBuilder(params: Record<string, any>) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}
