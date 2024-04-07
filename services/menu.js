import { ASSET_URL } from '@/config/app.js'
import { Menu } from '@/repositories/menu.js'

export const MenuService = {
  /**
   * @param {string} name
   * @param {File} photo
   * @param {string} desc
   * @param {number} price
   */
  create: (name, photo, desc, price) =>
    Menu.upload(`${name}.jpg`, photo)
      .then((upload) =>
        upload.errors ? Promise.reject(upload.errors) : upload
      )
      .then((upload) =>
        Menu.put([
          {
            name,
            photo: {
              filename: upload.name,
              drive: upload.drive_name
            },
            desc,
            price
          }
        ])
      )
      .then((menu) =>
        menu.errors ? Promise.reject(menu.errors) : menu
      )
      .then((menu) =>
        menu.failed ? Promise.reject(menu.failed.items) : menu
      )
      .then((menu) => ({
        success: true,
        message: 'Menu created successfully',
        data: menu.processed.items[0]
      }))
      .catch((errors) => ({
        success: false,
        message: 'Menu creation failed',
        errors
      })),

  retrieve: () =>
    Menu.query()
      .then((menu) => ({
        ...menu,
        items: menu.items.map((item) => ({
          ...item,
          photo: `${ASSET_URL}/${item.photo.drive}/${item.photo.filename}`
        }))
      }))
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
