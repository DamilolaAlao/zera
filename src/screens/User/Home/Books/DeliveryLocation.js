import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import {hp,wp} from '../../../../styles/SignUp-styles'
import CameraIcon from '../../../../assets/svgs/camera.svg'
import ArrowLeft from '../../../../assets/svgs/arrow-left.svg'

const Addresses=['No2. First Avenue, Gwarimpa',
                'Banex Plaza, Wuse 1, Abuja',
                'Banex Plaza, Wuse 2, Abuja',
                'Banex Plaza, Wuse 3, Abuja',
                'Banex Plaza, Wuse 4, Abuja'
            ]

const courier=['Door to door Delivery',
               'Drop off to door delivery',
               'Door Dispatch to Pick up'
            ]

export default class DeliveryLocation extends React.Component{
    state={
        address:'',
        userAddress:'No 22, Port harmmond street, Apo, Abuja'
    }
    render(){
        var dp=require('../../../../assets/images/dp.png')
        const selectedOption =this.props.navigation.getParam('selectedOption');
        if(selectedOption === 0) {
            return(
             <View style={styles2.Container}>
                <RobotoText style={styles.topText}>Delivery channels</RobotoText>
                <View style={styles2.pictureBox2}>
                    <Image resizeMode='cover' style={styles2.displayPicture}
                        source={dp}
                    />
                </View>
                <RubikText style={styles2.username}>Adeojo Emmanuel</RubikText>
                 <RobotoText style={styles2.userId}>Bronze</RobotoText>
                 <Text>{"     "}</Text>
                 <RubikText style={styles2.username}>{this.state.userAddress}</RubikText>
                 <Text>{"     "}</Text>
                 <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('GiveItemDetails',{address:this.state.userAddress})}
                    activeOpacity={0.7}
                    style={styles.signupButton}
                  >
                    <Text style={{color: '#fff', fontFamily: 'rubik-md'}}>
                      SEND A MESSAGE
                    </Text>
                  </TouchableOpacity>
            </View>

            )
        }else if(selectedOption === 1){
            return(
                <View style={styles.container}>
                    <RobotoText style={styles.topText}>Drop Off Locations</RobotoText>
                    {
                        Addresses.map((item,index)=>{
                            return(
                                <TouchableOpacity
                                    onPress={()=>{this.setState({address:item}),
                                    this.props.navigation.navigate('GiveItemDetails',{address:item})}}
                                    style={[styles.options,{borderBottomWidth:index===Addresses.length-1?0:hp(0.5)}]}
                                    key={index}
                                >
                                    <View style={styles.circle}>
                                        {
                                            this.state.address===item&&<View style={styles.blueCircle}/>
                                        }
                                    </View>
                                    <RubikText style={styles.optionText}>{item}</RubikText>
                                    {/* <ArrowLeft style={styles.arrow}/> */}
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            )
        }else if(selectedOption === 2){
            return(
                <View style={styles.container}>
                    <RobotoText style={styles.topText}>GIG Services</RobotoText>
                    {
                        courier.map((item,index)=>{
                            return(
                                <TouchableOpacity
                                    onPress={()=>{this.setState({address:item}),
                                    this.props.navigation.navigate('GiveItemDetails',{address:item})}}
                                    style={[styles.options,{borderBottomWidth:index===Addresses.length-1?0:hp(0.5)}]}
                                    key={index}
                                >
                                    <View style={styles.circle}>
                                        {
                                            this.state.address===item&&<View style={styles.blueCircle}/>
                                        }
                                    </View>
                                    <RubikText style={styles.optionText}>{item}</RubikText>
                                    {/* <ArrowLeft style={styles.arrow}/> */}
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            )
        }

    }
}

const styles2 = StyleSheet.create({
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
    username:{
        fontSize: hp (16),
        fontWeight:'500',
        alignSelf:'center',
        color: '#000AED', 
        alignSelf: 'center'
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
        alignSelf:'center',
        backgroundColor:'black',
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
    pictureBox2:{
        marginTop: 80,
        height:wp(84),
        width:wp(84),
        borderRadius:wp(42),
        alignSelf:'center',
        backgroundColor:'black',
        marginBottom:hp(16)
    },

});

const styles= StyleSheet.create({
   signupButton:{
        backgroundColor: '#000AED',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(293),
        height:(45/293)*wp(293),
        
        alignSelf:'center',
        borderRadius: wp(7),
        marginVertical:hp(33),
        
    },

    blueCircle:{
        height:wp(8),
        width:wp(8),
        borderRadius:wp(4),
        backgroundColor:"#000AED"
    },
    circle:{
        height:wp(16),
        width:wp(16),
        borderRadius:wp(8),
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
    },
    arrow:{
        width:wp(7.5),
        height:(12/7.5)*wp(7.5)
    },
    optionText:{
        color:"#000AED",
        fontSize:hp(16),
        fontWeight:'500',
        marginLeft:wp(14),
    },
    options:{
        alignSelf:'center',
        width:wp(347),
        height:(47/347)*wp(347),
        // paddingLeft:wp(24),
        // paddingRight:wp(16),
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
        // borderBottomWidth:hp(0.5),
        borderColor:"rgba(0, 0, 0, 0.3)"
       
    },
    topText:{
        alignSelf:"center",
        fontSize:hp(20),
        color:'black',
        marginVertical:hp(20)
    },
    container:{
        flex:1,
        backgroundColor:'white'
    }
})