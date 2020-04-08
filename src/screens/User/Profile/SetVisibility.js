import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {RubikText} from '../../../components/RubikText'
import {RobotoText} from '../../../components/RobotoText'
import {wp,hp} from '../../../styles/SignUp-styles'
import BackIcon from '../../../assets/svgs/back1.svg'
import ArrowLeft from '../../../assets/svgs/arrow-left.svg'


export default class SetVisibility extends Component{
  state={
    mode:'OFF'
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
            <RobotoText style={styles.actionText}>Invisible Mode</RobotoText>
            <RobotoText style={styles.instruction}>
                Invisible mode is to hide your identity for all {'\n'}
                transactions. Once enabled, the receiver will see{'\n'}
                your given items as an anonymous donation.
            </RobotoText>

            <TouchableOpacity style={styles.changeModeButton}
                activeOpacity={.5}
            >
                <RubikText style={styles.changeModeText}>{this.state.mode==='OFF'?`TURN ON`:`TURN OFF`}</RubikText>
            </TouchableOpacity>

        </View>
		   
    );
  }
}



const styles = StyleSheet.create({
    changeModeText:{
        fontSize:hp(14),
        fontWeight:'500',
        color:'#000AED'
    },
    changeModeButton:{
        width:wp(343),
        paddingVertical:hp(16),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp(8),
        borderColor:'#000AED',
        borderWidth:hp(1)
    },
    instruction:{
        fontSize:hp(16),
        marginBottom:hp(33),
        textAlign:'center'

    },
    actionText:{
        fontSize:hp(16),
        color:'#000AED',
        marginBottom:hp(18),
        fontWeight:'bold',
        alignSelf:'center'
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
        marginBottom:hp(32)
        // justifyContent:'space-between',
    },
Container:{
  flex:1,
  paddingTop:hp(12),
  paddingHorizontal:wp(16),
  backgroundColor:'white'
},


});