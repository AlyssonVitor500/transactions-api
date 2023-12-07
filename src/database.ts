import 'dotenv/config'
import knexSetup from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL not found!')
}

type KynexConfig = knexSetup.Knex.Config
export const config: KynexConfig = {
  client: 'sqlite',
  debug: true,
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = knexSetup.knex(config)
