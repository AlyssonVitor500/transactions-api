import { z } from 'zod'
import { transformStringToBoolean } from '../utils/transform-string-to-boolean'

export const booleanEnvValue = z
  .string()
  .default('false')
  .transform(transformStringToBoolean)
