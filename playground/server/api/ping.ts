import { defineEventHandler } from 'h3'
export default defineEventHandler(async (event) => {
  const { serverElasticsearchClient } = event.context

  return await serverElasticsearchClient.ping()
})
