import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RubikText} from '../../../../components/RubikText'
import {wp,hp} from '../../../../styles/SignUp-styles'
import {GetData} from './dummyData'
import {Countries} from '../../../../components/Countries'
import Mark from '../../../../assets/svgs/mark.svg'
import Search from '../../../../assets/svgs/search.svg'
import Lines from '../../../../assets/svgs/line.svg'




export default class GetPool extends Component{
    state={
        showCountryModal:false,
        showStateModal:false,
        showCityModal:false,
        selectedCountry:'',
        selectedState:'',
        selectedCity:'',
        selectedCountryIndex:null,
        selectedStateIndex:null,

    }
   showModal = () => this.setState({ showCountryModal: true, });
   hideModal = () => {
       this.setState({ showCountryModal: false })
       this.setState({ showStateModal: false })
       this.setState({ showCityModal: false })
   };


  render() {
		
    return (
        <View style={styles.Container} onPress={this.hideModal}>
        <TouchableOpacity onPress={this.hideModal}>
            <RubikText style={styles.get}>Get</RubikText>
            <RubikText style={styles.select}>Select desired item(s)</RubikText>
            {/* start of search box */}
            <View style={styles.searchBox}>
                
                    <Search fill='rgba(0,0,0,.33)' style={styles.searchIcon}/>
                    <TextInput
                    style={styles.input}
                        placeholder='Search'
                        placeholderStyle={styles.placeholder}

                    />
                
                <TouchableOpacity>
                <Lines 
                // fill={this.state.showCityModal||this.state.showCountryModal||this.state.showStateModal?
                //     '#18a0fb':'rgba(0,0,0,.33)'} 
                    style={[styles.lines,{color:this.state.showCityModal ?
                        '#18a0fb':'rgba(0,0,0,.33)'}]}
                />
                </TouchableOpacity>
            </View>
            {/* end of search box */}
        {/* start of country/state/city */}
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:wp(16),marginVertical:hp(12)}}>
                {/* country */}
                <TouchableOpacity 
                    onPress={()=>this.setState({showCountryModal:true})}
                    style={styles.country}
                >
                    { this.state.selectedCountry===''?
                    <RubikText style={{color:this.state.showCountryModal?'#18a0fb':'black'}}>Country</RubikText>
                    :
                    <RubikText style={{color:this.state.showCountryModal?'#18a0fb':'black'}}>{this.state.selectedCountry}</RubikText>

                    }
                    <Image source={require('../../../../assets/images/down2.png')}
                        resizeMode='contain'
                        style={styles.downIcon}
                    />
                </TouchableOpacity>
                {/* end of country */}
                {/* state */}
                <TouchableOpacity 
                    onPress={()=>this.setState({showStateModal:true})}
                    style={styles.country}
                >
                    { this.state.selectedState===''?
                    <RubikText style={{color:this.state.showStateModal?'#18a0fb':'black'}}>State</RubikText>
                    :
                    <RubikText style={{color:this.state.showStateModal?'#18a0fb':'black'}}>{this.state.selectedState}</RubikText>

                    }
                    <Image source={require('../../../../assets/images/down2.png')}
                        resizeMode='contain'
                        style={styles.downIcon}
                    />
                </TouchableOpacity>
                {/* end of state */}
                {/* city */}
                <TouchableOpacity 
                    onPress={()=>this.setState({showCityModal:true})}
                    style={styles.country}
                >
                    { this.state.selectedCity===''?
                    <RubikText style={{color:this.state.showCityModal?'#18a0fb':'black'}}>City</RubikText>
                    :
                    <RubikText style={{color:this.state.showCityModal?'#18a0fb':'black'}}>{this.state.selectedCity}</RubikText>

                    }
                    <Image source={require('../../../../assets/images/down2.png')}
                        resizeMode='contain'
                        style={styles.downIcon}
                    />
                </TouchableOpacity>
                {/* end of city */}
            </View>
        {/* end of country/state/city */}


            {/* start of items Grid list */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.allItemsContainer}>
                        {
                           GetData.map((item,index)=>{
                               return(
                                   <View style={styles.itemContainer} >
                                        <View style={styles.imageContainer}>
                                            <Image resizeMode='cover' style={styles.imageContainer} source={item.img}/>
                                        </View>
                                        <RubikText style={styles.itemName}>{item.name}</RubikText>
                                        <View style={styles.giverDetail}>
                                            <View style={styles.giverImage}>
                                                <Image style={[styles.giverImage]} resizeMode='cover' source={item.giver_pic}/>
                                            </View>
                                            <RubikText style={styles.giverName}>{item.giver_name}</RubikText>
                                        </View>
                                        <TouchableOpacity style={styles.moreButon}>
                                            <RubikText style={styles.moreText}
                                                onPress={() => this.props.navigation.navigate('SgetDetails')}
                                            >See more</RubikText>
                                        </TouchableOpacity>
                                    </View>
                               )
                           })
                        }
                </View>
            </ScrollView>
            {/* end of items grid list */}

