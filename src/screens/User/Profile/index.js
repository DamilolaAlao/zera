import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {RubikText} from '../../../components/RubikText'
import {RobotoText} from '../../../components/RobotoText'
import {wp,hp} from '../../../styles/SignUp-styles'
import EditIcon from '../../../assets/svgs/pencil.svg'
import SettingsIcon from '../../../assets/svgs/settings.svg'
import BackIcon from '../../../assets/svgs/back1.svg'
import ArrowLeft from '../../../assets/svgs/arrow-left.svg'


export default class Profile extends Component{
  state={
    profile_complete:true,
    visibility:true
  }


  render() {
    var dp=require('../../../assets/images/dp.png')
    if(this.state.visibility){
        return (
		<View style={styles.Container}>
            {/* startof header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <BackIcon style={styles.backIcon}/>
                </TouchableOpacity>
                <RubikText style={styles.headerText}>Personal Profile</RubikText>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:wp(73)}}>
                    <TouchableOpacity>
                        <EditIcon style={styles.editIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SettingsIcon style={styles.settingsIcon}/>
                    </TouchableOpacity>
                </View>

            </View>
            {/* end of header */}
            {/* profile picture */}
            <View style={styles.pictureBox}>
                {this.state.profile_complete&&
                    <Image resizeMode='cover' style={styles.displayPicture}
                        source={dp}
                    />
                }
            </View>
            {/* eng of profile picture */}
            <RubikText style={styles.name}>Daniel Adeyemi</RubikText>
            {/* start of userId a */}
            {
                this.state.profile_complete?
                <RobotoText style={styles.userId}>46478GI90</RobotoText>
                :
                <RubikText style={styles.inCompleteText}>Your profile is <RubikText style={[styles.inCompleteText,{fontWeight:'bold',color:"black"}]}>not complete.</RubikText> You will not be able{'\n'} to carry out transactions until you complete it</RubikText>
            }
            {/* end of userId */}
            {/* start of all transaction overview */}
                <View style={styles.transactionDetails}>
                    <View style={{alignItems:'center'}}>
                        <RubikText style={styles.transactionCount}>20</RubikText>
                        <RubikText style={styles.transactionType}>Give</RubikText>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <RubikText style={styles.transactionCount}>5</RubikText>
                        <RubikText style={styles.transactionType}>Got</RubikText>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <RubikText style={styles.transactionCount}>15</RubikText>
                        <RubikText style={styles.transactionType}>Swap</RubikText>
                    </View>

                </View>
            {/* end of all transaction overviw */}
            {/* start of profile Actions */} 
                <TouchableOpacity style={styles.action}
                    onPress={()=>this.props.navigation.navigate('EditPersonalInfo')}
                >
                    <RubikText style={styles.actionText}>Personal info</RubikText>
                    <ArrowLeft style={styles.backIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action}
                    // onPress={()=>this.props.navigation.navigate('EditPersonalInfo')}

                >
                    <RubikText style={styles.actionText}>Help center</RubikText>
                    <ArrowLeft style={styles.backIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action}
                     onPress={()=>this.props.navigation.navigate('ResetPassword')}
               
                >
                    <RubikText style={styles.actionText}>Reset Password</RubikText>
                    <ArrowLeft style={styles.backIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action}
                     onPress={()=>this.props.navigation.navigate('Settings')}
                >
                    <RubikText style={styles.actionText}>Settings</RubikText>
                    <ArrowLeft style={styles.backIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.action,{borderBottomWidth:0}]}>
                    <RubikText style={styles.actionText}>Log out</RubikText>
                    {/* <ArrowLeft style={styles.backIcon}/> */}
                </TouchableOpacity>
            {/* end of profile actions */}

        </View>
		   
    );
        }
    else{
        return (
            <View style={styles.Container}>
                {/* startof header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <BackIcon style={styles.backIcon}/>
                    </TouchableOpacity>
                    <RubikText style={styles.headerText}>Personal Profile</RubikText>
                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:wp(73)}}>
                        <TouchableOpacity>
                            <EditIcon style={styles.editIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SettingsIcon style={styles.settingsIcon}/>
                        </TouchableOpacity>
                    </View>
    
                </View>
                {/* end of header */}
                {/* profile picture */}
                <View style={styles.pictureBox}>
                    <RubikText style={styles.invisibleText}>Invisible</RubikText>
                </View>
                {/* eng of profile picture */}
                <RubikText style={styles.name}>Daniel Adeyemi</RubikText>
                {/* start of all transaction overview */}
                    <View style={styles.transactionDetails}>
                        <View style={{alignItems:'center'}}>
                            <RubikText style={styles.transactionCount}>20</RubikText>
                            <RubikText style={styles.transactionType}>Give</RubikText>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <RubikText style={styles.transactionCount}>5</RubikText>
                            <RubikText style={styles.transactionType}>Got</RubikText>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <RubikText style={styles.transactionCount}>15</RubikText>
                            <RubikText style={styles.transactionType}>Swap</RubikText>
                        </View>
    
                    </View>
                {/* end of all transaction overviw */}
                {/* start of profile Actions */} 
                    <TouchableOpacity style={styles.action}
                        onPress={()=>this.props.navigation.navigate('EditPersonalInfo')}
                    >
                        <RubikText style={styles.actionText}>Personal info</RubikText>
                        <ArrowLeft style={styles.backIcon}/>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.action}
                        // onPress={()=>this.props.navigation.navigate('EditPersonalInfo')}
    
                    >
                        <RubikText style={styles.actionText}>Help center</RubikText>
                        <ArrowLeft style={styles.backIcon}/>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.action}
                         onPress={()=>this.props.navigation.navigate('ResetPassword')}
                   
