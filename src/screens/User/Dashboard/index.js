import React,{Component} from 'react'
import {Text,StyleSheet,View,ScrollView,Image,TouchableOpacity} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import {hp,wp} from '../../../styles/SignUp-styles'
import {RubikText} from '../../../components/RubikText'

export default class Dashboard extends React.Component{
    render(){
        var profilePicture= require('../../../assets/images/dp.png');
        return(
        <View  style={styles.container}>
            <ScrollView>
                <Image resizeMode='contain' source={require('../../../assets/images/signup.png')} style={styles.topImage}/>

                {/* start of Account details */}
                <View style={styles.accountDetails}>
                    <View style={styles. displayPicture}>
                        <Image
                            resizeMode='cover'
                            style={styles. displayPicture}
                            source={profilePicture}
                        />

                    </View>
                    <View style={styles.accountInfo}>
                        <View >
                            <RubikText style={styles.hello}>Hello,</RubikText>
                            <RubikText style={styles.name}>Mike Oyinlola</RubikText>
                        </View>
                        <View style={{flexDirection:'row',}}>
                            <RubikText style={styles.level}>Bronze-</RubikText>
                            <RubikText style={styles.points}>25 Pts</RubikText>
                        </View>

                    </View>


                </View>
                {/* end of account details */}
                <View style={styles.overView}>
                    <RubikText style={styles.overViewText}>Activity Overview</RubikText>
                    <RubikText style={styles.month}>This month</RubikText>
                </View>
                {/* start of circular activity */}
                <View style={styles.circularActivity}>
                    {/* <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Transactions')}

                    >
                        <ProgressCircle
                            percent={70}
                            radius={wp(52)}
                            borderWidth={hp(8)}
                            bgColor='#fff'
                            color="#32b3fc"
                            shadowColor='#cfebfb'
                        >
                            <RubikText>Give</RubikText>
                        </ProgressCircle>
                    </TouchableOpacity>
                    <TouchableOpacity  
                    onPress={()=>this.props.navigation.navigate('Transactions')}
                    >
                        <ProgressCircle
                            percent={50}
                            radius={wp(52)}
                            borderWidth={hp(8)}
                            bgColor='#fff'
                            color="#32b3fc"
                            shadowColor='#cfebfb'
                        >
                            <RubikText>Get</RubikText>
                        </ProgressCircle>
                    </TouchableOpacity> */}
                    <View
                        onPress={()=>this.props.navigation.navigate('Transactions')}

                    >
                        <ProgressCircle
                            percent={35}
                            radius={wp(52)}
                            borderWidth={hp(8)}
                            bgColor='#fff'
                            color="#32b3fc"
                            shadowColor='#cfebfb'
                            
                        >
                            <RubikText>Swap</RubikText>
                        </ProgressCircle>
                    </View>

                </View>
                {/* end of circular activity  */}
                {/* start of increase point */}
                <View style={styles.info}>
                    <RubikText style={styles.keepUp}>Keep it up!</RubikText>
                    <RubikText style={styles.inrease}>Increase your rank with more activity on the app.</RubikText>
                    <RubikText style={styles.more}>15 more points to the next rank</RubikText>

                </View>
                {/* end of increase point */}
                {/* start of Category Overview */}
                <View style={styles.categoryView}>
                    <RubikText style={styles.title}>Category Overview</RubikText>
                    {/* start of total Given Item */}
                    <TouchableOpacity 
                        activeOpacity={.4}
                        onPress={()=>this.props.navigation.navigate('History',{name:'Give'})}

                        style={styles.category}
                    >
                        <RubikText>Give</RubikText>
                        <View style={styles.itemcount}>
                            <RubikText style={[styles.title,{marginBottom:0}]}>10000 item(s)</RubikText>
                            <Image
                                resizeMode='contain'
                                style={styles.icon}
                                source={require("../../../assets/images/rightarrow.png")}
                            />

                        </View>
                    </TouchableOpacity>
                    {/* end of Given Item */}
                    {/* start of total Given Item */}
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('History',{name:'Get'})}

                        activeOpacity={.4}
                        style={styles.category}
                    >
                        <RubikText>Get</RubikText>
                        <View style={styles.itemcount}>
                            <RubikText style={[styles.title,{marginBottom:0}]}>10000 item(s)</RubikText>
                            <Image
                                resizeMode='contain'
                                style={styles.icon}
                                source={require("../../../assets/images/rightarrow.png")}
                            />

                        </View>
                    </TouchableOpacity>
                    {/* end of Given Item */}
                    {/* start of total Given Item */}
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('History',{name:'Swap'})}
                        activeOpacity={.4}
                        style={styles.category}
                    >
                        <RubikText>Swap</RubikText>
                        <View style={styles.itemcount}>
                            <RubikText style={[styles.title,{marginBottom:0}]}>10000 item(s)</RubikText>
                            <Image
                                resizeMode='contain'
                                style={styles.icon}
                                source={require("../../../assets/images/rightarrow.png")}
                            />