            {/* start of contry Modal */}
            {this.state.showCountryModal&&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <TouchableOpacity style={styles.closeModal} onPress={()=>this.setState({showCountryModal:false})} />
                        <RubikText style={styles.label}>Countries</RubikText>
                        <ScrollView>
                            {Countries.map((item,index)=>{
                                return(
                                    <TouchableOpacity 
                                        style={styles.eachCountry} 
                                        key={index} 
                                        onPress={()=> {
                                                this.setState({
                                                    selectedCountry:item.name,selectedCountryIndex:index
                                                });
                                                this.setState({ showCountryModal: false })
                                            }
                                        }>
                                        {
                                            this.state.selectedCountry!==(item.name)?
                                            <View style={styles.notSelected}/>
                                            :
                                            <View style={styles.selected}>
                                                <Mark fill='white' style={styles.mark}/>
                                            </View>
                                        }
                                        <RubikText style={styles.countryText}>{item.name}</RubikText>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>

                    </View>
                </View>
            }
            {/* end of country Modal */}

            {/* start of state Modal */}
            {this.state.showStateModal&&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <TouchableOpacity style={styles.closeModal} onPress={()=>this.setState({showStateModal:false})} />
                        <RubikText style={styles.label}>States</RubikText>
                        { this.state.selectedCountryIndex===null?
                            null
                            :
                            <ScrollView>
                                {
                                    Countries[this.state.selectedCountryIndex].states.map((item,index)=>{
                                        return(
                                            <TouchableOpacity 
                                            style={styles.eachCountry} 
                                            key={index} 
                                            onPress={()=> {
                                                this.setState({
                                                    selectedState:item.name,selectedStateIndex:index
                                                });
                                                this.setState({ showStateModal: false })
                                            }
                                        }>
                                            {
                                                this.state.selectedState!==(item.name)?
                                                <View style={styles.notSelected}/>
                                                :
                                                <View style={styles.selected}>
                                                    <Mark fill='white' style={styles.mark}/>
                                                </View>
                                            }
                                            <RubikText style={styles.countryText}>{item.name}</RubikText>
                                        </TouchableOpacity>

                                        )
                                    })
                                }
                            </ScrollView>
                        }
                    </View>
                </View>
            }
            {/* end of state Modal */}

            {/* start of city Modal */}
            {this.state.showCityModal&&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <TouchableOpacity style={styles.closeModal} onPress={()=>this.setState({showCityModal:false})} />
                        <RubikText style={styles.label}>Cities</RubikText>
                        {this.state.selectedStateIndex===null?null:
                            <ScrollView>
                            {
                                    Countries[this.state.selectedCountryIndex].states[this.state.selectedStateIndex].locals.map((item,index)=>{
                                        return(
                                            <TouchableOpacity 
                                            style={styles.eachCountry} 
                                            key={index} 
                                            onPress={()=> {
                                                this.setState({
                                                    selectedCity:item.name,
                                                });
                                                this.setState({ showCityModal: false })
                                            }
                                        }>
                                            {
                                                this.state.selectedCity!==(item.name)?
                                                <View style={styles.notSelected}/>
                                                :
                                                <View style={styles.selected}>
                                                    <Mark fill='white' style={styles.mark}/>
                                                </View>
                                            }
                                            <RubikText style={styles.countryText}>{item.name}</RubikText>
                                        </TouchableOpacity>

                                        )
                                    })
                                }
                            </ScrollView>
                        }
                    </View>
                </View>
            }
            {/* end of city Modal */}
            </TouchableOpacity>
        </View>
		   
    );
  }
}

const Items =(props)=>{
  const {name,img,giver_pic,giver_name} = props.itemDetails
     return(
        <View style={styles.itemContainer} >
            <View style={styles.imageContainer}>
                <Image resizeMode='cover' style={styles.imageContainer} source={img}/>
            </View>
            <RubikText style={styles.itemName}>{name}</RubikText>
            <View style={styles.giverDetail}>
                <View style={styles.giverImage}>
                    <Image style={[styles.giverImage]} resizeMode='cover' source={giver_pic}/>
                </View>
                <RubikText style={styles.giverName}>{giver_name}</RubikText>
            </View>
            <TouchableOpacity style={styles.moreButon}>
                <RubikText style={styles.moreText}
                    onPress={() => props.navigation.navigate('GetDetails')}
                >See more</RubikText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    lines:{
        width:wp(18),
        height:(12/18)*wp(18)
    },
    mark:{
        width:wp(8),
        height:(6/8)*wp(8)
    },
    selected:{
        width:wp(16),
        height:wp(16),
        borderRadius:wp(8),
        backgroundColor:'#000AED',
        alignItems:'center',
        justifyContent:'center'
    },
    notSelected:{
        width:wp(16),
        height:wp(16),
        borderRadius:wp(8),
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.2)',
    },
    countryText:{
        fontSize:hp(14),
        marginLeft:wp(16),
        lineHeight:hp(17),
        color:'rgb(0,0,0)',

    },
    eachCountry:{
        flexDirection:'row',
        paddingVertical:hp(16),
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,.1)',
        width:wp(343)
    },
    label:{
        fontSize:hp(14),
        fontWeight:'500',
        lineHeight:hp(17),
        color:'rgba(0,0,0,.6)',
        marginVertical:hp(27)
    },
    closeModal:{
        width:wp(32),
        height:(8/32)*wp(32),
        borderRadius:hp(4),
        backgroundColor:"#C4C4C4",
        alignSelf:"center"
    },
    modalBody:{
        backgroundColor:'white',
        borderTopLeftRadius:hp(24),
        borderTopRightRadius:hp(24),
        position:'absolute',
        top:hp(300),
        bottom:0,
        left:0,
        right:0,
        padding:wp(16)
    },
    downIcon:{
        marginLeft:wp(6),
        width:wp(16),
        height:(10/16)*wp(16)
    },
    modalContainer:{
        backgroundColor:'rgba(0,0,0,.5)',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    country:{
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center'
    },
    moreButon:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000AED',
        width:wp(131),
        height:(24/131)*wp(131),
        borderRadius:hp(5)
    },
    moreText:{
        fontWeight:'bold',
        color:'white',
        fontSize:hp(12)
    },
    giverName:{
        fontSize:hp(13),
        color:'rgba(0,0,0,.5)',
        marginLeft:wp(8)
    },
    giverImage:{
        width:wp(19),
        height:wp(19),
        borderRadius:wp(12)
    },
    giverDetail:{
        flexDirection:'row',
        marginBottom:hp(15),
        alignItems:'center',
        marginTop:hp(5)
    },
    itemName:{
        fontSize:hp(14),
        color:'black'
    },
    imageContainer:{
        width:wp(131),
        height:(116/131)*wp(131),
        borderRadius:hp(5),
        marginBottom:hp(12)
    },

    itemContainer:{
        paddingVertical:hp(16),
        paddingHorizontal:wp(16),
        width:wp(163),
        height:(242/163)*wp(163),
        borderRadius:hp(6),
        marginBottom:hp(13),
        backgroundColor:"white",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 2,
        elevation: 1
    },
    allItemsContainer:{
        flexWrap:'wrap',
        width:wp(375),
        flexDirection:'row',
        paddingHorizontal:wp(16),
        justifyContent:'space-between',
        paddingBottom:hp(50)
    },
    scrollContainer:{
        backgroundColor:"lightgrey",
        marginTop:hp(15),
        paddingTop:hp(15),
        width:wp(375)
    },
    input:{
        width:wp(270),
        fontFamily:'rubik-md',
        // color:''
        fontSize:hp(16)
    },
    searchIcon:{
        width:wp(19.66),
        height:wp(19.66)
    },
    searchBox:{
        alignSelf:'center',
        width:wp(344),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:(40/344)*wp(344),
        paddingHorizontal:wp(19),
        backgroundColor:"#C4C4C4",
        borderRadius:hp(6)
    },
    select:{
        alignSelf:'center',
        fontSize:hp(20),
        color:'#000000',
        marginBottom:hp(17),
    },
    get:{
        fontWeight:"bold",
        fontSize:hp(16),
        lineHeight:hp(19),
        color:'black',
        marginBottom:hp(40),
        alignSelf:'center'
    },
Container:{
  flex:1,
  paddingTop:hp(15),
  backgroundColor:'white',
//   paddingBottom:hp(52)
},


});