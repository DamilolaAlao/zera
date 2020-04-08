import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import {hp,wp} from '../../../../styles/SignUp-styles'
import ArrowLeft from '../../../../assets/svgs/arrow-left.svg'

const Addresses=['No2. First Avenue, Gwarimpa',
                'Banex Plaza, Wuse 1, Abuja',
                'Banex Plaza, Wuse 2, Abuja','Banex Plaza, Wuse 3, Abuja','Banex Plaza, Wuse 4, Abuja'
            ]
export default class DeliveryLocation extends React.Component{
    state={
        address:''
    }
    render(){
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
    }
}
const styles= StyleSheet.create({
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