import { FastifyRequest } from 'fastify'

export async function logRoute(req: FastifyRequest) {
  console.log(`[${req.method}] ${req.url}`)
}
