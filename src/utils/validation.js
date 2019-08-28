/* eslint-disable no-useless-escape */
export const validateEmailFormat = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const requireDigit = str => /\d+/.test(str)

export const requireNonSpecialCharacters = str => /^[\w\-]+$/.test(str)

export const requireNonAlphanumeric = str => /[^a-zA-Z\d]/.test(str)

export const requireLowercase = str => /[a-z]/.test(str)

export const requireUppercase = str => /[A-Z]/.test(str)

export const validatePhoneFormat = (phone) => {
  const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
  return re.test(String(phone))
}
