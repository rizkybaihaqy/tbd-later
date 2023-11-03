import { DETA_HEADERS, DETA_BASE_URL } from "@/config/deta";

export const Shop = {
  /**
   * @param {String} key
   * @returns {Promise<Shop>}
   */
  get: (key) =>
    fetch(`${DETA_BASE_URL}/shops/items/${key}`, {
      method: "GET",
      headers: DETA_HEADERS,
      next: { tags: ["shops"] },
    }).then((res) => res.json()),

  /**
   * @param {Shop[]} items
   * @returns {Promise<PutResponse<Shop>>}
   */
  put: (items) =>
    fetch(`${DETA_BASE_URL}/shops/items`, {
      method: "PUT",
      headers: DETA_HEADERS,
      body: JSON.stringify({ items }),
      cache: "no-store",
    }).then((res) => res.json()),
};
