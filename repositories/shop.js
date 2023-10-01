import { DETA_HEADERS, DETA_PROJECT_URL } from "@/config/deta";

export const Shop = {
  /**
   * @param {String} key
   * @returns {Promise<Shop>}
   */
  get: (key) =>
    fetch({
      url: `${DETA_PROJECT_URL}/shops/items/${key}`,
      method: "GET",
      headers: DETA_HEADERS,
    }).then((res) => res.json()),

  /**
   * @param {Shop[]} items
   * @returns {Promise<PutResponse<Shop>>}
   */
  put: (items) =>
    fetch({
      url: `${DETA_PROJECT_URL}/shops/items`,
      method: "PUT",
      headers: DETA_HEADERS,
      body: JSON.stringify({ items }),
    }).then((res) => res.json()),
};
