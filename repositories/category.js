import { Deta } from '@/lib/deta/index.js'

export const Category = Deta({
  name: 'categories',
  property: {
    key: '',
    name: ''
  }
})
