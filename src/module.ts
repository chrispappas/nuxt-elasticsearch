import {defineNuxtModule, createResolver, useLogger, addServerHandler} from '@nuxt/kit'
import defu from 'defu'
import {ClientOptions} from '@elastic/elasticsearch'

// Module options TypeScript interface definition
export interface ModuleOptions {
  clientOpts: ClientOptions
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-elasticsearch',
    configKey: 'nuxtElasticsearch',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    clientOpts: {},
  },
  async setup (options, nuxt) {
    const logger = useLogger('nuxt-elasticsearch')
    logger.success('Module init...')

    nuxt.options.runtimeConfig.serverElasticsearchClient = defu(nuxt.options.runtimeConfig.serverElasticsearchClient, options)

    const resolver = createResolver(import.meta.url)

    addServerHandler({
      // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
      handler: resolver.resolve('./runtime/serverElasticsearchClient'),
      middleware: true,
    })
  }
})
