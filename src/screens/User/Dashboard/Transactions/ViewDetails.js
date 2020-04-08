import React,{Component} from 'react'
import {Text,StyleSheet,View,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native'
import {hp,wp} from '../../../../styles/SignUp-styles'
import {RubikText} from '../../../../components/RubikText'
import {RobotoText} from '../../../../components/RobotoText'
import NavIcon from '../../../../assets/svgs/navIcon.svg'
import {Header} from '../../../../components/header'
// import { TextInput } from 'react-native-gesture-handler'

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
export default class TransactionDetails extends React.Component{
    state={
        showStarModal:false
    }
    render(){
        const Details = this.props.navigation.getParam("Details")
        const {status,transaction_type,transaction_date,transaction_id,
            item_details,givers_details,pickup_address}=Details
        return(
        <View  style={styles.container}>
                {/* start of header */}
                <Header
                    title={<RobotoText style={{fontSize:hp(20)}}>Transaction details</RobotoText>}
                    navigation={this.props.navigation}
                />
                {/* end of header */}
            {/* start of status View */}
            <View style={styles.statusView}>
                <RobotoText style={{color:'rgba(52, 52, 52, 0.5)',fontSize:hp(14)}}>Status: </RobotoText>
                <RobotoText style={{fontSize:hp(14),color:StatusColor(status),fontWeight:'normal'}}>{status}</RobotoText>
            </View>
            {/* end of status View */}
            <RobotoText style={[styles.typeText,{paddingLeft:wp(16)}]}>{transaction_type} transaction</RobotoText>
            {/* start of Transaction ID */}
            <View style={styles.transactionIdView}>
                <RobotoText style={styles.typeText}>Transaction ID</RobotoText>
                <RobotoText style={styles.ID}>{transaction_id}</RobotoText>
            </View>
            {/* end of Transaction ID */}
            <RubikText style={styles.itemName}>{item_details.name} </RubikText>
            <View style={styles.catView}>
                <RobotoText style={styles.typeText}>{item_details.category} </RobotoText>
                <RobotoText style={styles.ID}>{transaction_date} </RobotoText>
            </View>
            <RobotoText style={styles.Giver}>Giver's details</RobotoText>
            {/* strt of givers deails */}
            <View style={styles.givers_detailsView}>
                <RobotoText style={[styles.itemName,{paddingHorizontal:0}]}>{givers_details.name}</RobotoText>
                <RobotoText style={styles.giver_num}>{givers_details.phone}</RobotoText>
            </View>
            <RobotoText style={styles.pickUp}>Pickup location</RobotoText>
            <RobotoText style={styles.address}>{pickup_address}</RobotoText>
            <TouchableOpacity style={styles.button}
                onPress={()=>this.setState({showStarModal:true})}
            >
                <RubikText style={styles.buttonText}>I HAVE RECEIVED MY ORDER</RubikText>

            </TouchableOpacity>

            {/* start of Modal */}
            {     this.state.showStarModal&&       
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <RubikText style={styles.modalText}>Rate this transaction</RubikText>
                        <View style={styles.feedbackBox}>
                            <TextInput
                                 multiline={true}
                                 numberOfLines={5}
                                style={styles.feedbackInput}
                                placeholderStyle={styles.placeholder}
                                placeholder='Give us a feedback on your transaction...'
                            />

                        </View>
                        <TouchableOpacity style={styles.submitButton}
                            onPress={()=>this.setState({showStarModal:false})}
                        >
                            <RubikText style={styles.buttonText}>SUBMIT</RubikText> 
                        </TouchableOpacity>

                    </View>
                </View>
            }
            {/* end of Star Modal */}
        </View>
        )
    }
}

const styles=StyleSheet.create({
    placeholder:{
        fontSize:hp(13),
        lineHeight:hp(15),
        fontFamily:'rubik-md',
        color:"rgba(0,0,0,.5)"
    },
    feedbackInput:{
        width:wp(343),
        alignItems:'flex-start'
    },
    feedbackBox:{
        width:wp(287),
        height:(86/287)*wp(287),
        alignSelf:'center',
        paddingTop:hp(12),
        paddingRight:wp(12),
        marginBottom:hp(33),
        borderRadius:hp(6),
        borderWidth:1,
        borderColor:'#000AED',
        shadowColor:'rgba(0, 0, 0, 0.25)',
        shadowOffset:{
            height:hp(4),
            width:hp(4)
        },
    },
    modalText:{
        fontWeight:'500',
        fontSize:hp(14),
        lineHeight:hp(17),
        color:'black',
        alignSelf:'center'
    },
    submitButton:{
        width:wp(287),
        paddingVertical:hp(12),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp(5),
        backgroundColor:'#000AED',

    },
    modalView:{
        left:wp(25),
        right:wp(25),
        bottom:hp(35),
        backgroundColor:'white',
        borderRadius:hp(12),
        height:(342/326)*wp(326),
        paddingHorizontal:wp(21),
        paddingVertical:hp(26),
        position:'absolute'
    },
    modalContainer:{
        top:0,
        bottom:0,
        left:0,
        right:0,
        position:'absolute',
        backgroundColor:'rgba(0,0,0,.2)',
        alignItems:'center',
        // justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:hp(14),
        fontWeight:'500',
        lineHeight:hp(17)
    },
    button:{
        width:wp(345),
        alignSelf:'center',
        paddingVertical:hp(16),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000AED',
        borderRadius:hp(8)
    },
    address:{
        fontSize:hp(16),
        marginLeft:wp(16),
        color:'#000AED',
        marginBottom:hp(68)
    },
    pickUp:{
        marginTop:hp(45),
        marginHorizontal:wp(16),
        marginBottom:hp(25),
        fontSize:hp(14),
        color:'#343434'
    },
    giver_num:{
        fontSize:hp(14),
        color:"#000AED",
        lineHeight:hp(16),
    },
    giver_name:{
        fontSize:hp(16),
        color:"#343434",
        fontWeight:'500'
    },
    givers_detailsView:{
        marginTop:hp(25),
        paddingHorizontal:wp(16),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    Giver:{
        marginTop:hp(46),
        marginHorizontal:wp(16),
        fontSize:hp(14),
        color:'#343434'
    },
    catView:{
        marginTop:hp(16),
        marginHorizontal:wp(16),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ID:{
        color:'black',
        fontSize:hp(14)
    },
    transactionIdView:{
        marginTop:hp(35),
        marginHorizontal:wp(16),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    statusText:{
        fontSize:hp(14)
    },
    statusView:{
        marginTop:hp(14),
        marginBottom:hp(25),
        alignSelf:'center',
        flexDirection:'row'
    },
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
        paddingHorizontal:wp(16),
        color:'#000AED',
        marginTop:hp(24)
    },
    typeText:{
        color:'rgba(0,0,0,.5)',
        fontSize:hp(14),
        // marginLeft:wp(16)
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