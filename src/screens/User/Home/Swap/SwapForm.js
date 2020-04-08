import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,Alert,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'

import {Header} from '../../../../components/header'

import {hp,wp} from '../../../../styles/SignUp-styles'

export default class SwapForm extends React.Component{
    state={
        condition:'new',
        selectedQuantity:1,
        name_focus:false,
        cost_focus:false,
        worth_focus:false,
        color_focus:false,
        size_focus:false,
        color_focus:false
    }
    
    render(){


        return(
            <View style={styles.container}>
                {/* start of header  */}
                <Header 
                    title='Swap'
                    navigation={this.props.navigation}
                />
                {/* end of Header */}
                <RobotoText style={styles.topText}>What do you have?</RobotoText>
                {/* start of Radio butttons */}
            <KeyboardAvoidingView style={{flex:1}} >
              <ScrollView contentContainerStyle={{paddingBottom:40}} >
                <View style={styles.status}>
                    <View style={styles.each}>
                        <RubikText style={styles.statusText}>New</RubikText>
                        <TouchableOpacity
                            style={styles.dot}
                            onPress={()=>this.setState({condition:'new'})}
                        >
                            <View style={this.state.condition=='new'?styles.activeDot:styles.inactiveDot}>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.each}>
                        <RubikText style={styles.statusText}>Moderately New</RubikText>
                        <TouchableOpacity
                            style={styles.dot}
                            onPress={()=>this.setState({condition:'mod'})}
                        >
                            <View style={this.state.condition=='mod'?styles.activeDot:styles.inactiveDot}>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.each}>
                        <RubikText style={styles.statusText}>old</RubikText>
                        <TouchableOpacity
                            style={styles.dot}
                            onPress={()=>this.setState({condition:'old'})}
                        >
                            <View style={this.state.condition=='old'?styles.activeDot:styles.inactiveDot}>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* end of radio Buttons */}
                {/* <RobotoText style={styles.topText}></RobotoText> */}
                {/* start of form */}
                <View style={[styles.status,{flexDirection:'column'}]}>

                <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Name</RobotoText>
                        <TextInput
                                style={!this.state.name_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='Eze goes to School'
                                placeholderTextColor='#B4B4B4'
                                ref={(input)=>{this.name=input}}
                                onFocus={()=>this.setState({name_focus:true})}
                                onBlur={()=>this.setState({name_focus:false})}
                                onSubmitEditing={()=>this.brand.focus()}
                        />
                    
                    </View>
                    
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Brand</RobotoText>
                        <TextInput
                                style={!this.state.brand_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='Eze goes to School'
                                placeholderTextColor='#B4B4B4'
                                ref={(input)=>{this.brand=input}}
                                onFocus={()=>this.setState({brand_focus:true})}
                                onBlur={()=>this.setState({brand_focus:false})}
                                onSubmitEditing={()=>this.size.focus()}
                        />
                    
                    </View>
                    
                    
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Size</RobotoText>
                        <TextInput
                            style={!this.state.size_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1'
                                placeholderTextColor='#B4B4B4'
                                keyboardType='number-pad'
                                ref={(input)=>{this.size=input}}
                                onFocus={()=>this.setState({size_focus:true})}
                                onBlur={()=>this.setState({size_focus:false})}
                                onSubmitEditing={()=>this.color.focus()}
                                
                        /> 
                    </View>
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Color</RobotoText>
                        <TextInput
                                style={!this.state.color_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='Sky blue'
                                placeholderTextColor='#B4B4B4'
                                ref={(input)=>{this.color=input}}
                                onFocus={()=>this.setState({color_focus:true})}
                                onBlur={()=>this.setState({color_focus:false})}
                                onSubmitEditing={()=>this.cost.focus()}
                        /> 
                    </View>
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Cost price(Optional)</RobotoText>
                        <TextInput

                              style={!this.state.cost_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1500'
                                placeholderTextColor='#B4B4B4'
                                ref={(input)=>{this.cost=input}}
                                onFocus={()=>this.setState({cost_focus:true})}
                                onBlur={()=>this.setState({cost_focus:false})}
                                onSubmitEditing={()=>this.worth.focus()}
                                keyboardType='number-pad'
                        />
                    
                    </View>
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Current worth(optional)</RobotoText>
                        <TextInput
                            style={!this.state.worth_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='100'
                                placeholderTextColor='#B4B4B4'
                                ref={(input)=>{this.worth=input}}
                                onFocus={()=>this.setState({worth_focus:true})}
                                onBlur={()=>this.setState({worth_focus:false})}
                                keyboardType='number-pad'
                        /> 
                    </View>                 
                    


                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Cover Picture</RobotoText>
                        <View style={[styles.formInput]}>
                            <RobotoText style={styles.upload}>Upload Item image</RobotoText>
                        </View>
                    
                    </View>
                </View>
                {/* start of proceed button */}
                <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate("Camera")}
                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>PROCEED</RubikText>
                </TouchableOpacity>
                {/* end of proceed button */}
                </ScrollView>
                </KeyboardAvoidingView>
                {/* end of form */}

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
        marginTop:hp(65),
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
        fontSize:hp(16),
        color:'#00081B',
        fontFamily:'roboto-rg'
    },
    quqantityText:{
        fontSize:hp(12),
        marginVertical:hp(6)
    },
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
        // marginLeft:wp(134)
        fontWeight:'bold'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
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