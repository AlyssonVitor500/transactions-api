import 'dotenv/config'
import { z } from 'zod'
import { booleanEnvValue } from './common-boolean-dot-env'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']),
  DEBUG_TRACE: booleanEnvValue,
  DEBUG_DATABASE_QUERY: booleanEnvValue,
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('⚠️ Invalid environment variables:', _env.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
