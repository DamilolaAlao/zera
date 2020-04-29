import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import SwitchToggle from 'react-native-switch-toggle';


import {hp,wp} from '../../../../styles/SignUp-styles'

var pic  =[require('../../../../assets/images/cam.png'),require('../../../../assets/images/cam.png') ]
var wall = require('../../../../assets/images/wall.png')

export default class Anonymous extends React.Component{
    state={
        showlocationModal:false,
        Switch:false
     
    }
    switchOnSwipe=()=>{
        this.setState({Switch:!this.state.Switch})
    }
    render(){
      return(
        <View style={styles.container}>
            <Image
                source={wall}
                resizeMode='cover'
                style={styles.image}
            />
            {/* start of info */}
            <View style={styles.detailsView}>
                <RubikText style={styles.category}>Electronics</RubikText>
                <RubikText style={styles.name}>Dell Desktop System</RubikText>
                <RubikText style={styles.info}>Power through your day with a stylish laptop created to keep you connected, and on top of everyday tasks.</RubikText>
            </View>
            {/* end of info */}
            <View style={styles.bottom} >
                <RubikText style={{color:"#FF0066",fontSize:hp(14)}}>Give as Anonymous</RubikText>
                {/* <SwitchToggle containerStyle={styles.toggleContainer}
                        circleStyle={styles.toggleCircle}
                        switchOn={this.state.Switch}
                        onPress={this.switchOnSwipe}
                        circleColorOff='white'
                        circleColorOn='black'
                        backgroundColorOn='white' backgroundColorOff='black'
                        duration={500}
                      /> */}


            </View>
            {/* start of give button */}
                
            <TouchableOpacity 
                activeOpacity={.6}
                    onPress={()=>this.setState({showlocationModal:true})}
                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>GIVE</RubikText>
            </TouchableOpacity>    
            {/* end of proceed */}
            {/* drop off location modal  */}
            {
                this.state.showlocationModal&&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        
                        <RubikText style={styles.modalText}>Do you want to select a Drop off Location?</RubikText>
                        <TouchableOpacity 
                            activeOpacity={.7}
                            onPress={()=>this.props.navigation.navigate("DeliveryOptions")}
                            style={styles.yesButton}>
                            <RubikText style={styles.yesText} >YES</RubikText>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={.7}
                            onPress={()=>this.setState({showlocationModal:false})}
                            style={styles.nosButton}>
                            <RubikText style={styles.noText} >NO</RubikText>
                        </TouchableOpacity>
                    </View>

                </View>
            }
            {/* end of drop off location modal */}
        </View>
        )
    }
        
    }


export const styles =StyleSheet.create({
    toggleContainer:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:hp(7.5),
        paddingHorizontal:wp(3),
        paddingVertical:hp(2),
        width:wp(23.1),
        height:(15.4/23.1)*wp(23.1),
        translateX:5

    },
    // toggleCircle:{
    //     width:wp(12),
    //     height:wp(12),
    //     borderRadius:wp(6),

    // },
    nosButton:{
        backgroundColor:'#fbdddd',
        borderRadius:hp(8),
        paddingVertical:hp(14),
        marginTop:hp(10),
        paddingHorizontal:wp(142),
        alignItems:'center',
        marginBottom:hp(31)
    },
    noText:{
        fontSize:hp(14),
        color:'#EB5757'
    },
    yesText:{
        color:'#219653',
        fontSize:hp(14)
    },
    yesButton:{
        backgroundColor:'#d4efdf',
        borderRadius:hp(8),
        paddingVertical:hp(14),
        marginTop:hp(10),
        paddingHorizontal:wp(142),
        alignItems:'center'
    },
    modalText:{
        marginVertical:hp(66),
        fontSize:hp(16),
        alignSelf:'center'
    },
    modalBody:{
        position:"absolute",
        bottom:hp(18),
        left:hp(12),
        right:hp(12),
        backgroundColor:"white",
        borderRadius:hp(22),
        height:(275/351)*wp(351),
        paddingHorizontal:wp(20),
        // paddingVertical:hp(30)
    },
    modalContainer:{
        position:'absolute',
        flex:1,
        backgroundColor:'rgba(0,0,0,.5)',
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    bottom:{
        marginHorizontal:wp(17),
        marginTop:hp(12),
        // paddingVertical:hp(24),
        // marginBottom:hp(16),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    info:{
        fontSize:hp(14),
    },
    name:{
        fontSize:hp(20),
        marginVertical:hp(12),
    },
    category:{
        color:'rgba(0, 0, 0, 0.6)',
        fontSize:hp(14),
        
    },
    detailsView:{
        marginHorizontal:wp(14),
        paddingVertical:hp(24),
        marginBottom:hp(16),
    },
    proceed:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000AED',
        alignSelf:'center',
        width:wp(345),
        height:(45/354)*wp(345),
        marginTop:hp(40),
        borderRadius:hp(8)

    },

image:{
    // width:wp(375),
    width:'100%',
    height:(380/375)*wp(357),
    // marginBottom:hp(12),
},
container:{
        flex:1,
        backgroundColor:'white',
        // alignItems:"center"
    },
})
