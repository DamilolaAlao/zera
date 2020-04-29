import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import SideMenu from './sideMenu'
import Home from '../screens/User/Home/index.js'
import BottomTab from './bottomTab'
export default createDrawerNavigator(
  {
    Home: {screen: Home},
    BottomTab: {screen: BottomTab},
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    contentOptions: {
      inactiveTintColor: '#ffffff',
      activeTintColor: 'red',
    },
    navigationOptions: {
      drawerLockMode: 'locked-closed',
    },
  },
)
