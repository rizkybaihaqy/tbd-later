/**
 * @typedef {Object} UploadResponse
 * @property {String} name
 * @property {String} project_id
 * @property {String} drive_name
 * @property {String[]} errors
 */

/**
 * @typedef {Object} ListResponse
 * @property {Object} paging
 * @property {String} paging.size
 * @property {String} paging.last
 * @property {String[]} names
 */

/**
 * @typedef {Object} PurgeResponse
 * @property {String[]} deleted
 * @property {String[]} failed
 */