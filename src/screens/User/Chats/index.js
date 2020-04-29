import React,{Component} from 'react'
import {Text,StyleSheet,View,TextInput,Image,FlatList,Keyboard} from 'react-native'
import {hp,wp} from '../../../styles/onBoarding-styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import SendIcon from '../../../assets/svgs/send.svg'
import BackIcon from '../../../assets/svgs/back.svg'
import {RubikText} from '../../../components/RubikText'
import {RobotoText} from '../../../components/RobotoText'
const ChatList=[
    {
        name:'Zera',
        lastseen:'12:43',
        img:require('../../../assets/images/Users/user1.png'),
    },
    {
        name:'Josie Vega',
        lastseen:'12:43',
        img:require('../../../assets/images/Users/user1.png'),
    },
    {
        name:'Gerald French',
        lastseen:'10:43',
        img:require('../../../assets/images/Users/user2.png'),

    },
    {
        name:'Alberta Hawkins',
        lastseen:'12:43',
        img:require('../../../assets/images/Users/user3.png'),

    },
    {
        name:'Paul Walker',
        lastseen:'16:13',
        img:require('../../../assets/images/Users/user4.png'),

    },
    {
        name:'Jenny Stevenson',
        lastseen:'12:43',
        img:require('../../../assets/images/Users/user5.png'),

    },
    {
        name:'Gary Sullivan',
        lastseen:'12:25',
        img:require('../../../assets/images/Users/user6.png'),
    },
    {
        name:'Nettie Vasquez',
        lastseen:'13:56',
        img:require('../../../assets/images/Users/user7.png'),

    },
]
export default class Chats extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <RobotoText style={styles.headerText}>Chat List</RobotoText>
                <ScrollView style={{flex:1,}}
                    contentContainerStyle={{paddingBottom:hp(30)}}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    {
                        ChatList.map((item,index)=>{
                            return(
                                <User
                                    UserDetails={item}
                                    key={index}
                                    navigation={this.props.navigation}
                                />
                            )
                        })
                    }
                     {
                        ChatList.map((item,index)=>{
                            return(
                                <User
                                    UserDetails={item}
                                    key={index}
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

const User =(props)=>{
    const {name,img,lastseen}=props.UserDetails
    return(
        <TouchableOpacity activeOpacity={.5} style={styles.userItem}
                onPress={()=>props.navigation.navigate('SingularChat',{UserDetails:props.UserDetails})}
        >
            <View style={styles.pictureContainer}>
                    <Image source={img} resizeMode='contain' style={styles.picture} />
            </View>
            <View style={styles.left}>
                <RubikText style={styles.name}>{name}</RubikText>
                <RubikText style={styles.lastseen}>{lastseen}</RubikText>
            </View>

        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    lastseen:{
        fontSize:hp(10),
        color:"#000AED",
        marginTop:hp(5),
        opacity:.6
        // marginTop:hp(7),
    },
    name:{
        fontSize:hp(14),
        color:"#000AED",
        marginTop:hp(7),
    },
    left:{
        marginLeft:wp(16),    
    },
    picture:{
        height:wp(42),
        width:wp(42),
        borderRadius:hp(21),
    },
    pictureContainer:{
        height:wp(42),
        width:wp(42),
        borderRadius:hp(21),
        alignItems:'center',
        justifyContent:'center'
    },
    userItem:{
        width:wp(341),
        alignSelf:'center',
        flexDirection:'row',
        paddingVertical:hp(10),
        borderBottomWidth:hp(.5),
        borderColor:'rgba(0, 0, 0, 0.3)'

    },
    
    headerText:{
        alignSelf:'center',
        fontSize:hp(20),
        lineHeight:hp(23),
        marginTop:hp(20),
        marginBottom:hp(40),
        color:'black'
    },
    container:{
        flex:1,
        backgroundColor:'white'
    },
})