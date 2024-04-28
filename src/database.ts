import knexInstance, { Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  // debug: true,
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = knexInstance(config)
