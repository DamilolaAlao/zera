import React, {Component} from 'react'
import {View,TouchableOpacity} from 'react-native'
import {RobotoText} from './RobotoText'
import BackSvg from '../assets/svgs/back.svg'
import {styles} from '../screens/User/Home/Books/mainCategory'

export class Header extends React.PureComponent{

    render(){
    const {title}=this.props
      return(
        <View style={styles.header}>
        <TouchableOpacity
            onPress={()=>this.props.navigation.goBack()}
        >
            <BackSvg fill='black' style={styles.backIcon} />
        </TouchableOpacity>
        <RobotoText style={styles.headerText}>{title}</RobotoText>
        <View></View>

        </View>
        // <TouchableOpacity
        //     activeOpacity={0.7} 
        //     onPress={()=> this.props.goto?this.props.navigation.navigate(this.props.goto):this.props.navigation.goBack()}
        //     style={styles.backButton}>
        //     <MyIcon name="left" size={EStyleSheet.value('22rem')} color={"#555555"} />
        //     {
        //       this.props.showTitle===false || true
        //       ?
        //       null
        //       : 
        //       <Text style={[styles.backText,{color:this.props.color || "orange"}]}>Back</Text>
        //     }
        // </TouchableOpacity>
      )
    }
    }