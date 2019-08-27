import i18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'
import moment from 'moment/min/moment-with-locales' 
import en from './locales/en.json'
import vi from './locales/vi.json'
import { storage } from '@utils'

storage.get('preferredLanguage').then((language) => {
  if (language) {
    i18n.defaultLocale = language.languageCode
    i18n.locale = language.languageCode
  } else {
    if(RNLocalize.getLocales()[0].languageCode === 'vi' || RNLocalize.getLocales()[0].languageCode === 'en'){
      i18n.defaultLocale = RNLocalize.getLocales()[0].languageCode
      i18n.locale = RNLocalize.getLocales()[0].languageCode
      moment.locale(RNLocalize.getLocales()[0].languageCode)
    }else{
      i18n.defaultLocale = 'en'
      i18n.locale = 'en'
      moment.locale('en')
    }
  }
}).catch((error) => {
  if(RNLocalize.getLocales()[0].languageCode === 'vi' || RNLocalize.getLocales()[0].languageCode === 'en'){
    i18n.defaultLocale = RNLocalize.getLocales()[0].languageCode
    i18n.locale = RNLocalize.getLocales()[0].languageCode
    moment.locale(RNLocalize.getLocales()[0].languageCode)
  }else{
    i18n.defaultLocale = 'en'
    i18n.locale = 'en'
    moment.locale('en')
  }
})

i18n.fallbacks = true
i18n.translations = { en, vi }

const translate = (...params) => i18n.t(...params)

export default translate
