import { ASSET_URL } from '@/config/app.js'
import { Menu } from '@/repositories/menu.js'

export const MenuService = {
  retrieve: () =>
    Menu.query()
      .then((menu) => ({
        success: true,
        message: 'Menu retrieved successfully',
        data: menu
      }))
      .catch((errors) => ({
        success: false,
        message: 'Menu retrieval failed',
        errors
      }))
}
