const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.FINHUBB_API_KEY

export async function finhubb(endpoint:string) {
     const separator =
    endpoint.includes("?")
      ? "&"
      : "?";

    const res = await fetch(`${BASE_URL}${endpoint}${separator}token=${API_KEY}`)
    if (!res.ok) {
    throw new Error(
      "Finnhub API Error"
    );
  }

  return res.json()
}