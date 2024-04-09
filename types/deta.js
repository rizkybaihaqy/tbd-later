/**
 * @template T
 * @typedef {Object} PutResponse
 * @property {Object} processed
 * @property {T[]} processed.items
 * @property {Object} failed
 * @property {T[]} failed.items
 * @property {string[]} errors
 */

/**
 * @template T
 * @typedef {Object} UpdateResponse
 * @property {Object} key
 * @property {T} set
 * @property {T} increment
 * @property {T} append
 * @property {T} prepend
 * @property {T} delete
 * @property {string[]} errors
 */

/**
 * @template T
 * @typedef {Object} QueryResponse
 * @property {Object} paging
 * @property {number} paging.size
 * @property {string} paging.last
 * @property {T[]} items
 * @property {string[]} errors
 */
