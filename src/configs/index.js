const config = {
  host: 'https://api.prod.everlearn.vn',
  identityCallback: undefined,
  identity: 'https://id.prod.everlearn.vn',
}

/** config for debug */
// const config = {
//   host: 'https://api.sit.everlearn.vn',
//   identityCallback: undefined,
//   identity: 'https://id.sit.everlearn.vn',
// }

const API_HOST = config.host
const IDENTITY_HOST = config.identity
const IDENTITY_CALLBACK = config.identityCallback

export {
  API_HOST,
  IDENTITY_HOST,
  IDENTITY_CALLBACK
}

export default config
