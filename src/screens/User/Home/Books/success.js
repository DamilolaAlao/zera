import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ActivityIndicator,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'


import {hp,wp} from '../../../../styles/SignUp-styles'
var Successful = require('../../../../assets/images/sucess.png')
var Failed = require('../../../../assets/images/fail.png')


export default class Success extends React.Component{
    state={
        successful:true
    }
  
    render(){
        // var fff='f';
        if(this.state.successful){
            return(
                <View style={styles.container}>
                    <RubikText style={styles.status}>REQUEST SUCCESSFUL</RubikText>
                    <Image
                        source={Successful}
                        resizeMode='contain'
                        style={styles.statusImage}
                    />
                    <View style={styles.details}>
                        <View >
                            <RubikText style={styles.leftText}>Transaction name:</RubikText>
                            <RubikText style={styles.leftText}>Transaction ID:</RubikText>
                            <RubikText style={styles.leftText}>Amount:</RubikText>
                        </View>
                        <View style={{marginLeft:wp(17)}}>
                            <RubikText style={styles.rightText}>Eze goes to school</RubikText>
                            <RubikText style={styles.rightText}>12BD001345</RubikText>
                            <RubikText style={styles.rightText}>1</RubikText>
                        </View>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("Transactions")}
                        style={styles.proceed}>
                        <RubikText style={{fontSize:hp(14),color:'white'}}>VIEW GIVING DETAILS</RubikText>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <ActivityIndicator color='black' size={22}/>
                    <RubikText style={styles.status}>REQUEST FAILED</RubikText>
                    <Image
                        source={Failed}
                        resizeMode='contain'
                        style={styles.statusImage}
                    />
                    <View style={styles.details}>
                        <View >
                            <RubikText style={styles.leftText}>Transaction name:</RubikText>
                            <RubikText style={styles.leftText}>Transaction ID:</RubikText>
                            <RubikText style={styles.leftText}>Amount:</RubikText>
                        </View>
                        <View style={{marginLeft:wp(17)}}>
                            <RubikText style={styles.rightText}>Eze goes to school</RubikText>
                            <RubikText style={styles.rightText}>12BD001345</RubikText>
                            <RubikText style={styles.rightText}>1</RubikText>
                        </View>
                    </View>
                </View>
            )   
        }
        
    }
}

export const styles =StyleSheet.create({
    rightText:{
        color:'#343434',
        fontSize:hp(16),
        marginBottom:hp(12)  
    },
    leftText:{
        color:'rgba(52, 52, 52, 0.7)',
        fontSize:hp(16),
        marginBottom:hp(12)
    },
    details:{
        flexDirection:'row',
        marginHorizontal:wp(37),
        // justifyContent:"space-between"

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
    message:{
        fontSize:hp(14),
        textAlign:"center"
        // alignSelf:'center',
    },
    statusImage:{
        width:wp(335),
        height:(236/335)*wp(335),
        alignSelf:'center',
        marginTop:hp(60),
        marginBottom:hp(60)

    },
    status:{
        fontSize:hp(20),
        fontWeight:'bold',
        alignSelf:"center",
        marginTop:hp(100)
    },
    container:{
        flex:1,
        backgroundColor:'white',
        
        // alignItems:"center"
    },
})