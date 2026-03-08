export async function getJSON<T = any>(url: string, options?: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: T = await res.json()
    return data
  } catch (err) {
    // optional: log or rethrow
    throw err
  }
}