import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {RubikText} from '../../../components/RubikText'
import {RobotoText} from '../../../components/RobotoText'
import {wp,hp} from '../../../styles/SignUp-styles'
import BackIcon from '../../../assets/svgs/back1.svg'
import ArrowLeft from '../../../assets/svgs/arrow-left.svg'


export default class Settings extends Component{
  state={
    profile_complete:true
  }


  render() {
        return (
		<View style={styles.Container}>
            {/* startof header */}
            <View style={styles.header}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <BackIcon style={styles.backIcon}/>
                </TouchableOpacity>
                <RobotoText style={styles.headerText}>Settings</RobotoText>
                <View />

            </View>
            {/* end of header */}

            <TouchableOpacity style={styles.action}>
                <RubikText style={styles.actionText}>Languages</RubikText>
                <ArrowLeft style={styles.backIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.action,{borderBottomWidth:0}]}
                onPress={()=>this.props.navigation.navigate('SetVisibility')}
            >
                <RubikText style={styles.actionText}>Invisible Mode</RubikText>
                <ArrowLeft style={styles.backIcon}/>
            </TouchableOpacity>
        {/* end of profile actions */}

        </View>
		   
    );
  }
}



const styles = StyleSheet.create({
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
    headerText:{
        fontSize:hp(20),
        fontWeight:'500',
        marginLeft:wp(114)
    },
    backIcon:{
        width:wp(7.5),
        height:(12/7.5)*wp(7.5)
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:hp(47)
        // justifyContent:'space-between',
    },
Container:{
  flex:1,
  paddingTop:hp(12),
  paddingHorizontal:wp(16),
  backgroundColor:'white'
},


});