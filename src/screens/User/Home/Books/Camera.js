import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera'
import ImagePicker from 'react-native-image-picker'
import {RobotoText} from '../../../../components/RobotoText'
import {RubikText} from '../../../../components/RubikText'
import GalleryIcon from '../../../../assets/svgs/gallery.svg'

import {hp,wp} from '../../../../styles/SignUp-styles'

export default class Camera extends React.Component{
 
    state={
        successful:true,
        pic:[],
        fileUri: ''
    }

    chooseImage = async () => {
        let options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = response.uri;
            this.setState({pic:this.state.pic.concat(source)})

            // console.log('response', JSON.stringify(response));
            // this.setState({
            //   fileUri: source
            // });
            // let arrray =[];


          }
        });
      }  
      snapPicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
        //   this.setState({fileUri:data.uri})
          this.setState({pic:this.state.pic.concat(data.uri)})
        }
      };
     
    render(){
        return(
            <ScrollView style={styles.container}>
                <RNCamera
                    ref={ref => {this.camera = ref;}}
                    style={styles.image}
                    type={RNCamera.Constants.Type.back}
                    // flashMode={RNCamera.Constants.FlashMode.auto}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                <View style={styles.itemPictures}>
                            {this.state.pic.map((item,index)=>{
                                return(

                                    <Image
                                   
                                    source={{uri:item}}
                                    resizeMode='stretch'
                                    style={styles.picture}
                                />
                                )

                            })
                              }
                          
                    <TouchableOpacity onPress={()=>this.snapPicture()} style={styles.addButton}>
                        <RubikText style={styles.plus}>+</RubikText>
                    </TouchableOpacity>

                </View>
    
                <View style={{marginHorizontal:wp(80),marginTop:hp(20),flexDirection:'row'}}>
                    {/* {
                        this.state.pic.length<1&& */}
                        <TouchableOpacity onPress={this.chooseImage} style={styles.picture}>
                            <GalleryIcon style={styles.galleryIcon}  />
                            <RubikText style={styles.galleryText}>Gallery</RubikText>
                        </TouchableOpacity>
                    {/* } */}
                    {/* <TouchableOpacity onPress={this.chooseImage} style={styles.circle}/> */}
                </View>
                
                {/* start of proceed */}
                { this.state.pic.length>0&&
                <TouchableOpacity 
                    activeOpacity={.7}
                    onPress={()=>this.props.navigation.navigate("DeliveryOptions")}
                    style={styles.proceed}>
                    <RubikText style={{fontSize:hp(14),color:'white'}}>PROCEED</RubikText>
                </TouchableOpacity>
                }
                 {/* end of proceed */}
            </ScrollView>
        )
    }
        
    }


export const styles =StyleSheet.create({
    galleryIcon:{
        width:wp(33),
        height:(26/33)*wp(33),
        borderRadius:hp(5),
        marginVertical:hp(9)
    },
    galleryText:{
        color:"#FE3092",
        fontSize:hp(14),
        
    },
    circle:{
        width:wp(61),
        height:wp(61),
        borderRadius:wp(31),
        alignSelf:"center",
        backgroundColor:'#000AED'
    },
    plus:{
        fontSize:hp(41),
        color:'#000AED',
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
    picture:{
        height:wp(48),
    width:wp(48),
    borderRadius:hp(6),
    marginRight:wp(10),

    },
addButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    height:wp(48),
    width:wp(48),
    borderRadius:hp(6),
    borderColor:'#000AED',
    borderWidth:1,

},
itemPictures:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginHorizontal:wp(12)
},
image:{
    width:wp(375),
    height:wp(375),
    marginBottom:hp(20),
    // alignItems:'center',
    overflow:'hidden'

},
container:{
        flex:1,
        backgroundColor:'white',
        // alignItems:"center"
    },
})
