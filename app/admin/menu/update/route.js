import { MenuService } from '@/services/menu.js'

/**
 *
 * @param {Request} request
 */
export async function PATCH(request) {
  return request
    .json()
    .then((data) => {
      const promises = data.map((delta) =>
        MenuService.reorderMenus(delta.key, delta.items)
      )
      return Promise.all(promises)
    })
    .then(() => new Response('OK', { status: 200 }))
    .catch((error) => new Response(error, { status: 500 }))
}
