<template>
  <div>
    <pre><code>{{ data }}</code></pre>
  </div>
</template>

<script setup>
import {useFetch} from '#app'

const { data } = useFetch('/api/ping')
</script>
