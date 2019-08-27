import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import App from './App'
import { name as appName } from './app.json'
import allReducers from './src/reducers'
import rootSaga from './src/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
console.disableYellowBox = true
console.reportErrorsAsExceptions = false

export default class Consultant extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => Consultant)
