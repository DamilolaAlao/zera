import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import {hp,wp} from '../../../../styles/SignUp-styles'
import ArrowLeft from '../../../../assets/svgs/arrow-left.svg'


const options = [
                'Personal Delivery(Recommended)',
                'Drop Off / pickup',
                'courier services'
]
export default class DeliveryOptions extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <RobotoText style={styles.topText}>Drop Off Locations</RobotoText>
                {
                    options.map((item,index)=>{
                        return(
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('DeliveryLocation', { selectedOption: index})}
                                style={styles.options}
                                key={index}
                            >
                                <RubikText style={styles.optionText}>{item}</RubikText>
                                <ArrowLeft style={styles.arrow}/>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}
const styles= StyleSheet.create({
    arrow:{
        width:wp(7.5),
        height:(12/7.5)*wp(7.5)
    },
    optionText:{
        color:"#000AED",
        fontSize:hp(16),
        fontWeight:'500'
    },
    options:{
        alignSelf:'center',
        width:wp(344),
        height:(52/344)*wp(344),
        paddingLeft:wp(24),
        paddingRight:wp(16),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:.32,
        shadowRadius:5,
        elevation:9
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