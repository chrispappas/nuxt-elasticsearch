# Nuxt Elasticsearch Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Backend-only Elasticsearch Client for Nuxt server APIs

## Author

[Chris Pappas](https://github.com/chrispappas)

## Features

Quickly get a working Elasticsearch client into your Nuxt API endpoints. Full control over the client init options.

## Quick Setup

1. Add `nuxt-elasticsearch` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-elasticsearch

# Using yarn
yarn add --dev nuxt-elasticsearch

# Using npm
npm install --save-dev nuxt-elasticsearch
```

2. Add `nuxt-elasticsearch` to the `modules` section of `nuxt.config.ts`, and pass in a config options block for your connection details

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-elasticsearch'
  ],
  nuxtElasticsearch: {
    clientOpts: {
      node: 'https://localhost:9200',
      auth: {
        username: 'elastic',
        password: 'elastic',
      }
    }
  }
})
```

3. Build an API endpoint and use the client:

```js
export default defineEventHandler(async (event) => {
  const { serverElasticsearchClient } = event.context

  return await serverElasticsearchClient.ping()
})
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-elasticsearch/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-elasticsearch

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-elasticsearch.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-elasticsearch

[license-src]: https://img.shields.io/npm/l/nuxt-elasticsearch.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-elasticsearch

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
