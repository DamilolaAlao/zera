import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
    Image,StatusBar,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import {RubikText} from '../../../components/RubikText'
import {RobotoText} from '../../../components/RobotoText'
import {wp,hp} from '../../../styles/SignUp-styles'
// import EditIcon from '../../../assets/svgs/pencil.svg'
// import SettingsIcon from '../../../assets/svgs/settings.svg'
import BackIcon from '../../../assets/svgs/back.svg'
import CameraIcon from '../../../assets/svgs/camera.svg'
import { TextInput } from 'react-native-gesture-handler';


export default class ResetPassword extends Component{
  state={
    newPassword:'',
    confirmPassword:''
  }

  render() {
		var dp=require('../../../assets/images/dp.png')
    return (
		<View style={styles.Container}>
            {/* startof header */}
            <View style={styles.header}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <BackIcon style={styles.backIcon}/>
                </TouchableOpacity>
                <RobotoText style={styles.headerText}>Reset Password</RobotoText>
                <View />

            </View>
            {/* end of header */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:hp(52)}}>
            {/* start of Details Input */}
                {/* start of last name Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>New Password</RobotoText>
                    <TextInput
                        style={styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({newPassword:input})}
                        value={this.state.newPassword}
                        secureTextEntry={true}
                        // onSubmitEditing={()=>this.nickName.focus()}
                    />
                </View>
                {/* end of last name input */}
                {/* start of name Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Confirm Password</RobotoText>
                    <TextInput
                        style={styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({confirmPassword:input})}
                        value={this.state.confirmPassword}
                        secureTextEntry={true}
                    />
                </View>
                {/* end of name input */}
            {/* end of details Input */}

                {/* start of update button */}
                    <TouchableOpacity style={[styles.updateButton]}>
                        <RubikText style={styles.updateText}>SEND</RubikText>

                    </TouchableOpacity>
                {/* end of update button */}
            </ScrollView>


        </View>
		   
    );
  }
}



const styles = StyleSheet.create({
    updateText:{
        fontSize:hp(17),
        color:'#ffff',
      
    },
    updateButton:{
        marginTop:hp(55),
        alignItems:'center',
        justifyContent:'center',
        width:wp(345),
        height:(48/347)*wp(347),
        alignSelf:'center',
        backgroundColor:'#000AED',
        borderRadius:hp(6)
        
    },
    InputBox:{
        width:wp(342),
        height:(47/342)*wp(342),
        borderRadius:hp(8),
        borderColor:'#B4B4B4',
        borderWidth:1,
        paddingLeft:wp(19),
        fontFamily:'roboto-rg',
        fontSize:hp(14),
        color:'rgba(0,0,0,.3)'
    },
    focusedInputBox:{
        width:wp(342),
        height:(47/342)*wp(342),
        borderRadius:hp(8),
        borderColor:'#26B1FF',
        borderWidth:1,
        paddingLeft:wp(19),
        fontFamily:'roboto-rg',        
        fontSize:hp(14)
    },
    InputLabel:{
        marginBottom:hp(10),
        fontSize:hp(12),
        color:'black'
    },
    inputView:{
        marginTop:hp(24),
    },
    camera:{
        width:wp(8),
        height:wp(8)
    },
    camContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000AED',
        width:wp(16),
        height:wp(16),
        borderRadius:wp(8),
        position:'absolute',
        left:wp(60),
        top:hp(80)
    },
    userId:{
        color:'rgba(52, 52, 52, 0.5)',
        fontSize:hp(13),
        fontWeight:'500',
        alignSelf:'center',
        marginBottom:hp(33)
    },
    displayPicture:{
        height:wp(84),
        width:wp(84),
        borderRadius:wp(42),
        overflow:'hidden'

    },
    pictureBox:{
        height:wp(84),
        width:wp(84),
        borderRadius:wp(42),
        // borderWidth:1,
        // alignItems:'center',
        alignSelf:'center',
        backgroundColor:'black',
        // marginTop:hp(25),
        marginBottom:hp(16)
    },
    settingsIcon:{
        marginLeft:wp(18),
        height:wp(15),
        width:wp(15),
    },
    editIcon:{
        width:wp(15),
        height:wp(15)
    },
    headerText:{
        fontSize:hp(20),
        fontWeight:'500',
        lineHeight:hp(23)
        // marginLeft:wp(114)
    },
    backIcon:{
        width:wp(16),
        height:wp(16)
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
Container:{
  flex:1,
  paddingTop:hp(12),
  paddingHorizontal:wp(16),
  backgroundColor:'white'
},


});