import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import {RubikText} from '../../../components/RubikText'
import {wp,hp} from '../../../styles/SignUp-styles'
import {Categories} from '../../../components/NEW'
import NavIcon from '../../../assets/svgs/navIcon.svg'


BgColor=(name)=>{
  switch (name) {
    case 'Others':
      return '#000AED'
      break;
    case 'Books':
        return '#000AED'
        break;  
    case 'Home Appliances':
      return '#57E8FF'
      break;
    case 'Food':
        return '#57E8FF'
        break;     
    case 'Fashions & Wears':
      return '#FF0066'
      break;
    case 'Electronics':
        return '#FF0066'
        break; 
    case 'Kids':
        return '#EDED3E'
        break;
    case 'Support/Sponsor':
        return '#EDED3E'
        break;  
    default:
      break;
  }
}

export default class Home extends Component{
  state={
    profile_complete:true
  }


  render() {
		
    return (
		   <View style={styles.Container}>
		      <View style={styles.topView}>
              <TouchableOpacity 

                onPress={()=>this.props.navigation.openDrawer()}
              >
                  <NavIcon style={styles.navIcon} />
		          </TouchableOpacity>
		          <RubikText style={styles.title}>Home</RubikText>
              <View></View>
          </View>
          <View style={styles.chooseView}>
            <RubikText style={styles.choose}>Choose category</RubikText>
            {/* <View style={styles.num}>
              <RubikText style={{fontSize:hp(14),color:'#fe3b98'}}>6</RubikText>
            </View> */}
          </View>

          {/* start of categories */}
          <ScrollView >
            <Image 
              resizeMode='contain' style={styles.topImage}
              source={require('../../../assets/images/signup.png')}
            />
            <View style={styles.category}>
            {
              Categories.map((item,index)=>{
                return(
                  <CategoryItem
                    key={index}
                    category={item}
                    navigation={this.props.navigation}
                    BgColor={()=>this.BgColor()}
                  />
                )
              })
            }
            </View>
          </ScrollView> 
          {/* end of categories */}
       {/* start of Incomplete Profile Modal */}
       {
                this.state.profile_complete===false &&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                      <RubikText style={styles.profileText}>Your profile is not complete.You can only carry out transactions with a complete profile.</RubikText>
                      <TouchableOpacity style={styles.updateProile}>
                        <RubikText style={styles.complete}>COMPLETE PROFILE</RubikText>
                      </TouchableOpacity>
                    </View>
                </View>
            }
          {/* end of incomplete Profile */}

        </View>
		   
    );
  }
}

const CategoryItem =(props)=>{
  const {name,img,item_count} = props.category
     return(
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.cardBody}
      onPress={()=>props.navigation.navigate('Action',{category:props.category})}
    >
      <View style={[styles.imageContainer,{backgroundColor:BgColor(name)}]}><Image source={img} resizeMode='contain' style={styles.cardImage} /></View>
      <View style={styles.detailsContainer}>
        <RubikText numberOfLines={2} style={styles.itemName}>{name}</RubikText>
        <RubikText numberOfLines={2} style={styles.itemCount}>{item_count} items</RubikText>

      </View>

      
  
    </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
  topImage:{
    width:wp(74),
    height:(90/74)* wp(74),
    marginTop:hp(5),
    
    alignSelf:"center"
},
  itemCount:{
    color:'#A9A9A9',
    fontSize:hp(14),
    fontWeight:"normal"
  },
  detailsContainer:{
    paddingBottom:hp(17),
    paddingTop:hp(12),
    paddingLeft:wp(17)
  },
  imageContainer:{
    height:wp(75),
    width:wp(75),
    borderRadius:hp(8),
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  },
  complete:{fontSize:hp(14),fontWeight:'500',color:'#000AED',lineHeight:hp(17)},
  updateProile:{
    marginTop:hp(80),
    paddingHorizontal:wp(89),
    paddingVertical:hp(14),
    alignItems:'center',
    borderRadius:hp(8),
    borderColor: '#000AED',
    borderWidth:1
  },
  profileText:{
    fontSize:hp(16),
    textAlign:"center",
    lineHeight:hp(19)
  },
  modalBody:{
    position:"absolute",
    bottom:hp(18),
    left:hp(12),
    right:hp(12),
    backgroundColor:"white",
    borderRadius:hp(22),
    height:(210/351)*wp(351),
    paddingHorizontal:wp(20),
    paddingVertical:hp(45)
    // paddingVertical:hp(30)
},
modalContainer:{
    position:'absolute',
    flex:1,
    backgroundColor:'rgba(0,0,0,.5)',
    top:0,
    bottom:0,
    left:0,
    right:0
},
  itemName:{
    fontWeight:'bold',
    fontSize:hp(16),
    marginBottom:hp(20),
    color:'rgba(0, 10, 237, 0.7)'    

  },
  cardImage:{
    width:wp(50),
    height:wp(50)
  },
  cardBody:{
    width: wp(343),
    backgroundColor: '#fff',
    height:(75/343)*wp(343),
    flexDirection:"row",
    // alignItems:'center',
    marginVertical:hp(10),
    // justifyContent:'center',
    borderRadius:hp(8)
    
  },
  category: {
    backgroundColor: '#f7f7f7',
    paddingVertical:hp(12),
    paddingHorizontal:wp(12),
    width:'100%',
    flex: 1,
    // alignItems: 'flex-start',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    marginTop:hp(25)
    // alignContent: 'flex-start'
  },
  num:{
    width:wp(37),
    height:(16/37)*wp(37),
    backgroundColor:'#ffe6f2',
    alignItems:'center',
    borderRadius:hp(8),
    justifyContent:'center'
  },
  chooseView:{
    flexDirection:"row",
    marginLeft:wp(12),
    // marginBottom:hp(10)
  },
  choose:{
    fontSize:hp(16),
    marginRight:wp(10),
  },


Container:{
  flex:1,
  paddingTop:hp(12),
  backgroundColor:'white'
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

});