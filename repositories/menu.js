import { DETA_HEADERS, DETA_BASE_URL } from "@/config/deta";

export const Menu = {
  /**
   * @param {String} key
   * @returns {Promise<Menu>}
   */
  get: (key) =>
    fetch(`${DETA_BASE_URL}/menus/items/${key}`, {
      method: "GET",
      headers: DETA_HEADERS,
    }).then((res) => res.json()),

  /**
   * @param {Menu[]} items
   * @returns {Promise<PutResponse<Menu>>}
   */
  put: (items) =>
    fetch(`${DETA_BASE_URL}/menus/items`, {
      method: "PUT",
      headers: DETA_HEADERS,
      body: JSON.stringify({
        items,
      }),
    }).then((res) => res.json()),

  /**
   * @returns {Promise<Menu[]>}
   */
  query: () =>
    fetch(`${DETA_BASE_URL}/menus/query`, {
      method: "POST",
      headers: DETA_HEADERS,
    })
      .then((res) => res.json())
      .then((body) => body.items),

  /**
   * @param {String} key
   * @param {Menu[]} set
   * @returns {Promise<any>}
   */
  update: (key, set) =>
    fetch(`${DETA_BASE_URL}/menus/items/${key}`, {
      method: "PATCH",
      headers: DETA_HEADERS,
      body: JSON.stringify({
        set,
      }),
    }).then((res) => res.json()),

  /**
   * @param {String} key
   * @returns {Promise<String>}
   */
  delete: (key) =>
    fetch(`${DETA_BASE_URL}/menus/items/${key}`, {
      method: "DELETE",
      headers: DETA_HEADERS,
    }).then((res) => res.json()),
};
