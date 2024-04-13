import { ASSET_URL } from '@/config/app.js'

/**
 * @param {Object} photo
 * @param {string} photo.drive
 * @param {string} photo.filename
 * @returns {string}
 */
export const toSrc = (photo) => {
  return `${ASSET_URL}/${photo.drive}/${photo.filename}`
}
