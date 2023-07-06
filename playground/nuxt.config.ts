import {ClientOptions} from '@elastic/elasticsearch'

const clientOpts: ClientOptions = {
  auth: {
    username: process.env.NUXT_ELASTICSEARCH_USERNAME || 'elastic',
    password: process.env.NUXT_ELASTICSEARCH_PASSWORD || 'elastic',
  }
}

if (process.env.NUXT_ELASTICSEARCH_CLOUD_ID) {
  clientOpts.cloud = { id: process.env.NUXT_ELASTICSEARCH_CLOUD_ID }
} else if (process.env.NUXT_ELASTICSEARCH_URL) {
  clientOpts.node = process.env.NUXT_ELASTICSEARCH_URL
}

export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxtElasticsearch: {
    clientOpts
  },
  devtools: { enabled: true }
})