                    >
                        <RubikText style={styles.actionText}>Reset Password</RubikText>
                        <ArrowLeft style={styles.backIcon}/>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.action}
                         onPress={()=>this.props.navigation.navigate('Settings')}
                    >
                        <RubikText style={styles.actionText}>Settings</RubikText>
                        <ArrowLeft style={styles.backIcon}/>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={[styles.action,{borderBottomWidth:0}]}>
                        <RubikText style={styles.actionText}>Log out</RubikText>
                        {/* <ArrowLeft style={styles.backIcon}/> */}
                    </TouchableOpacity>
                {/* end of profile actions */}
    
            </View>
               
        );
    }
  }
}



const styles = StyleSheet.create({
    invisibleText:{
        fontSize:hp(14),
        color:'white',
        fontWeight:'500',
        alignSelf:'center'
    },
    actionText:{
        fontSize:hp(16),
        color:'#000AED'
    },
    action:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:wp(341),
        alignSelf:'center',
        paddingVertical:hp(16),
        borderBottomWidth:hp(.5),
        borderColor:'rgba(0, 0, 0, 0.3)'
    },
    transactionType:{
        color:'rgba(0,0,0,.5)',
        fontSize:hp(14)
    },
    transactionCount:{
        fontSize:hp(18),
        fontWeight:'500',
        marginBottom:hp(7),
        color:'#000AED'
    },
    transactionDetails:{
        alignSelf:'center',
        borderWidth:1,
        width:wp(349),
        height:(93/349)*wp(349),
        paddingVertical:hp(24),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:hp(31),
        paddingHorizontal:wp(48),
        borderRadius:hp(6),
        shadowColor:'rgba(0, 0, 0, 0.1)',
        shadowOffset:{
            height:hp(5),
            width:hp(5)
        },
        shadowOpacity:hp(5)
        // borderColor:'black'
    },
    inCompleteText:{
        fontSize:hp(14),
        // fontWeight:''
        // lineHeight:hp(17),
        color:'rgba(0,0,0,.5)',
        textAlign:'center',
        marginBottom:hp(20),
        // fontWeight:'light'
    },
    userId:{
        color:'rgba(52, 52, 52, 0.5)',
        fontSize:hp(13),
        fontWeight:'500',
        alignSelf:'center',
        marginBottom:hp(33)
    },
    name:{
        fontSize:hp(14),
        alignSelf:'center',
        color:'#000AED',
        marginBottom:hp(12)
    },
    displayPicture:{
        height:wp(100),
        width:wp(100),
        borderRadius:wp(50)

    },
    pictureBox:{
        height:wp(100),
        width:wp(100),
        borderRadius:wp(50),
        // borderWidth:1,
        // alignItems:'center',
        alignSelf:'center',
        backgroundColor:'black',
        justifyContent:"center",
        marginTop:hp(25),
        marginBottom:hp(16)
    },
    settingsIcon:{
        marginLeft:wp(18),
        height:wp(15),
        width:wp(15),
    },
    editIcon:{
        width:wp(15),
        height:wp(15)
    },
    headerText:{
        fontSize:hp(14),
        fontWeight:'500',
        marginLeft:wp(114)
    },
    backIcon:{
        width:wp(7.5),
        height:(12/7.5)*wp(7.5)
    },
    header:{
        flexDirection:'row',
        alignItems:'center'
        // justifyContent:'space-between',
    },
Container:{
  flex:1,
  paddingTop:hp(12),
  paddingHorizontal:wp(16),
  backgroundColor:'white'
},


});