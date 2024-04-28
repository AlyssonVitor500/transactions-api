import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'
import { logRoute } from './middlewares/log-route'
import { env } from './env'

const app = fastify()

app.register(cookie)
if (env.DEBUG_TRACE) app.addHook('preHandler', logRoute)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

export default app
