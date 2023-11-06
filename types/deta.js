/**
 * @template T
 * @typedef {Object} PutResponse
 * @property {Object} processed
 * @property {T[]} processed.items
 * @property {Object} failed
 * @property {T[]} failed.items
 * @property {String[]} errors
 */

/**
 * @template T
 * @typedef {Object} UpdateResponse
 * @property {Object} key
 * @property {T} set
 * @property {String[]} errors
 */

/**
 * @template T
 * @typedef {Object} QueryResponse
 * @property {Object} paging
 * @property {Number} paging.size
 * @property {String} paging.last
 * @property {T[]} items
 * @property {String[]} errors
 */
