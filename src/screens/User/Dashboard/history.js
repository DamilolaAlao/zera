import React,{Component} from 'react'
import {Text,StyleSheet,View,ScrollView,Image,TouchableOpacity} from 'react-native'
import {hp,wp} from '../../../styles/SignUp-styles'
import {RubikText} from '../../../components/RubikText'
import {Data} from '../Dashboard/DummyData/HistoryData'
import BackIcon from '../../../assets/svgs/back1.svg'

export default class History extends React.Component{
    // name = this.props.navigation.getParam('name','Error')

    render(){
const name= this.props.navigation.getParam('name','Error')
        return(
        <View  style={styles.container}>
            {/* start of topbar */}
            <View style={styles.topBar}>
                {/* start of header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                         <BackIcon fill='black' style={[styles.backIcon,{}]}/>
                    </TouchableOpacity>
                    <RubikText style={styles.headerTitle}>{name}</RubikText>
                    <View></View>
                </View>
                {/* end of header */}
                <TouchableOpacity style={styles.date}>
                    <RubikText>25,may 2016</RubikText>
                   <BackIcon fill='red' style={styles.downIcon}  />    
                </TouchableOpacity>
            </View>
            {/* end of topbar */}
            <ScrollView contentContainerStyle={{marginTop:hp(20),paddingBottom:hp(50)}}>
                {
                    Data.map((item,index)=>{
                        return(
                            <Items
                            details={item}
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
const Items=(props)=>{
    const {name,img,date,category,point,quantity,item_description}=props.details
    return(
    <TouchableOpacity 
        onPress={()=>props.navigation.navigate('ItemDetails',{itemDetails:props.details})}
        style={styles.item}
    >
        <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={img} resizeMode='cover' />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(275),marginLeft:wp(10)}}>
            <View>
                <RubikText style={styles.itemName} numberOfLines={1} >{name||(quantity+' Items')}</RubikText>
                <RubikText style={styles.categoryName}>{category}</RubikText>
                <RubikText style={styles.itemDate}>{date}</RubikText>
            </View>
            <RubikText style={styles.point} >{point}pts</RubikText>
        </View>
    </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    imageContainer:{
        height:wp(72),
        width:wp(72),
        borderRadius:hp(10),
        
    },
    itemDate:{
        color:'rgba(52,52,52,.5)',
        fontSize:hp(14)
    },
    point:{
        fontSize:hp(16),
        fontWeight:"500",
        color: '#000AED'
    },
    categoryName:{
        fontSize:hp(13),
        color:'rgba(52,52,52,.8)',
        marginBottom:hp(12)
    },
    itemName:{
        fontSize:hp(16),
        color:"#343434",
        marginVertical:hp(4)
    },
    itemImage:{
        height:wp(72),
        width:wp(72),
        borderRadius:hp(10)
    },
// 
    item:{
        flexDirection:'row',
        height:wp(72),
        paddingHorizontal:wp(12),
        marginVertical:hp(16)
        // alignItems:"center"
        // justifyContent:'space-between'
    },
    downIcon:{
        width:wp(12),
        height:(7.41/12)*wp(12),
        marginLeft:wp(8),
        // color:'blue',
        transform:[
                {rotate:'-90deg'}
        ]
    },
    date:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:"center",
        alignItems:'center',
        marginTop:hp(50)
    },
    headerTitle:{
        fontSize:hp(18),
        fontWeight:'500'
    },
    backIcon:{
        width:wp(6.5),
        height:(12.91/6.5)*wp(6.5),
        // marginLeft:wp(24)
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    topBar:{
        // flexDirection:'row',
        backgroundColor:'rgba(38, 177, 255, 0.15)',
        // height:(150/375)*wp(375),
        paddingHorizontal:wp(17),
        paddingTop:hp(25),
        paddingBottom:hp(40),
        // width:'100%'
    },
    container:{
        flex:1,
        backgroundColor:'#Fefefe',
        // marginBottom:hp(200)
    },
    
    })