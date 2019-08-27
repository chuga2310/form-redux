import { FallbackTypes } from '@types';


const fallbackReducer = (state = null, response) => {
  switch (response.type) {
    case FallbackTypes.FALLBACK_ERROR:
      return response.action
    case FallbackTypes.FALLBACK_RETRY:
      return null
    default:
      return state
  }
}

export default fallbackReducer
