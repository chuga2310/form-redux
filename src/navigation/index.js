import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, BottomTabBar } from 'react-navigation'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import { ExampleComponent } from '@components'
import translate from '@i18n'
import { Color } from '@style'

const getTabBarIcon = (iconName, focused) => <FontAwesome5Pro light={!focused} solid={focused} name={iconName} style={{ fontSize: 24, color: focused ? Color.primary : Color.muted }} />

const MainNavigator = createBottomTabNavigator({
  Example: {
    screen: ExampleComponent,
    navigationOptions: {
      tabBarLabel: translate('tab.discovery'),
      tabBarIcon: ({ focused }) => getTabBarIcon('globe', focused),
    }
  },
})


export default createAppContainer(MainNavigator)
