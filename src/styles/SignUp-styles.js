import {StyleSheet} from 'react-native'
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'

export const hp = num => {
  return heightPercentageToDP((num / 812) * 100)
}

export const wp = num => {
  return widthPercentageToDP((num / 375) * 100)
}
export const styles = StyleSheet.create({
modalContainer:{
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    // marginRight:wp(15),
    // height: hp(820),
    marginRight:wp(30),
    // width: wp(375),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop:hp(120)
      

},
companyModal:{
backgroundColor: 'white',
borderRadius: hp(6),
padding: 10,
width: wp(290),
height:hp(300),
flex:1,
shadowColor: '#f7f7f8',
shadowOffset: { width: 5, height: 5 },
shadowOpacity: 0.5,
shadowRadius: 5,
backgroundColor:'white',
elevation: 6,
borderWidth:1,
borderColor:'white'
// alignSelf:'center',


},
    searchText:{
        color:'grey',
        fontSize:hp(14)
    },
    dropdown:{
        height:(4.45/7.75)*wp(7.75),
        width:wp(7.75),
    },
    corpTextInput:{
        alignSelf:'center'
    },
    corpFormBox:{
        borderColor:'#26B1FF',
        height:(40/295)*wp(295),
        width:wp(295),
        // height:(45/295)*wp(295),
        borderRadius:hp(6),
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#B4B4B4',
        paddingHorizontal:wp(15),
        fontSize:hp(14),
        color:'#d7d7d7',
        fontFamily:'roboto-rg'
    },
    InputTag:{
        marginBottom:5,
        marginTop:hp(12),
        fontSize:hp(14)
    },
    signupButton:{
        backgroundColor: '#000AED',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(293),
        height:(45/293)*wp(293),
        
        alignSelf:'center',
        borderRadius: wp(7),
        marginVertical:hp(33),
        
    },
    signUpText:{
        alignSelf:'center',
        fontSize:hp(24),
        marginVertical:hp(20)
    },
    input:{
        width:wp(295),
        height:(45/295)*wp(295),
        borderRadius:hp(6),
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#B4B4B4',
        paddingHorizontal:wp(15)
    },
    emailText:{
        marginVertical:hp(35),
        color:'#AFB2B8',
        alignSelf:'center',
        fontSize:hp(16)
        
    },
    fbText:{
        color:'#57E8FF',
        fontSize: hp(14),
        marginLeft:wp(16)
    },
    fbImage:{
        width:wp(17),
        height:(17/17)*wp(17)
    },
    fbView:{
            width:wp(295),
            height:(45/295)*wp(295),
            borderRadius:hp(6),
            paddingHorizontal:wp(55),
            borderWidth:1,
            borderColor:'#57E8FF',
            alignItems:'center',
            flexDirection:'row'
    },
    optionBox:{
        // width:wp(335),
        // height:(482/335)*wp(335),
        paddingVertical:hp(35),
        paddingHorizontal: wp(20),
        shadowColor: '#f7f7f8',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        backgroundColor:'white',
        elevation: 6,
        borderWidth:1,
        borderColor:'white'
        
    },
    corpOptionBox:{
        // width:wp(335),
        // height:(300/335)*wp(335),
        paddingVertical:hp(35),
        marginBottom:hp(40),
        paddingHorizontal: wp(20),
        shadowColor: '#f7f7f8',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: hp(10),
        backgroundColor:'white',
        elevation: 6,
        borderRadius:hp(6),
        borderWidth:1,
        borderColor:'white'
        
    },
    // signupText:{
    //     marginVertical:hp(22),
    // },
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'

        
    },
    topImage:{
        width:wp(74),
        height:(90/74)* wp(74),
        marginTop:hp(25),
    }
})