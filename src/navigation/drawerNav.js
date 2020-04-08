import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import SideMenu from './sideMenu';
// import Home from '../screens/User/Home/index.js'
import Transactions from '../screens/User/Dashboard/Transactions/index.js';
import Profile from '../screens/User/Profile/index';
import BottomTab from './bottomTab';
import ContactUs from '../screens/User/contactUs/index';

export default (MainNavigation = createAppContainer (
  createDrawerNavigator (
    {
      BottomTab: {screen: BottomTab},
      Profile: {screen: Profile},
      Transactions: {screen: Transactions},
      ContactUs: {screen: ContactUs},
    },
    {
      contentComponent: props => <SideMenu {...props} />,
      contentOptions: {
        inactiveTintColor: '#ffffff',
        activeTintColor: 'red',
      },
      //     navigationOptions: {
      //       drawerLockMode: 'locked-closed'
      // },
    }
  )
));
