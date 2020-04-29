import React,{Component} from 'react'
import {Text,StyleSheet,View,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native'
import {hp,wp} from '../../../styles/SignUp-styles'
import {RubikText} from '../../../components/RubikText'
import BackIcon from '../../../assets/svgs/whiteback.svg'
// import {Data} from './HistoryData'

export default class ItemDetails extends React.Component{
    render(){
    const details= this.props.navigation.getParam('itemDetails')
        return(
        <View  style={styles.container}>
            <ImageBackground style={styles.itemImage} source={details.img}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                    <BackIcon fill='#fff' style={styles.backIcon}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.info}>
                <RubikText style={styles.categoryName}>{details.category}</RubikText>
                <RubikText style={styles.name}>{details.name}</RubikText>
                <RubikText style={styles.item_description}>{details.item_description}</RubikText>
            </View>
            
        </View>
        )
    }
}

const styles=StyleSheet.create({
    item_description:{
        fontSize:hp(14),
        color: '#000000',
        opacity:.7
    },
    name:{
        fontSize:hp(20),
        lineHeight:hp(24),
        paddingVertical:hp(14)
    },
    info:{
        paddingVertical:hp(24),
        paddingHorizontal:wp(16)

    },
    categoryName:{
        fontSize:hp(14),
        lineHeight:hp(17),
        color: 'rgba(0, 0, 0, 0.6)'
    },
    backIcon:{
        marginTop:hp(36),
    marginLeft:wp(25),
        width:wp(7),
        height:(13/13)*wp(7)
    },
    itemImage:{
        width:wp(375),
        height:(375/375)*wp(375)
    },
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        // marginBottom:hp(200)
    },
    
    })