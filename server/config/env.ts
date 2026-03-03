import dotenv from 'dotenv'
dotenv.config()

//***********API KEYS************//
//Check to see whether all necessary parameters are being delivered from env
//Using process.env.TMDB_API_KEY typescript sees as string | undefined, and complains
function getEnv(name: string): string {
  const value = process.env[name] //Node's runtime environment variable store
  if (!value) { //throws if undefined, '', 0, null
    throw new Error(`Missing env variable: ${name}`)
  }
  return value
}


export const TMDB_API_KEY = getEnv('TMDB_API_KEY')
export const TMDB_READACCESS_TOKEN = getEnv(`TMDB_READACCESS_TOKEN`)