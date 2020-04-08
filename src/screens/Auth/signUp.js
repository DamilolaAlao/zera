import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import {NirmalaText} from '../../components/NirmalaText';
import {RubikText} from '../../components/RubikText';

import {styles, wp, hp} from '../../styles/SignUp-styles';

export default class SignUp extends React.Component {
  fullname = 'hammed adekunle';
  phone = '08101185213';
  password = 'qwerty12';
  country = 'Nigeria';

  state = {
    showAlert: false,
    errorMessage: '',
    alertType: '',
    email: '',
    loading: false,
  };

  Alert = (message, type) => {
    this.setState ({
      errorMessage: message,
      showAlert: true,
      alertType: type || 'Error',
    });
  };
  // SignUp(){
  //     if(this.state.email===''){
  //         this.Alert('Please type in your Email address')
  //     }
  //     else if(this.fullname===''){this.Alert("enter your name")}
  //     else if(this.phone===''){this.Alert("enter your phone number")}
  //     else if(this.password===''){this.Alert("enter your password")}
  //     else if(this.country===''){this.Alert("enter your country")}
  //     else{
  //         this.setState({loading:true})
  //         let loginDetails = new FormData()
  //         loginDetails.append('fullname',this.fullname)
  //         loginDetails.append('email',this.state.email)
  //         loginDetails.append('phone',this.phone)
  //         loginDetails.append('password',this.password)
  //         loginDetails.append('rcountry',this.country)
  //         axios.request({
  //             method:'POST',
  //             url:'https://157.245.82.193/auth/signup',
  //             headers:{
  //                 'Content-Type': 'multipart/form-data',
  //                 'X-Requested-With': 'XMLHttpRequest',
  //                 'Accept': 'application/json'
  //             },
  //             timeout:5000,
  //             data:loginDetails
  //         }).then(response=>{
  //             this.setState({loading:false})
  //             this.Alert('registerd Succesfully')
  //             this.props.navigation.navigate("BottomTab")
  //         }).then(e=>{
  //             this.setState({loading:false})
  //             if(e.response){Alert('sorry email already in use')}
  //             else{Alert('Error with your network, please check your network')}
  //         })
  //     }

  // }
  render () {
    return (
      <View style={styles.container}>

        <Image
          resizeMode="contain"
          style={styles.topImage}
          source={require ('../../assets/images/signup.png')}
        />
        <NirmalaText style={styles.signUpText}>Sign up</NirmalaText>

        <View style={styles.optionBox}>
          <TouchableOpacity activeOpacity={0.7} style={styles.fbView}>
            <Image
              style={styles.fbImage}
              resizeMode="contain"
              source={require ('../../assets/images/fb.png')}
            />
            <NirmalaText style={styles.fbText}>
              Sign up with Facebook
            </NirmalaText>

          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.fbView, {marginTop: hp (20)}]}
          >
            <Image
              style={styles.fbImage}
              resizeMode="contain"
              source={require ('../../assets/images/google.png')}
            />
            <NirmalaText style={styles.fbText}>Sign up with Google</NirmalaText>

          </TouchableOpacity>
          <RubikText style={styles.emailText}>
            or sign up with e-mail:{' '}
          </RubikText>
          <View style={styles.input}>
            <TextInput
              placeholder="Your email..."
              // placeholderTextColor='black'
              onChangeText={input => this.setState ({email: input})}
              placeholderStyle={[
                styles.emailText,
                {fontFamily: 'rubik-md', fontSize: hp (10)},
              ]}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('MainNavigation')}
            activeOpacity={0.7}
            style={styles.signupButton}
          >
            <Text style={{color: '#fff', fontFamily: 'rubik-md'}}>
              SIGN UP
            </Text>
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <RubikText style={{color: '#000', fontSize: hp (14)}}>
              Already have an account ?
              <RubikText
                onPress={() => this.props.navigation.navigate ('SignIn')}
                style={{color: '#57E8FF'}}
              >
                {' '}Sign in
              </RubikText>
            </RubikText>
          </View>
        </View>
        <RubikText
          onPress={() => this.props.navigation.navigate ('CorpSignUp')}
          style={{color: '#FF0066', marginTop: hp (30)}}
        >
          SignUp with a corporate Profile
        </RubikText>

        {this.state.loading &&
          <View
            style={{
              heigh: hp (70),
              width: wp (80),
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
              borderRadius: hp (12),
              justifyContent: 'center',
            }}
          >

            <ActivityIndicator color="white" sixe={hp (20)} />
          </View>}

      </View>
    );
  }
}
// export default SignUp;
