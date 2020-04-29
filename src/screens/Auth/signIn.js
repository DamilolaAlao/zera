import React from 'react'
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import {NirmalaText} from '../../components/NirmalaText';
import {RubikText} from '../../components/RubikText';

import {styles, wp,hp} from '../../styles/SignUp-styles'

export default class SignIn extends React.Component{
    render(){
        return(
        <View style={styles.container}>
                <Image 
                resizeMode='contain' style={styles.topImage} 
                source={require('../../assets/images/signup.png')}
                />
                <RubikText style={[styles.signUpText,{marginBottom:hp(50)}]}>Sign in</RubikText>
          <ScrollView>
            <View style={[styles.optionBox,{paddingTop:hp(41),paddingBottom:hp(50)}]}>
                <TouchableOpacity activeOpacity={0.7} style={styles.fbView}>
                  <Image
                    style={styles.fbImage}
                    resizeMode="contain"
                    source={require ('../../assets/images/fb.png')}
                  />
                  <NirmalaText style={styles.fbText}>
                    Sign in with Facebook
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
                  <NirmalaText style={styles.fbText}>Sign in with Google</NirmalaText>

                </TouchableOpacity>
                <RubikText style={styles.emailText}>
                  or sign in with e-mail:{' '}
                </RubikText>
                <View style={[styles.input,{borderColor:'#26B1FF'}]}>
                    <TextInput
                    placeholder='timistash@gmail.com'
                    placeholderTextColor='black'
                    />
                </View>
                <Text>{"     "}</Text>
                <View style={[styles.input,{borderColor:'#26B1FF'}]}>
                    <TextInput
                    placeholder='password'
                    placeholderTextColor='black'
                    />
                </View>
                <TouchableOpacity 
                  onPress={()=>    this.props.navigation.navigate("MainNavigation")          }
                  activeOpacity={.7} style={styles.signupButton}>
                    <Text style={{color: '#fff', fontFamily: 'rubik-md'}}>
                    SIGN IN
                    </Text>
                </TouchableOpacity>
                <View style={{alignSelf:'center',marginTop:hp(5)}}>
                    <RubikText style={{color:'#000',fontSize:hp(14),}}>Don't have an account ?
                        <RubikText onPress={()=>this.props.navigation.navigate('SignUp')} style={{color:'#57E8FF'}}> Sign up</RubikText>
                    </RubikText>
                </View>
            </View>
          </ScrollView>
        </View>

        )
    }
}
// export default SignUp;
