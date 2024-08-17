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

/**
 * @param {string | number} price
 * @returns {string}
 */
export const toRp = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(price)
}
