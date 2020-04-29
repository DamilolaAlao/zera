import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,Alert,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import {Header} from '../../../../components/header'


import {hp,wp} from '../../../../styles/SignUp-styles'

export default class TuitionForm extends React.Component{
    state={
        currentPage:1,
        name_focus:false,
        regNumber_focus:false,
        school_focus:false,
        dept_focus:false,
        level_focus:false,
        fees_focus:false,
        duration_focus:false,
        schoolName_focus:false,
        isloading:false


    }
    renderform=()=>{
        if(this.state.currentPage==1){
            return(
                <View style={[styles.status,{flexDirection:'column'}]}>   
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Name of Student</RobotoText>
                        <TextInput
                            autoFocus={true}
                            style={!this.state.name_focus?styles.formInput:styles.formInputfocused}
                            // placeholder='Eze goes to School'
                            placeholderTextColor='Enter name of student'
                            ref={ (input) => {this.name = input }}
                            onFocus={()=>this.setState({name_focus:true})}
                            onBlur={()=>this.setState({name_focus:false})}
                            onSubmitEditing={()=>this.regNumber.focus()}


                        />
                    
                    </View>
                    
                    
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Registration Number</RobotoText>
                        <TextInput
                            style={!this.state.regNumber_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1'
                            ref={ (input) => {this.regNumber = input }}
                            placeholderTextColor='#B4B4B4'
                            onFocus={()=>this.setState({regNumber_focus:true})}
                            onBlur={()=>this.setState({regNumber_focus:false})}
                            // onSubmitEditing={()=>this.details.focus()}
                        /> 
                    </View>
                    <View>
                        <RobotoText  style={[styles.quqantityText,{
                            color:'black'
                        }]} >Type of school</RobotoText>
                        <View style={styles.formInput}></View>
                    </View>                
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Department</RobotoText>
                        <TextInput
                            style={!this.state.dept_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1'
                            ref={ (input) => {this.department = input }}
                            placeholderTextColor='#B4B4B4'
                            onFocus={()=>this.setState({dept_focus:true})}
                            onBlur={()=>this.setState({dept_focus:false})}
                            onSubmitEditing={()=>this.level.focus()}
                        /> 
                    </View>
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >Level/Class</RobotoText>
                        <TextInput
                            style={!this.state.level_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1'
                            ref={ (input) => {this.level = input }}
                            placeholderTextColor='#B4B4B4'
                            keyboardType='number-pad'
                            onFocus={()=>this.setState({level_focus:true})}
                            onBlur={()=>this.setState({level_focus:false})}
                            onSubmitEditing={()=>this.fees.focus()}
                        /> 
                    </View>
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >School fees</RobotoText>
                        <TextInput
                            style={!this.state.fees_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1'
                            ref={ (input) => {this.fees = input }}
                            placeholderTextColor='#B4B4B4'
                            keyboardType='number-pad'
                            onFocus={()=>this.setState({fees_focus:true})}
                            onBlur={()=>this.setState({fees_focus:false})}
                            onSubmitEditing={()=>this.duration.focus()}
                        /> 
                    </View>

                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >School fees</RobotoText>
                        <TextInput
                            style={!this.state.duration_focus?styles.formInput:styles.formInputfocused}
                                // placeholder='1'
                            ref={ (input) => {this.duration = input }}
                            placeholderTextColor='#B4B4B4'
                            keyboardType='number-pad'
                            onFocus={()=>this.setState({duration_focus:true})}
                            onBlur={()=>this.setState({duration_focus:false})}
                            // onSubmitEditing={()=>this.duration.focus()}
                        /> 
                    </View>

                     {/* start of proceed button */}
                    <TouchableOpacity 
                    onPress={()=>this.setState({currentPage:2})}
                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>PROCEED</RubikText>
                    </TouchableOpacity>
                    {/* end of button */}
                </View>
                // {/* start of proceed button */}
                

            )
        }
    else{
        return(
            <View style={[styles.status,{flexDirection:'column'}]}>  
                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >School Account Name</RobotoText>
                        <TextInput
                            style={!this.state.fees_focus?styles.formInput:styles.formInputfocused}
                            autoFocus={true}
                            placeholderTextColor='#B4B4B4'
                            
                            onFocus={()=>this.setState({schoolName_focus:true})}
                            onBlur={()=>this.setState({schoolName_focus:false})}
                            
                        /> 
                    </View>

                    <View>
                        <RobotoText style={[styles.quqantityText,{
                            color:'black'
                        }]} >School fees</RobotoText>
                        <View style={styles.formInput}>
                        </View> 
                    </View>

                     {/* start of proceed button */}
                    <TouchableOpacity 
                    onPress={()=>this.setState({isloading:true})}
                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>PAY</RubikText>
                    </TouchableOpacity>
            
            </View> 
            )
        }
    }
    render(){
     const    category= this.props.navigation.getParam('category')
     const    subCategory= this.props.navigation.getParam('subCategory')

        if(this.state.isloading){
        return(
            <View style={[styles.container,{alignItems:'center',justifyContent:'center',paddingHorizontal:wp(36)}]}>
                <RubikText style={{fontSize:hp(16),textAlign:'center'}}>
                Will be redirectied to a payment gateway{'\n'} of our choice (paystack, rave etc) to{'\n'} complete the transaction

                </RubikText>


            </View>
        )
        }
        else{
            return(
            < View style={styles.container}>
                {/* start of header  */}
                <Header 
                    title={category.name}
                    navigation={this.props.navigation}
                />
                {/* end of Header */}
                <RobotoText style={styles.topText}>
                {subCategory.title}
                </RobotoText>
        {/* start of Radio butttons */}
                <KeyboardAvoidingView style={{flex:1}} >
                    <ScrollView contentContainerStyle={{paddingBottom:40}} >
                    {this.renderform()}
                    </ScrollView>
                </KeyboardAvoidingView>                  
            </ View>
            )
        }
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
fontWeight:'bold'    },
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