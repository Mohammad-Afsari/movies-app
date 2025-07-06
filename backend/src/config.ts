import assert from 'assert'
import * as dotenv from 'dotenv'
dotenv.config()

assert(process.env.PORT, 'PORT should be set')
export const PORT = process.env.PORT as string

assert(process.env.OMDB_API_KEY, 'OMDB_API_KEY should be set')
export const OMDB_API_KEY = process.env.OMDB_API_KEY as string

assert(process.env.OMDB_API_URL, 'OMDB_API_URL should be set')
export const OMDB_API_URL = process.env.OMDB_API_URL as string
