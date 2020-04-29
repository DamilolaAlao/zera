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
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'
import {NirmalaText} from '../../components/NirmalaText';
import {RubikText} from '../../components/RubikText';
import {  BarIndicator} from 'react-native-indicators'

import {styles, wp,hp} from '../../styles/SignUp-styles'

export default class Loading extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center',flex:1}}>
                <BarIndicator color='#000AED' size={wp(24)}/>
                <RubikText style={{color:'#000AED',fontSize:hp(14)}}>Signing up...</RubikText>

            </View>
        );
    
    }
    }