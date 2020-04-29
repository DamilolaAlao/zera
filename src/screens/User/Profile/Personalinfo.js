import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
    Image,StatusBar,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import ImagePicker from 'react-native-image-picker'

import {RubikText} from '../../../components/RubikText'
import {RobotoText} from '../../../components/RobotoText'
import {wp,hp} from '../../../styles/SignUp-styles'
// import EditIcon from '../../../assets/svgs/pencil.svg'
// import SettingsIcon from '../../../assets/svgs/settings.svg'
import BackIcon from '../../../assets/svgs/back.svg'
import CameraIcon from '../../../assets/svgs/camera.svg'
import { TextInput } from 'react-native-gesture-handler';


export default class PersonalInfo extends Component{
  state={
    name_focus:false,
    lastname_focus:false,
    nickname_focus:false,
    email_focus:false,
    DOB_focus:false,
    occupation_focus:false,
    background_focus:false,
    phone_focus:false,
    location_focus:false,
    location:'',
    phone:'',
    background:'',
    occupation:'',
    DOB:'',
    email:'',
    nickName:'',
    lastName:'',
    firstName:'',
    picture_uri:''
  }
  chooseImage = async () => {
    var options = {
    //   title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response.uri;
        this.setState({
          picture_uri: source,
        });
      }
    });
  };

  render() {
		var dp=require('../../../assets/images/dp.png')
    return (
		<View style={styles.Container}>
            {/* startof header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <BackIcon style={styles.backIcon}/>
                </TouchableOpacity>
                <RobotoText style={styles.headerText}>Personal Info</RobotoText>
                <View />

            </View>
            {/* end of header */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:hp(35)}}>
                {/* profile picture */}
                <View style={styles.pictureBox}>
                    
                    <Image resizeMode='cover' style={styles.displayPicture}
                        source={{uri:this.state.picture_uri}}
                    />
                    
                    <TouchableOpacity onPress={this.chooseImage} style={styles.camContainer}>
                        <CameraIcon style={styles.camera}/>
                    </TouchableOpacity>
                </View>
                {/* eng of profile picture */}
                <RobotoText style={styles.userId}>46478GI90</RobotoText>
            {/* start of Details Input */}
                {/* start of name Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>First name</RobotoText>
                    <TextInput
                        style={!this.state.name_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({firstName:input})}
                        value={this.state.firstName}
                        onFocus={()=>this.setState({name_focus:true})}
                        onBlur={()=>this.setState({name_focus:false})}
                        ref={(tag)=>{this.nameInput=tag}}
                        onSubmitEditing={()=>this.lastName.focus()}
                        // autoFocus={false}
                    />
                </View>
                {/* end of name input */}
                {/* start of last name Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Last name</RobotoText>
                    <TextInput
                        style={!this.state.lastname_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({lastName:input})}
                        value={this.state.lastName}
                        onFocus={()=>this.setState({lastname_focus:true})}
                        onBlur={()=>this.setState({lastname_focus:false})}
                        ref={(tag)=>{this.lastName=tag}}
                        onSubmitEditing={()=>this.nickName.focus()}
                    />
                </View>
                {/* end of last name input */}
                {/* start of last name Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Nickname/Username</RobotoText>
                    <TextInput
                        style={!this.state.nickname_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({nickName:input})}
                        value={this.state.nickName}
                        onFocus={()=>this.setState({nickname_focus:true})}
                        onBlur={()=>this.setState({nickname_focus:false})}
                        ref={(tag)=>{this.nickName=tag}}
                        onSubmitEditing={()=>this.Email.focus()}
                    />
                </View>
                {/* end of last name input */}
                {/* start of Email Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Email</RobotoText>
                    <TextInput
                        style={!this.state.email_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({email:input})}
                        value={this.state.email}
                        onFocus={()=>this.setState({email_focus:true})}
                        onBlur={()=>this.setState({email_focus:false})}
                        ref={(tag)=>{this.Email=tag}}
                        onSubmitEditing={()=>this.DOB.focus()}
                    />
                </View>
                {/* end of Email input */}
                {/* start of DOB Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>D.O.B</RobotoText>
                    <TextInput
                        style={!this.state.DOB_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({DOB:input})}
                        value={this.state.DOB}
                        onFocus={()=>this.setState({DOB_focus:true})}
                        onBlur={()=>this.setState({DOB_focus:false})}
                        ref={(tag)=>{this.DOB=tag}}
                        onSubmitEditing={()=>this.occupation.focus()}
                    />
                </View>
                {/* end of D.O.B input */}
                {/* start of Occupatio Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Occupation</RobotoText>
                    <TextInput
                        style={!this.state.occupation_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({occupation:input})}
                        value={this.state.occupation}
                        onFocus={()=>this.setState({occupation_focus:true})}
                        onBlur={()=>this.setState({occupation_focus:false})}
                        ref={(tag)=>{this.occupation=tag}}
                        onSubmitEditing={()=>this.background.focus()}
                    />
                </View>
                {/* end of occupation input */}
                {/* start of Backgroun Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Background</RobotoText>
                    <TextInput
                        style={!this.state.background_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({background:input})}
                        value={this.state.background}
                        onFocus={()=>this.setState({background_focus:true})}
                        onBlur={()=>this.setState({background_focus:false})}
                        ref={(tag)=>{this.background=tag}}
                        onSubmitEditing={()=>this.phone.focus()}
                    />
                </View>
                {/* end of background input */}
                {/* start of phone Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Phone No.</RobotoText>
                    <View  style={!this.state.phone_focus?styles.InputBox:styles.focusedInputBox}>
                        <RobotoText style={{fontSize:hp(14)}}>+234</RobotoText>
                        <TextInput
                            style={{width:wp(300),fontFamily:'roboto-rg',
                            fontSize:hp(14),}}
                            onChangeText={(input)=>this.setState({phone:input})}
                            value={this.state.phone}
                            onFocus={()=>this.setState({phone_focus:true})}
                            keyboardType='number-pad'
                            
                            onBlur={()=>this.setState({phone_focus:false})}
                            ref={(tag)=>{this.phone=tag}}
                            onSubmitEditing={()=>this.location.focus()}
                        />
                    </View>
                </View>
                {/* end of phone input */}
                {/* start of last name Input */}
                <View style={styles.inputView}>
                    <RobotoText style={styles.InputLabel}>Current Location</RobotoText>
                    <TextInput
                        style={!this.state.location_focus?styles.InputBox:styles.focusedInputBox}
                        onChangeText={(input)=>this.setState({location:input})}
                        value={this.state.location}
                        onFocus={()=>this.setState({location_focus:true})}
                        onBlur={()=>this.setState({location_focus:false})}
                        ref={(tag)=>{this.location=tag}}
                        // onSubmitEditing={()=>this.nickName.focus()}
                    />
                </View>
                {/* end of last name input */}
            {/* end of details Input */}

                {/* start of update button */}
                    <View style={[styles.updateButton]}>
                        <RubikText style={styles.updateText}>UPDATE</RubikText>

                    </View>
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
        borderRadius:hp(8),
        overflow:'hidden'
        
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
        color:'rgba(0,0,0,.3)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    focusedInputBox:{
        width:wp(342),
        height:(47/342)*wp(342),
        borderRadius:hp(8),
        borderColor:'#26B1FF',
        borderWidth:1,
        paddingLeft:wp(19),
        fontFamily:'roboto-rg',   
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',    
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
        marginTop:hp(-22),
        marginLeft:wp(60)
        // position:'absolute',
        // left:wp(60),
        // top:hp(80)
    },
    userId:{
        color:'rgba(52, 52, 52, 0.5)',
        fontSize:hp(13),
        fontWeight:'500',
        alignSelf:'center',
        // marginBottom:hp(33)
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