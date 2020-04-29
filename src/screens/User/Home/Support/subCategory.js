import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import {Header} from '../../../../components/header'


import {hp,wp} from '../../../../styles/SignUp-styles'

export default class SupportSubCategory extends React.Component{
 categories = this.props.navigation.getParam('category');

Goto=(category)=>{
    if(category.title==='School Fees / Tuition Support'){
        return this.props.navigation.navigate('TuitionForm',{category:this.categories,subCategory:category})
    }
  else  if(category.title==='Health Support'){
        return this.props.navigation.navigate('HealthForm',{category:this.categories,subCategory:category})
    }
    else  if(category.title==='Business Support'){
        return this.props.navigation.navigate('BusinessForm',{category:this.categories,subCategory:category})
    }

}
    
    
    render(){
        const  category = this.props.navigation.getParam('category');

        return(
            <View style={styles.container}>
                {/* start of header  */}
                <Header 
                    title={category.name}
                    navigation={this.props.navigation}
                />
                {/* end of Header */}
        <RobotoText style={styles.topText}>subcategories</RobotoText>

                <View style={styles.search}>
                    <Image style={styles.searchIcon} resizeMode='contain'
                            source={require('../../../../assets/images/search.png')}
                        />
                    <TextInput style={styles.searchInput} />

                </View>
                <View style={styles.optionView}>
                <ScrollView contentContainerStyle={{paddingBottom:hp(60)}}>
                    {
                        category.category.map((item,index)=>{
                       
                        return(
                            <TouchableOpacity
                            key={index}
                            onPress={()=>this.Goto(item)}  
                              style={styles.options}
                            >
                        <RubikText style={styles.actionText}>{item.title}</RubikText>
                        <Image style={styles.icon} resizeMode='contain'
                            source={require('../../../../assets/images/rightarrow.png')}
                        />

                         </TouchableOpacity>
                      
                            )
                        })
                    }
                    </ScrollView>
                </View>

            </View>
        )
    }
}
export const styles =StyleSheet.create({
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
    optionView:{
        backgroundColor:"#f4f4f4",
        flex:1,
        marginTop:hp(20),
        alignItems:"center"
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