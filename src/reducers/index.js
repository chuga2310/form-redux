import { combineReducers } from 'redux'
import _, { some, get } from 'lodash'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import refreshingReducer from './refreshingReducer'
import fallbackReducer from './fallbackReducer'

export const createLoadingSelector = actions => state => some(actions, action => get(state, `loading.${action}`))

export const createRefreshingSelector = actions => state => some(actions, action => get(state, `refreshing.${action}`))

export const createErrorSelector = actions => state => _(actions)
  .map(action => _.get(state, `error.${action}`))
  .compact()
  .first() || ''

export const createDoneSelector = actions => state => some(actions, action => (get(state, `success.${action}`) || get(state, `error.${action}`)))

export const isLoading = (state, ...actions) : boolean => {
  actions = (actions || []).map(a => a.replace(/_REQUEST$/, ''))
  const selectorLoading = createLoadingSelector(actions)
  return selectorLoading(state)
}

export const isRefreshing = (state, ...actions) : boolean => {
  actions = (actions || []).map(a => a.replace(/_REQUEST$/, ''))
  const selectorRefreshing = createRefreshingSelector(actions)
  return selectorRefreshing(state)
}

export const getError = (state, ...actions) : boolean => {
  actions = (actions || []).map(a => a.replace(/_REQUEST$/, ''))
  const selector = createErrorSelector(actions)
  return selector(state)
}

const allReducers = combineReducers({
  error: errorReducer,
  loading: loadingReducer,
  refreshing: refreshingReducer,
  fallback: fallbackReducer
})

export default allReducers
