const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT } = require('next/constants');
/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const reactStrictMode = true
  const assetPrefix = './'
  const trailingSlash = true

  switch (phase) {
    case 'PHASE_EXPORT':
      return {
        reactStrictMode,
        assetPrefix,
        trailingSlash,
      }
    case 'PHASE_DEVELOPMENT_SERVER':
      return {
        reactStrictMode
      }
    default:
      return {
        reactStrictMode,
        assetPrefix,
        trailingSlash,
      }
  }
}
