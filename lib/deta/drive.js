import { DETA_DRIVE_URL, DETA_PROJECT_KEY } from "@/config/deta.js";

export const Drive = {
  /**
   * @param {String} name
   * @returns {Promise<Blob>}
   */
  get: (name) =>
    fetch(`${DETA_DRIVE_URL}/shops/files/download?name=${name}`, {
      method: "GET",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      next: { tags: ["assets"] },
    }).then((res) => res.blob()),

  /**
   * @param {String} name
   * @param {File} file
   * @returns {Promise<DriveCreatedResponse>}
   */
  put: (name, file) =>
    fetch(`${DETA_DRIVE_URL}/shops/files?name=${name}`, {
      method: "POST",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      body: file,
      cache: "no-store",
    }).then((res) => res.json()),

  /**
   * @returns {Promise<DriveListResponse>}
   */
  list: () =>
    fetch(`${DETA_DRIVE_URL}/shops/files`, {
      method: "GET",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      next: { tags: ["assets"] },
    }).then((res) => res.json()),
};
