import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'

import {hp,wp} from '../../../../styles/SignUp-styles'
import {Header} from '../../../../components/header'

export default class FashionCategory extends React.Component{  
    
    render(){
        const  Categories = this.props.navigation.getParam('category');
        const {id,category,name}= Categories;
        // const {options} = category.options;

        return(
            <View style={styles.container}>
                {/* start of header  */}
                <Header 
                    title='Fashion & Wears'
                    navigation={this.props.navigation}
                />
                {/* end of Header */}
                <RobotoText style={styles.topText}>
                    {
                        Categories.name==='Books'?'What kind of Transaction?':'Sub Category'
                    }
                </RobotoText>
                {/* start of subCategory */}
                <View style={{alignItems:"center",marginTop:hp(10),backgroundColor:'#f2f2f2'}}>
                    {
                        category.map((item,index)=>{
                            return(
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("FashionSubCategory",{Categories:Categories,index:index})
                                    }
                            key={index}
                            activeOpacity={.8}
                            style={styles.actionButton}

                        >
                            <Image style={styles.icon} resizeMode='contain'
                            source={item.img}
                            />
                            <RubikText style={styles.actionText}>{item.name}</RubikText>

                        </TouchableOpacity>
                            )
                        })
                    }
                    
                    {/* <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("SubCategory")}
                        activeOpacity={.8}
                        style={styles.actionButton}
                        >
                        <Image style={styles.icon} resizeMode='contain'
                            source={require('../../../../assets/images/multiple.png')}
                        />
                        
                        <RubikText style={styles.actionText}>Multiple</RubikText>

                    </TouchableOpacity> */}
                    
                </View>
                {/* end of subCategory */}

            </View>
        )
    }
}
export const styles =StyleSheet.create({
    headerText:{
        fontSize:hp(16),
        fontWeight:"bold"
        // marginLeft:wp(134)
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:wp(10),
        marginVertical:hp(10),
        justifyContent:"space-between"
    },
    backIcon:{
        width:wp(16),
        height:wp(16),
    },
    topText:{
        fontSize:hp(22),
        marginVertical:hp(42),
        alignSelf:'center'
        
    },
    icon:{
        width:wp(24),
        height:wp(24)
    },
    actionText:{
        marginLeft:wp(24),
        fontSize:hp(18),
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