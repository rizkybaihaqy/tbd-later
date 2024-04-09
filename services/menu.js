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
      })),

  retrieveCategories: () =>
    Menu.query()
      .then((menu) =>
        menu.items.map((item) => ({
          key: item.key,
          name: item.category
        }))
      )
      .then((categories) => ({
        success: true,
        message: 'Categories retrieved successfully',
        data: categories
      }))
      .catch((errors) => ({
        success: false,
        message: 'Categories retrieval failed',
        errors
      })),

  createCategories: (name) =>
    Menu.put([{ category: name, items: [] }])
      .then((categories) =>
        categories.errors
          ? Promise.reject(categories.errors)
          : categories
      )
      .then((categories) =>
        categories.failed
          ? Promise.reject(categories.failed.items)
          : categories
      )
      .then((categories) => ({
        success: true,
        message: 'Categories created successfully',
        data: categories.processed.items[0]
      }))
      .catch((errors) => ({
        success: false,
        message: 'Categories creation failed',
        errors
      })),

  retrieveCategory: (key) =>
    Menu.get(key)
      .then((menu) =>
        !menu.category ? Promise.reject('Category not found') : menu
      )
      .then((menu) => ({ key: menu.key, name: menu.category }))
      .then((category) => ({
        success: true,
        message: 'Category retrieved successfully',
        data: category
      }))
      .catch((errors) => ({
        success: false,
        message: 'Category retrieval failed',
        errors
      })),

  editCategory: (key, name) =>
    Menu.update(key, 'set', { category: name })
      .then((categories) =>
        categories.errors
          ? Promise.reject(categories.errors)
          : categories
      )
      .then((categories) => ({
        success: true,
        message: 'Categories updated successfully',
        data: categories.set
      }))
      .catch((errors) => ({
        success: false,
        message: 'Categories update failed',
        errors
      })),

  addMenu: (category, name, photo, desc, price) =>
    Menu.query([{ category }])
      .then((menu) =>
        menu.items.length === 0
          ? Promise.reject('Category not found')
          : menu
      )
      .then((menu) =>
        Menu.update(menu.items[0].key, 'append', {
          items: [
            {
              name,
              photo: `${ASSET_URL}/${photo}`,
              desc,
              price
            }
          ]
        })
      )
      .then((menu) =>
        menu.errors ? Promise.reject(menu.errors) : menu
      )
      .then((menu) => ({
        success: true,
        message: 'Menu added successfully',
        data: menu.append.items[0]
      }))
      .catch((errors) => ({
        success: false,
        message: 'Menu addition failed',
        errors
      }))
}
