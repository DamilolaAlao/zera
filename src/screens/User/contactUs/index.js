import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../components/RobotoText'
import {RubikText} from '../../../components/RubikText'
import ArrowRight from '../../../assets/svgs/arrow-left.svg'

import {hp,wp} from '../../../styles/SignUp-styles'

var options =[
    {name:"Email us"},
    {name:"Send a testimonial"},
    {name:"Technical Issues"},
    {name:"Feedback/Enquiries"}
];

export default class ContactUs extends React.Component{

 gotoPage=(name)=>{
     if(name==='Email us'){
         this.props.navigation.navigate('EmailFeedback',)
     }
    else if(name==='Send a testimonial'){
        this.props.navigation.navigate('TestimonyFeedback',)
    }
    else if(name==='Technical Issues'){
        this.props.navigation.navigate('TechnicalFeedback',)
    }
    else{
        this.props.navigation.navigate('Feedback',)
    }
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
                    <RubikText style={styles.headerText}>Contact Us</RubikText>
                    <View></View>

                </View>
                <View style={styles.optionView}>
                {
                        options.map((item,index)=>{
                        return(
                            <TouchableOpacity
                                key={index}
                                onPress={()=>this.gotoPage(item.name)}
                                style={styles.options}
                            >
                                <RubikText style={styles.actionText}>{item.name}</RubikText>
                                <ArrowRight style={styles.icon}/>
                         </TouchableOpacity>
                      
                            )
                        })
                    }
                </View>

            </View>
        )
    }
}
export const styles =StyleSheet.create({
    icon:{
        width:wp(8),
        height:(12/8)*wp(8)
    },
    actionText:{
        color:'#000AED',
        fontSize:hp(16),
    },
    options:{
        flexDirection:"row",
        borderRadius:hp(6),
        width:wp(345),
        justifyContent:'space-between',
        paddingHorizontal:wp(24),
        paddingVertical:hp(16),
        backgroundColor:"white",
        marginTop:hp(16),
        marginHorizontal:wp(16)
    },
    optionView:{
        backgroundColor:"#f4f4f4",
        flex:1,
        marginTop:hp(20),
        alignItems:"center"
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