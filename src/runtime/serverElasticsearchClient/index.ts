import {H3Event, defineEventHandler} from 'h3'
import {Client} from '@elastic/elasticsearch'
import useConfig from './config'

export default defineEventHandler(async (event: H3Event) => {
  const { clientOpts } = useConfig()
  if (!event.context.serverElasticsearchClient) {
    event.context.serverElasticsearchClient = new Client({ ...clientOpts })
  }

  event.context.serverElasticsearchClient
})
