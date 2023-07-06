import { useRuntimeConfig } from '#imports'
import {ModuleOptions} from '../../module'

export default (): ModuleOptions => useRuntimeConfig().serverElasticsearchClient
