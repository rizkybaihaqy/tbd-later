import { DETA_DRIVE_URL, DETA_PROJECT_KEY } from "@/config/deta.js";
import { revalidateTag } from "next/cache.js";

/**
 * @param {Object} model
 * @param {string} model.name
 */
export const Drive = ({ name }) => ({
  /**
   * Stores a smaller file in a single request.
   * The file is overwritten if the file with given name already exists.
   * For file smaller than 10 Mb.
   * @param {string} filename
   * @param {File} file
   * @returns {Promise<UploadResponse>}
   */
  upload: (filename, file) =>
    fetch(`${DETA_DRIVE_URL}/${name}/files?name=${filename}`, {
      method: "POST",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      body: file,
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((body) => (revalidateTag(name), body)),

  /**
   * Download a file from drive.
   * @param {string} filename
   * @returns {Promise<Blob|{errors:string[]}>}
   */
  download: (filename) =>
    fetch(`${DETA_DRIVE_URL}/${name}/files/download?name=${filename}`, {
      method: "GET",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      next: { tags: [name] },
    }).then((res) => res.blob()),

  /**
   * List file names from drive.
   * @returns {Promise<ListResponse>}
   */
  list: () =>
    fetch(`${DETA_DRIVE_URL}/${name}/files`, {
      method: "GET",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      next: { tags: [name] },
    }).then((res) => res.json()),

  /**
   * Delete files from drive.
   * @param {string[]} filenames
   * @returns {Promise<PurgeResponse>}
   */
  purge: (filenames) =>
    fetch(`${DETA_DRIVE_URL}/${name}/files`, {
      method: "DELETE",
      headers: {
        "X-API-Key": DETA_PROJECT_KEY,
      },
      body: JSON.stringify({
        names: filenames,
      }),
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((body) => (revalidateTag(name), body)),
});
