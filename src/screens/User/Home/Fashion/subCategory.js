import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import Search from '../../../../assets/svgs/search.svg'
import {Header} from '../../../../components/header'


import {hp,wp} from '../../../../styles/SignUp-styles'

export default class FashionSubCategory extends React.Component{
    state={
        options:[]
    }
    
    
    render(){
        const  Categories = this.props.navigation.getParam('Categories');
        const  index = this.props.navigation.getParam('index');

        const  {category} =Categories
        // const {options} =Categories;
        // const {options} =[category.options];

        return(
            <View style={styles.container}>
                {/* start of header  */}
                <Header 
                    title='Fashion & Wears'
                    navigation={this.props.navigation}
                />
                {/* end of Header */}
        <RobotoText style={styles.topText}>{category[index].name}</RobotoText>

                <View style={styles.search}>
                    <Search fill='rgba(0,0,0,.33)' style={styles.searchIcon}/>

                    <TextInput style={styles.searchInput} />

                </View>
                <View style={styles.optionView}>
                    {
                        category[index].subcategories.map((item,index)=>{
                            // this.setState({options:item})
                        return(
                            <TouchableOpacity
                            key={index}
                            onPress={()=>this.props.navigation.navigate('FashionOptions',{options:item})}  
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
                </View>

            </View>
        )
    }
}
const CategoryItem =(props)=>{
    const {options} = props
      return(
        <TouchableOpacity style={styles.options}>
        <RubikText style={styles.actionText}>{options.name}</RubikText>
        <Image style={styles.icon} resizeMode='contain'
            source={require('../../../../assets/images/rightarrow.png')}
        />

    </TouchableOpacity>
      
      )
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