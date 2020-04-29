import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import SwitchToggle from 'react-native-switch-toggle';



import {hp,wp} from '../../../../styles/SignUp-styles'

var pic  =[require('../../../../assets/images/cam.png'),require('../../../../assets/images/cam.png') ]
var wall = require('../../../../assets/images/wall.png')
export default class GetDetails extends React.Component{
    render(){
        var address = "No2. First Avenue, Gwarimpa";
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
                <RubikText style={styles.transactionType}>Single<RubikText style={{color:'rgba(0, 0, 0, 0.6)',}}> item transaction</RubikText></RubikText>
                <RubikText style={styles.location}>Drop off location- <RubikText style={{color:'rgba(0, 0, 0, 0.6)',}} >{address}</RubikText></RubikText>
            </View>
            {/* end of info */}
            
            {/* start of give button */}    
            <TouchableOpacity 
                activeOpacity={.6}
                    onPress={()=>this.props.navigation.navigate('placeRequest')}
                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>GET</RubikText>
            </TouchableOpacity>    
            {/* end of give button */}
        </View>
        )
    }
        
    }


export const styles =StyleSheet.create({
    location:{
        fontSize:hp(14),
        fontWeight:"500",
        color:'black',

    },
    transactionType:{
        color:'black',
        marginVertical:hp(20),
        fontSize:hp(14),
        fontWeight:"500"
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
        color:'rgba(0, 0, 0, 0.6)',

    },
    name:{
        fontSize:hp(20),
        marginVertical:hp(12),
        color:"#000AED"
    },
    category:{
        color:'rgba(0, 0, 0, 0.6)',
        fontSize:hp(14),
        
    },
    detailsView:{
        marginHorizontal:wp(14),
        // paddingVertical:hp(24),
        marginVertical:hp(16),
    },
    proceed:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000AED',
        alignSelf:'center',
        width:wp(345),
        height:(45/354)*wp(345),
        marginTop:hp(30),
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
