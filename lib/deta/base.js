import { DETA_BASE_URL, DETA_PROJECT_KEY } from "@/config/deta";

/**
 * @template T
 * @param {Object} model
 * @param {String} model.name
 * @param {T} model.property
 */
export const Base = ({ name }) => ({
  /**
   * Stores multiple items in a single request.
   * This request overwrites an item if the key already exists.
   * @param {T[]} items
   * @returns {Promise<PutResponse<T>>}
   */
  put: (items) =>
    fetch(`${DETA_BASE_URL}/${name}/items`, {
      method: "PUT",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
      }),
      cache: "no-store",
    }).then((res) => res.json()),

  /**
   * Get a stored item.
   * @param {String} key
   * @returns {Promise<T>}
   */
  get: (key) =>
    fetch(`${DETA_BASE_URL}/${name}/items/${key}`, {
      method: "GET",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
        "Content-Type": "application/json",
      },
      next: { tags: [name] },
    }).then((res) => res.json()),

  /**
   * Delete a stored item.
   * @param {String} key
   * @returns {Promise<{key:String}>}
   */
  delete: (key) =>
    fetch(`${DETA_BASE_URL}/${name}/items/${key}`, {
      method: "DELETE",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }).then((res) => res.json()),

  /**
   * Updates an item only if an item with key exists.
   * @param {String} key
   * @param {T} set The attributes to be updated or created.
   * @returns {Promise<UpdateResponse<T>>}
   */
  update: (key, set) =>
    fetch(`${DETA_BASE_URL}/${name}/items/${key}`, {
      method: "PATCH",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        set,
      }),
      cache: "no-store",
    }).then((res) => res.json()),

  /**
   * List items that match a query.
   * @param {Object[]} query list of a query
   * @param {Number} limit no of items to return. min value 1 if used
   * @param {String} last last key seen in a previous paginated response
   * @param {String} sort asc or desc, default ‘asc’
   * @returns {Promise<QueryResponse<T>>}
   */
  query: (query, limit, last, sort) =>
    fetch(`${DETA_BASE_URL}/${name}/query`, {
      method: "POST",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        limit,
        last,
        sort,
      }),
      next: { tags: [name] },
    }).then((res) => res.json()),
});
