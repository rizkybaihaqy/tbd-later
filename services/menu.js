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

  destroy: (key) =>
    Menu.get(key)
      .then((menu) =>
        !menu.category ? Promise.reject('Category not found') : menu
      )
      .then((menu) =>
        menu.items.length !== 0
          ? Promise.reject('Category is not empty')
          : menu
      )
      .then((menu) => Menu.delete(menu.key))
      .then((menu) => ({
        success: true,
        message: 'Category deleted successfully',
        data: menu
      }))
      .catch((errors) => ({
        success: false,
        message: 'Category deletion failed',
        errors
      })),

  addMenu: (category, name, photo, desc, price) =>
    Menu.query([{ category }])
      .then((menu) =>
        menu.items.length === 0
          ? Promise.reject('Category not found')
          : menu
      )
      .then((menu) => menu.items[0])
      .then((menu) =>
        Promise.all([menu, Menu.upload(`${name}.jpeg`, photo)])
      )
      .then(([menu, upload]) =>
        upload.errors ? Promise.reject(upload.errors) : [menu, upload]
      )
      .then(([menu, photo]) =>
        Menu.update(menu.key, 'append', {
          items: [
            {
              name,
              photo: {
                filename: photo.name,
                drive: photo.drive_name
              },
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
