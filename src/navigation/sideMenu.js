import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {hp, wp} from '../styles/onBoarding-styles';
// import {NavigationActions} from 'react-navigation'
import {RobotoText} from '../components/RobotoText';
import {RubikText} from '../components/RubikText';
import TransactionIcon from '../assets/svgs/history.svg';
import NotificationIcon from '../assets/svgs/notification.svg';
import ProfileIcon from '../assets/svgs/profile.svg';
import LogoutIcon from '../assets/svgs/logout.svg';
import ContactUsIcon from '../assets/svgs/contactUs.svg';
import ShareIcon from '../assets/svgs/share.svg';

export default class SideMenu extends React.Component {
  render () {
    var profilePicture = require ('../assets/images/dp.png');
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.profilePicBox}>
            <Image
              style={styles.profilePicture}
              resizeMode="cover"
              // resizeMethod='resize'
              source={profilePicture}
            />
          </View>

          <RobotoText style={styles.name}>Funmi Johnson</RobotoText>
          <RobotoText
            style={[
              styles.name,
              {color: 'lightgrey', fontSize: hp (14), marginVertical: 0},
            ]}
          >
            Bronze — 25pts
          </RobotoText>

          <RobotoText style={styles.name}>Funmi Johnson</RobotoText>
          <RobotoText
            style={[styles.name, {color: 'lightgrey', fontSize: hp (14)}]}
          >
            Bronze — 25pts
          </RobotoText>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.links}>
            <NotificationIcon
              style={styles.linkImage}
              // resizeMode='contain'
              // source={require('../assets/images/bell.png')}
            />
            <RubikText style={styles.linkText}>Notification</RubikText>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Transactions')}
            style={styles.links}
          >
            <TransactionIcon
              style={styles.linkImage}
              // resizeMode='contain'
              // source={require('../assets/images/history.png')}
            />
            <RubikText style={styles.linkText}>Transactions</RubikText>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Profile')}
            style={styles.links}
          >
            <ProfileIcon
              style={styles.linkImage}
              // resizeMode='contain'
              // source={require('../assets/images/history.png')}
            />
            <RubikText style={styles.linkText}>Profile</RubikText>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('ContactUs')}
            style={styles.links}
          >
            <ContactUsIcon
              style={styles.linkImage}
              // resizeMode='contain'
              // source={require('../assets/images/history.png')}
            />
            <RubikText style={styles.linkText}>Contact Us</RubikText>

          </TouchableOpacity>
          <TouchableOpacity style={styles.links}>
            <ShareIcon
              style={styles.linkImage}
              // resizeMode='contain'
              // source={require('../assets/images/history.png')}
            />
            <RubikText style={styles.linkText}>Share to others</RubikText>

          </TouchableOpacity>
          <TouchableOpacity style={styles.logout}
            onPress={() => this.props.navigation.navigate ('SignIn')}
          >
            <LogoutIcon
              style={styles.linkImage}
              // resizeMode='contain'
              // source={require('../assets/images/history.png')}
            />
            <RubikText style={styles.linkText}>log out</RubikText>

          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
export const styles = StyleSheet.create ({
  linkText: {
    marginLeft: 12,
    fontSize: hp (16),
    color: 'black',
    alignSelf: 'center',
  },
  logout: {
    flexDirection: 'row',
    marginTop: hp (35),
  },
  linkImage: {
    width: wp (19),
    height: 16 / 19 * wp (19),
  },
  links: {
    flexDirection: 'row',
    marginBottom: hp (40),
    // paddingVertical:hp(.001)
  },
  bottomView: {
    paddingTop: hp (40),
    marginLeft: wp (33),
  },
  name: {
    color: '#fff',
    fontSize: hp (20),
    marginVertical: hp (14),
    //  marginLeft:wp(20)
  },
  profilePicture: {
    height: wp (84),
    width: wp (84),
    borderRadius: wp (42),
  },
  profilePicBox: {
    height: wp (84),
    width: wp (84),
    borderRadius: wp (42),
  },
  topView: {
    backgroundColor: '#000AED',
    paddingTop: hp (30),
    paddingBottom: hp (22),
    paddingLeft: wp (33),
    // alignItems:'center',
    // height:hp(250)
  },
  container: {
    flex: 1,
  },
});
// import React from 'react';

// // import  FontAwesome from 'react-native-vector-icons/FontAwesome'
// // import  EvilIcons from 'react-native-vector-icons/EvilIcons';
// // import  AntDesign from 'react-native-vector-icons/AntDesign';
// // import  Ionicons from 'react-native-vector-icons/Ionicons';
// // import  Foundation from 'react-native-vector-icons/Foundation';
// // import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';

// export default class SideMenu extends React.Component {
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//       <Text style={{fontSize:20,color:"white",paddingStart:20}}>HAMMED A.A.</Text>
//       <Text style={{color:"white",paddingStart:20}}>Last login: Apr 12 2019 07:53 AM</Text>
//       <TouchableOpacity
//           onPress={()=>this.props.navigation.navigate('Home')}
//               style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Home'?'#262628':'#404043',marginTop:10}]}>
//           <View style={{paddingTop:4}}>
//             {/* <AntDesign name="home" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Accounts</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={()=>this.props.navigation.navigate('Transfer')}
//         style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Transfer'?'#262628':'#404043'}]}>
//           <View>
//             {/* <FontAwesome name="mail-forward" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Transfers & Withdrawals</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navcontents}>
//           <View>
//             {/* <FontAwesome name="qrcode" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>QR Payments</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//           onPress={()=>this.props.navigation.navigate('Airtime')}
//       style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Airtime'?'#262628':'#404043'}]}>
//           <View>
//             {/* <MaterialCommunityIcons name="cellphone-arrow-down" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Airtime & Data</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navcontents}>
//           <View>
//             {/* <AntDesign name="home" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Sports and Gaming</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navcontents}>
//           <View>
//             {/* <AntDesign name="home" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>School Payments</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={()=>this.props.navigation.navigate('Others')}
//         style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Others'?'#262628':'#404043'}]}>
//           <View>
//             {/* <AntDesign name="home" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Other Payments</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={()=>this.props.navigation.navigate('Card')}
//         style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Card'?'#262628':'#404043'}]}>
//           <View>
//             {/* <Ionicons name="md-card" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Cards & cheques</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//          onPress={()=>this.props.navigation.navigate('Lifestyle')}
//         style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Lifestyle'?'#262628':'#404043'}]}>
//           <View>
//             {/* <Foundation name="social-picasa" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Lifestyle</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//       onPress={()=>this.props.navigation.navigate('Settings')}
//       style={[styles.navcontents,{backgroundColor:this.props.activeItemKey==='Settings'?'#262628':'#404043'}]}>
//           <View>
//             {/* <Foundation name="social-picasa" size={22} color="#C15821"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>settings</Text>
//             </View>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.navcontents,{absolutePosition:"bottom",backgroundColor:"red",height:45}]}>
//           <View>
//             {/* <Ionicons name="ios-log-out" size={32} color="white"/> */}
//           </View>
//           <View style={{paddingLeft:10,paddingTop:6.5}}>
//             <Text style={{fontSize:18,color:"white",}}>Logout</Text>
//             </View>
//       </TouchableOpacity>

//       </ScrollView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#404043',

//     },
//     navcontents:{
//       borderWidth:.5,
//       paddingVertical:5,
//       flexDirection:'row',
//       paddingLeft:20,
//       height:50

//     }
//   })
