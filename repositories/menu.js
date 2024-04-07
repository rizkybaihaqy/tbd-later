import { Deta } from '@/lib/deta/index.js'

export const Menu = Deta({
  name: 'menus',
  property: {
    key: '',
    name: '',
    photo: {
      filename: '',
      drive: ''
    },
    desc: '',
    price: ''
  }
})
