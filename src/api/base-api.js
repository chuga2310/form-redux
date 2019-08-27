import axios from 'axios'
import translate from '@i18n'
import { API_HOST, IDENTITY_HOST } from '@configs'

export class BaseApi {
  apiHostUrl = `${API_HOST}/api/v1`

  identityApiHostUrl = `${IDENTITY_HOST}/api/v1`

  baseUri: string

  constructor(baseUri: string) {
    this.baseUri = baseUri
  }

  async get(uri, params, noAddPrefix = false) {
    const url = this.createUrl(uri, noAddPrefix)
    return axios.get(url, {
      params
    }).then(response => this.onSuccess(response)).catch(error => this.onFailed(error))
  }

  async post(uri, data, params, noAddPrefix = false) {
    const url = this.createUrl(uri, noAddPrefix)
    return axios.post(url, data, {
      params
    }).then(response => response && response.data).catch(error => this.onFailed(error))
  }

  async put(uri, data, params, noAddPrefix = false) {
    const url = this.createUrl(uri, noAddPrefix)
    return axios.put(url, data, {
      params
    }).then(response => response && response.data).catch(error => this.onFailed(error))
  }

  async delete(uri, data, params, noAddPrefix = false) {
    const url = this.createUrl(uri, noAddPrefix)
    return axios({
      method: 'delete',
      url,
      data,
      params,
    }).then(response => response && response.data).catch(error => this.onFailed(error))
  }

  createUrl(uri: string, noPrefix: boolean) {
    return noPrefix ? uri : `${this.apiHostUrl}/${this.baseUri}/${uri}`
  }

  onSuccess = response => response && response.data

  onFailed = (error) => {
    console.warn('API error', error)
    const response = error && error.response
    const data = response && response.data
    const messages = data && data.messages
    if (response.status === 401) {
      // Event.emitEventUnauthorized()
    }

    if (messages && Array.isArray(messages)) {
      throw messages.join(',')
    }
    throw translate('error.generic')
  }
}
