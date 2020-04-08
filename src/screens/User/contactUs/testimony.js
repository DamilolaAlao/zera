import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../components/RobotoText'
import {RubikText} from '../../../components/RubikText'

import {hp,wp} from '../../../styles/SignUp-styles'

export default class TestimonyFeedback extends React.Component{  
    state={
        
    }
    componentDidMount(){
        // this.mailInput.focus()
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Image 
                        source={require('../../../assets/images/back.png')}
                        resizeMode='contain' style={styles.backIcon} 
                        />
                    </TouchableOpacity>
                    <RubikText style={styles.headerText}>Testimonial</RubikText>
                    <View></View>

                </View>
                <View style={styles.formView}>
                    <View style={{marginTop:hp(20)}}>
                        <RobotoText style={styles.topText} >Testimonial</RobotoText>
                        <TextInput
                            autoFocus={true}
                            numberOfLines={4}
                            style={!this.state.message_focus?styles.messageform:styles.messageformfocused}
                            placeholder='Tell us how you feel about us'
                            placeholderTextColor='#B4B4B4'
                            onFocus={()=> this.setState({message_focus: true})}
                            onBlur={()=> this.setState({message_focus: false})}
                            ref={ (input) => {this.message = input }}
                            // onSubmitEditing={()=>this.authorInput.focus()}
                        />
                    
                    </View>
                    <TouchableOpacity
                        activeOpacity={.7}   
                        style={styles.sendButton} 
                    >
                        <RubikText style={styles.sendText}>SEND</RubikText>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}
export const styles =StyleSheet.create({
    sendText:{
        fontSize:hp(14),
        color:'white',
        fontWeight:"500"
    },
    sendButton:{
        width:wp(352),
        borderRadius:hp(6),
        backgroundColor:"#000AEd",
        alignItems:'center',
        justifyContent:"center",
        marginTop:hp(45),
        paddingVertical:hp(16)
    },

    messageformfocused:{
        borderColor:'#000AEd',
        width:wp(352),
        height:(78/345)*wp(345),
        borderRadius:hp(6),
        alignSelf:'center',
        // alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        // borderColor:'#B4B4B4',
        flexDirection:'row',
        paddingLeft:wp(15),
        fontSize:hp(14),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    messageform:{
        // borderColor:'#26B1FF',
        width:wp(352),
        height:(78/345)*wp(345),
        borderRadius:hp(6),
        // alignSelf:'center',
        // alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#B4B4B4',
        flexDirection:'row',
        paddingLeft:wp(15),
        fontSize:hp(14),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    topText:{
        fontSize:hp(12),
        marginBottom:hp(12)
    },
    formInputfocused:{
        borderColor:'#000AEd',
        width:wp(352),
        height:(48/345)*wp(345),
        borderRadius:hp(6),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        // borderColor:'#B4B4B4',
        flexDirection:'row',
        paddingLeft:wp(15),
        fontSize:hp(14),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    formInput:{
        // borderColor:'#26B1FF',
        width:wp(352),
        height:(48/345)*wp(345),
        borderRadius:hp(6),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#B4B4B4',
        flexDirection:'row',
        paddingLeft:wp(15),
        fontSize:hp(14),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    formView:{
        marginVertical:hp(5),
        marginHorizontal:wp(10),
    },
    headerText:{
        alignSelf:'center',
        fontSize:hp(20),
        // marginLeft:wp(46)
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:wp(16),
        marginVertical:hp(10),
        alignItems:'center',justifyContent:'space-between'
    },
    backIcon:{
        width:wp(16),
        height:wp(16),
    },

    container:{
        flex:1,
        backgroundColor:'white'
    },
})