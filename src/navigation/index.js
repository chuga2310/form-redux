import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, BottomTabBar } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScheduleScreenContainer } from '@containers/Schedule'
import { SettingContainer } from '@containers/Setting'
import { HomeComponent } from '@components'
import translate from '@i18n'
import { Color } from '@styles'

const getTabBarIcon = (iconName, focused) => <Ionicons light={!focused} solid={focused} name={iconName} style={{ fontSize: focused ? 28 : 24, color: focused ? Color.primary : Color.muted }} />

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeComponent,
    navigationOptions: {
      tabBarLabel: translate('tab.home'),
      tabBarIcon: ({ focused }) => getTabBarIcon('ios-home', focused),
    }
  },

  Schedule: {
    screen: ScheduleScreenContainer,
    navigationOptions: {
      tabBarLabel: translate('tab.schedule'),
      tabBarIcon: ({ focused }) => getTabBarIcon('md-calendar', focused),
    }
  },

  Setting: {
    screen: SettingContainer,
    navigationOptions: {
      tabBarLabel: translate('tab.setting'),
      tabBarIcon: ({ focused }) => getTabBarIcon('md-settings', focused),
    }
  }
})


export default createAppContainer(MainNavigator)