                        </View>
                    </TouchableOpacity>
                    {/* end of Given Item */}

                </View>

                {/* end of category overView */}
                
            </ScrollView>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    topImage:{
        width:wp(74),
        height:(90/74)* wp(74),
        marginTop:hp(5),
        alignSelf:"center",
        marginBottom:hp(8 )
    },
    circularActivity:{
        // flexDirection:'row',
        // justifyContent:"space-between",
        alignSelf:'center',
        paddingHorizontal:wp(16),
        marginBottom:hp(50)
    },
    icon:{
        width:wp(6.46),
        height:(12.91/6.46)*wp(6.46),
        marginLeft:wp(24)
    },
    itemcount:{
        flexDirection:'row',
        // alignSelf:'auto
        alignItems:'center',
        marginRight:wp(7)
    },
    category:{
        flexDirection:'row',
        paddingBottom:hp(12),
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:hp(16),
        borderBottomWidth:1,
        borderColor:'#cfcfcf',
        width:wp(341),
        // height:(40/341)*wp(341)
    },
    title:{
        fontSize:hp(16),
        fontWeight:'500',
        color:'#000AED',
        marginBottom:hp(40)
    },
    categoryView:{
        paddingHorizontal:wp(17),
        marginTop:hp(60),
        marginBottom:hp(52)
    },
    more:{
        fontSize:hp(18),
        color:'#fff',
        fontWeight:'500'
    },
    inrease:{
        marginBottom:hp(27),
        fontSize:hp(14),
        color:'#fff',
        opacity:.5
    },
    keepUp:{
        color:'#FFFFFF',
        fontSize:hp(14),
        marginBottom:hp(7)
        ,fontWeight:'500'
    },
    info:{
        backgroundColor:'rgba(0, 10, 237, 0.7)',
        borderRadius:hp(8),
        paddingHorizontal:wp(17),
       marginHorizontal:wp(12),

        paddingVertical:hp(20)
    },
    month:{
        color:'#343434',
        fontSize:hp(16)
    },
    overViewText:{
        color:'#000AED',
        fontSize:hp(18),
        fontWeight:'500',
        marginBottom:hp(20)
    },
    overView:{
        paddingHorizontal:wp(17),
        paddingVertical:hp(40)
    },
    points:{
        fontSize:hp(14),
        color:"#fe3092"
    },
    level:{
        fontSize:hp(14),
        color:'#a2a2a2'
    },
    hello:{
        fontSize:hp(18),
        color:'#a2a2a2',
        marginBottom:hp(10)
    },
    name:{
        color:'#000AED',
        fontSize:hp(18),
        fontWeight:'500'
    },
    accountInfo:{
        paddingLeft:wp(20),
        flexDirection:'row',
        width:wp(283),
        justifyContent:"space-between"
    },
     displayPicture:{
        height:wp(44),
        width:wp(44),
        borderRadius:wp(22),
        backgroundColor:"red"
    },
    accountDetails:{
        flexDirection:'row',
        backgroundColor:'rgba(38, 177, 255, 0.15)',
        // height:(150/375)*wp(375),
        paddingHorizontal:wp(17),
        paddingTop:hp(35),
        paddingBottom:hp(56),
        // width:'100%'
    },
    container:{
        flex:1,
        backgroundColor:'#Fefefe',
        // marginBottom:hp(200)
    },
    
    })