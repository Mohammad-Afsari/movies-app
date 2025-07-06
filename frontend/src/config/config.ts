import assert from 'assert'
import * as dotenv from 'dotenv'
dotenv.config()

assert(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  "'OMDB_API_BASE_URL' should be set",
)
export const OMDB_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string
