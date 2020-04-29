import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,Alert,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'

import {Header} from '../../../../components/header'
import {hp,wp} from '../../../../styles/SignUp-styles'
const ChatGiver =
    {
        name:'Zera',
        lastseen:'12:43',
        img:require('../../../../assets/images/Users/user1.png'),
    }

export default class placeRequest extends React.Component{
    state={
        condition:'new',
        quantity_focus:false,
        title_foces:false,
        author_focus:false,
        selectedQuantity:1
    }

    //   Alert.alert('hhjj')
    render(){ 

        return(
            <View style={styles.container}>
                {/* start of header  */}
                <Header 
                    navigation={this.props.navigation}
                    titile="books"                />
                {/* end of Header */}
                <RobotoText style={styles.topText}>
                    Place a GET request
                </RobotoText>
                {/* start of Radio butttons */}
            <KeyboardAvoidingView behavior='position' >
   
                {/* end of radio Buttons */}
                {/* start of form */}
                <View style={[styles.status,{flexDirection:'column'}]}>                    
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Name</RobotoText>
                        <TextInput
                            style={!this.state.title_foces?styles.formInput:styles.formInputfocused}
                            placeholder='Bread'
                            placeholderTextColor='#B4B4B4'
                            onFocus={()=> this.setState({title_foces: true})}
                            onBlur={()=> this.setState({title_foces: false})}
                            ref={ (input) => {this.titleInput = input }}
                            onSubmitEditing={()=>this.authorInput.focus()}
                        />
                    
                    </View>
                    
                    
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Other Details</RobotoText>
                        <TextInput
                        	numberOfLines={10}
      						multiline={true}
                                 style={!this.state.author_focus?styles.formInput:styles.formInputfocused}
                                placeholder='Put in other details not provided above.'
                                placeholderTextColor='#B4B4B4'
                                onFocus={()=> this.setState({author_focus: true})}
                            onBlur={()=> this.setState({author_focus: false})}
                            ref={ (input) => {this.authorInput = input }}
                        /> 
                    </View>
                </View>
                {/* start of proceed button */}
                <TouchableOpacity 
                    activeOpacity={.7}
                    onPress={()=>this.props.navigation.navigate('SingularChat',{UserDetails:ChatGiver})}

                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>PROCEED</RubikText>
                </TouchableOpacity>
                {/* end of proceed button */}
                </KeyboardAvoidingView>
                {/* end of form */}
                {/* {
                    this.state.selectedQuantity===30&&
                    Alert('you cannot give more than 30 books')
                } */}

            </View>
        )
    }
}

export const styles =StyleSheet.create({
    up:{
        height:(5/9)*wp(9),
        height:wp(9),
        marginBottom:hp(8)
    },
    proceed:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000AED',
        alignSelf:'center',
        width:wp(345),
        height:(45/354)*wp(345),
        marginTop:hp(35),
        borderRadius:hp(8)

    },
    upload:{
        fontSize:hp(14),
        color:'#B4B4B4'
    },
    formInputfocused:{
        borderColor:'#ABDCFE',
        width:wp(345),
        height:(48/345)*wp(345),
        borderRadius:hp(6),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        // borderColor:'#B4B4B4',
        flexDirection:'row',
        paddingLeft:wp(15),
        fontSize:hp(14),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    formInput:{
        // borderColor:'#26B1FF',
        width:wp(345),
        height:(48/345)*wp(345),
        borderRadius:hp(6),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#B4B4B4',
        flexDirection:'row',
        paddingLeft:wp(15),
        fontSize:hp(14),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    quqantityText:{
        fontSize:hp(12),
        marginVertical:hp(6)
    },
    // inputBox1:{
    //     width:wp(345),
    //     height:(48/345)*wp(345),
    //     borderWidth:1


    // },
    // inputBox:{
    //     width:wp(345),
    //     height:(48/345)*wp(345),
    //     borderWidth:1


    // },
    statusText:{
        fontSize:hp(14)
    },
    each:{
        alignItems:'center'
    },
    dot:{
        borderWidth:1,
        height:wp(16),
        width:wp(16),
        borderRadius:wp(8),
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(9)
    },
    inactiveDot:{
        backgroundColor:'white',
        height:wp(8),
        width:wp(8),
        borderRadius:wp(4)
    },
    activeDot:{
        backgroundColor:'#000AED',
        height:wp(8),
        width:wp(8),
        borderRadius:wp(4)

    },
    headerText:{
        fontSize:hp(16),
        fontWeight:'bold'
    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:wp(16),
        marginVertical:hp(10)
    },
    backIcon:{
        width:wp(16),
        height:wp(16),
    },
searchIcon:{
        width:wp(19),
        height:(18/19)*wp(19)
    },
    options:{
        flexDirection:"row",
        borderRadius:hp(6),
        width:wp(345),
        justifyContent:'space-between',
        paddingHorizontal:wp(24),
        paddingVertical:hp(16),
        backgroundColor:"white",
        marginTop:hp(16),
        marginHorizontal:wp(16)
    },
    status:{
        backgroundColor:"#fff",
        // flex:1,
        marginTop:hp(20),
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:wp(16)
    },
    searchInput:{
        width:'80%'
    },
    search:{
        backgroundColor:'#EAEAEA',
        alignSelf:'center',
        width:wp(350),
        height:(40/345)*wp(345),
        alignItems:"center",
        flexDirection:'row',
        paddingHorizontal:wp(12),
        borderRadius:hp(8)
    },
    topText:{
        fontSize:hp(22),
        marginVertical:hp(30),
        alignSelf:'center'
        
    },
    icon:{
        width:wp(8),
        height:(12/8)*wp(8)
    },
    actionText:{
        color:'#000AED',
        fontSize:hp(16),
    },
    actionButton:{
        marginVertical:hp(15),
        width:wp(345),
        height:(50/345)*wp(345),
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:wp(36),
        // justifyContent:'center',
        borderRadius:hp(8)
    },
    container:{
        flex:1,
        backgroundColor:'white',
        // alignItems:"center"
    },
})