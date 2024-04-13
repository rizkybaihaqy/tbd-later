import { Shop } from '@/repositories/shop.js'

export const ShopService = {
  /**
   * @param {string} name
   * @param {string} password
   * @param {File} logo
   */
  create: (name, password, logo) =>
    Shop.upload('logo.png', logo)
      .then((upload) =>
        upload.errors ? Promise.reject(upload.errors) : upload
      )
      .then((upload) =>
        Shop.put([
          {
            key: 'shop',
            name,
            password,
            logo: {
              filename: upload.name,
              drive: upload.drive_name
            }
          }
        ])
      )
      .then((shop) =>
        shop.errors ? Promise.reject(shop.errors) : shop
      )
      .then((shop) =>
        shop.failed ? Promise.reject(shop.failed.items) : shop
      )
      .then((shop) => ({
        success: true,
        message: 'Shop created successfully',
        data: shop.processed.items[0]
      }))
      .catch((errors) => ({
        success: false,
        message: 'Shop creation failed',
        errors
      })),

  /**
   * @param {string} key
   */
  retrieve: (key) =>
    Shop.get(key)
      .then((shop) =>
        !shop.name ? Promise.reject(['Shop not found']) : shop
      )
      .then((shop) => ({
        success: true,
        message: 'Shop retrieved successfully',
        data: shop
      }))
      .catch((errors) => ({
        success: false,
        message: 'Shop retrieval failed',
        errors
      }))
}
