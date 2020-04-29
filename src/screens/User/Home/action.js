import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../components/RobotoText'
import {RubikText} from '../../../components/RubikText'
import {Header} from '../../../components/header'


import {hp,wp} from '../../../styles/SignUp-styles'

export default class Action extends React.Component{
    navigation=(Categories)=>{
        if (Categories.name==='Books'){
            this.props.navigation.navigate("BooksCategory",{category:Categories})
        }
        else if(Categories.name==='Fashions & Wears'){
            this.props.navigation.navigate("FashionCategory",{category:Categories})

        }
        else if(Categories.name==='Kids'){
            this.props.navigation.navigate("KidsSubCategory",{category:Categories})

        }
        else if(Categories.name==='Electronics'){
            this.props.navigation.navigate("ElectronicsSubCategory",{category:Categories})

        }
        else if(Categories.name==='Home Appliances'){
            this.props.navigation.navigate("AppliancesSubCategory",{category:Categories})

        }
        else if(Categories.name==='Support/Sponsor'){
            this.props.navigation.navigate("SupportSubCategory",{category:Categories})

        }
        else if(Categories.name==='Food'){
            this.props.navigation.navigate("FoodSubCategory",{category:Categories})

        }
        
    }


    render(){
   const  Categories = this.props.navigation.getParam('category');
//    const {id,image,options}= Categories;
    
        return(
            <View style={styles.container}>
                <Header 
                    title={<RobotoText style={styles.headerText}>What do you want to do?</RobotoText>}
                    navigation={this.props.navigation}
                />
                <View style={{alignItems:"center",marginTop:hp(30)}}>
                    <TouchableOpacity 
                    onPress={()=>this.navigation(Categories)}
                        activeOpacity={.3}
                        style={styles.actionButton}
                        >
                        <RubikText style={styles.actinText}>GIVE</RubikText>

                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("GetItems")}
                        activeOpacity={.8}
                        style={styles.actionButton}
                        >
                        <RubikText style={styles.actinText}>GET</RubikText>

                    </TouchableOpacity>
                  { Categories.name!=='Support/Sponsor'&&  <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("SwapForm")}
                        activeOpacity={.8}
                        style={styles.actionButton}
                        >
                        <RubikText style={styles.actinText}>SWAP</RubikText>

                    </TouchableOpacity>
                    }
                </View>

            </View>
        )
    }
}
export const styles =StyleSheet.create({
    headerText:{
        alignSelf:'center',
        fontSize:hp(20),
        // fontWeight:""
        marginLeft:wp(46)
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:wp(16),
        marginVertical:hp(10),
        alignItems:'center'
    },
    backIcon:{
        width:wp(16),
        height:wp(16),
    },
    actinText:{
        color:'#000AED',
        fontSize:hp(18),
        fontWeight:'500'
    },
    actionButton:{
        marginVertical:hp(20),
        width:wp(345),
        height:(50/345)*wp(345),
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp(8),
        borderColor:"#000AED",
        borderWidth:1
    },
    container:{
        flex:1,
        backgroundColor:'white'
    },
})