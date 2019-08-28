import { AsyncStorage } from 'react-native'
import { isString } from 'lodash'

export const storage = {
  set: async (key, data) => {
    try {
      if (isString(data)) {
        return await AsyncStorage.setItem(key, data)
      }
      return await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log(error.message)
      return undefined
    }
  },

  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      try {
        return JSON.parse(value)
      } catch {
        return value
      }
    } catch (error) {
      console.log(error.message)
    }
  },

  remove: async (key) => {
    try {
      return await AsyncStorage.removeItem(key)
    } catch (error) {
      console.log(error.message)
    }
  },

  removeMany: async (keys) => {
    try {
      return await AsyncStorage.multiRemove(keys)
    } catch (error) {
      console.log(error.message)
    }
  }
}
