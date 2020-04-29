import React from 'react';
// import StyleSheet from 'react-native-extended-stylesheet';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {Icon } from '../../App'
import Home from '../screens/User/Home/index'
import DashBoard from  "../screens/User/Dashboard/index"
import Chats from '../screens/User/Chats/index'
import HomeSvg from '../assets/svgs/home.svg'
import NotificationSvg from '../assets/svgs/dashboard.svg'
import MessageSvg from '../assets/svgs/message.svg'
import {hp,wp} from '../styles/SignUp-styles'


export default (BottomTab = createBottomTabNavigator (
  { 
    Home: { screen: Home },
    DashBoard:{screen:DashBoard},
    Chats:{screen:Chats},
    
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        return <TabIcon tintColor={tintColor} routeName={routeName} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000AED',
      inactiveTintColor: '#7A7A7A',
      style: {               
        paddingVertical:wp(16),   
        height:(56/375)*wp(375),
        backgroundColor:'white'     
       },     
       showLabel:false,
      
      labelStyle:{
        fontSize:12,
        fontFamily:'roboto-light'
      },
    },
  }
));

class TabIcon extends React.PureComponent {
  render () {
    var {routeName, tintColor} = this.props;
    let svgName;
    if (routeName === 'Home') {
      svgName = <HomeSvg />;
    } else if (routeName === 'DashBoard') {

      svgName = <NotificationSvg />;
    } else if (routeName === 'Chats') {
      svgName = <MessageSvg />;
    }
    return (
      <View>
        {svgName}
        {routeName === 'Chats' && <View style={styles.badge} />}

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  badge: {
    position: 'absolute',
    height: wp (8),
    width: wp (8),
    borderRadius: wp (4),
    backgroundColor: '#FF0066',
    left: wp (16),
  },
  svgs: {
    width: wp (24),
    height: wp (24),
  },
});

// export default  BottomTab = createAppContainer(createBottomTabNavigator(
//   {

//     Home: { screen: Home },
//     DashBoard:{screen:DashBoard},
//     Third:{screen:Third},

//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { currentTabIndex } = navigation.state;
//         if (currentTabIndex === 1) {
//           return (
//            <HomeSvg style={styles.svgs}/>
//           );
//         } else if (currentTabIndex ===2) {
//           return (
//             <NotificationSvg style={styles.svgs} />

//           );
//         }
//         else if (currentTabIndex ===3) {
//             return (
//                 <MessageSvg style={styles.svgs}/>
//             );
//           }
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#000AED',
//       inactiveTintColor: '#7A7A7A',
//       style: {
//         paddingVertical: 8,
//         height:65 ,
//         backgroundColor:'white'

//        },

//       labelStyle:{
//         fontSize:12,
//         fontFamily:'roboto-light'
//       }

//     },
//   })
// );
// const styles = StyleSheet.create({
//     svgs:{
//         width:wp(24),
//         height:wp(24)
//     },
// })
