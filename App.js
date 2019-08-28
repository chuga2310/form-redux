import React, { PureComponent } from 'react'
import AppNavigation from './src/navigation'

export default class App extends PureComponent {
  componentDidMount() {
    // storage.removeMany(['domain', 'accessToken', 'email'])
  }

  render() {
    return (
      <AppNavigation />
    )
  }
}