/**
 * @typedef {Object} UploadResponse
 * @property {string} name
 * @property {string} project_id
 * @property {string} drive_name
 * @property {string[]} errors
 */

/**
 * @typedef {Object} ListResponse
 * @property {Object} paging
 * @property {string} paging.size
 * @property {string} paging.last
 * @property {string[]} names
 */

/**
 * @typedef {Object} PurgeResponse
 * @property {string[]} deleted
 * @property {string[]} failed
 */
