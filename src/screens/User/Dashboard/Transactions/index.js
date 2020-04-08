import React,{Component} from 'react'
import {Text,StyleSheet,View,ScrollView,Image,TouchableOpacity} from 'react-native'
import {hp,wp} from '../../../../styles/SignUp-styles'
import {RubikText} from '../../../../components/RubikText'
import {RobotoText} from '../../../../components/RobotoText'
import {Header} from '../../../../components/header'

import NavIcon from '../../../../assets/svgs/navIcon.svg'

import {Data} from '../DummyData/TransactionData'
StatusColor=(status)=>{
    switch(status){
        case 'Pending':
        return '#F2C94C'
        break ;
        case 'Failed':
        return "#EB5757"
        break ;
        case 'Success':
        return "#27AE60"
        break ;
        default:
            break;
    }

}

export default class Transactions extends React.Component{
    render(){
        return(
        <View  style={styles.container}>
                {/* start of header */}
                <Header
                    title={<RobotoText style={{fontSize:hp(20)}}>Transactions</RobotoText>}
                    navigation={this.props.navigation}
                />
                {/* end of header */}
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {
                        Data.map((item,index)=>{
                            return(
                                <Transaction
                                    key={index}
                                    details={item}
                                    StatusColor={()=>this.StatusColor()}
                                    navigation={this.props.navigation}
                                />
                            )
                        })
                    }
                </ScrollView>

        </View>
        )
    }
}
const Transaction=(props)=>{
    const {status,transaction_type,transaction_date,transaction_id,
        item_details,givers_details,pickup_address}=props.details
    return(
    <TouchableOpacity 
        onPress={()=>props.navigation.navigate('TransactionDetails',{Details:props.details})}
        style={styles.list}
    >
        <View style={{flexDirection:'row',alignItems:"center"}} >
            <View style={[styles.statusCircle,{backgroundColor:StatusColor(status)}]}>

            </View>
            <RobotoText style={styles.typeText}>{transaction_type}<RobotoText style={styles.typeText}> transactions </RobotoText> </RobotoText>
               
        </View>
        <View style={styles.bottom}>
            <RobotoText style={styles.itemName}> {item_details.name} </RobotoText>
            <RobotoText style={styles.dateText}> {transaction_date} </RobotoText>

        </View>

    </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    scrollContainer:{
        paddingVertical:hp(51),
        
    },
    dateText:{
        color:'rgb(0,0,0)',
        fontSize:hp(14),
    
    },
    bottom:{
        flexDirection:"row",
        justifyContent:'space-between'
        ,marginLeft:wp(20),
        marginTop:hp(9)
    },
    itemName:{
        fontWeight:"bold",
        fontSize:hp(16),
        lineHeight:hp(19),
        color:'#000AED'
    },
    typeText:{
        color:'rgba(0,0,0,.5)',
        fontSize:hp(14),
        marginLeft:wp(12)
    },
    statusCircle:{
        width:wp(8),
        height:wp(8),
        borderRadius:wp(4)
    },
    list:{
        width:wp(342),
        alignSelf:"center",
        paddingTop:hp(20),
        paddingBottom:hp(17),
        borderBottomWidth:1,
        borderBottomColor:'rgba(112,112,112,.4)'

    },
    navIcon:{
        width:wp(20),
        height:(13.33/20)*wp(20)
      },
       title:{
        fontSize:hp(20),
        color:'black',
        // marginLeft:40
      },
      topView:{
        flexDirection:'row',
        // alignItems:"center"
        paddingHorizontal:wp(12),
        marginBottom:hp(30),
      
        justifyContent:'space-between'
      },
    backIcon:{
        width:wp(6.7),
        height:(12.91/7)*wp(7),
        // marginLeft:wp(24)
    },
    header:{
        flexDirection:"row",
        paddingHorizontal:wp(16),
        justifyContent:"space-between",
        alignItems:"center"
    },

    container:{
        flex:1,
        backgroundColor:'#Fefefe',
        paddingTop:hp(20)
    },
    
    })