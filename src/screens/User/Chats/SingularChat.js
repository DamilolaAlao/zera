import React,{Component} from 'react'
import {Text,StyleSheet,View,TextInput,Image,FlatList,Keyboard} from 'react-native'
import {hp,wp} from '../../../styles/onBoarding-styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import SendIcon from '../../../assets/svgs/send.svg'
import BackIcon from '../../../assets/svgs/back.svg'
import {RubikText} from '../../../components/RubikText'

const messages=[
    {text:'hi',time:'12:13',type:'sent'},
    {text:'hello',time:'12:17',type:'received'},
    {text:'how are you',time:'12:20',type:'sent'}, 
      {text:'hello2',time:'12:17',type:'received'},
    {text:'how are you2',time:'12:20',type:'sent'},   
]

export default class SingularChat extends React.Component{
    state={
        inputValue:'',
        messages,
    }
// getTime(){
//   var Date = new Date();
//   var hr =Date.getHours();
//   var min =Date.getMinutes();
//   return `${hr}:${min}`
// }
messageObject(text){ //how to get time in formar hh:mm javascript
//     var Date = new Date();
//     var hr =Date.getHour();
//   var min =Date.getMinute()
  
  this.text=text,
    this.time='12:30',
    this.type="sent"
}
Send(){
  	var newMessage = new this.messageObject(this.state.inputValue)
   var oldMessages =[...this.state.messages];
       oldMessages.push(newMessage);
  this.setState({messages:oldMessages,inputValue:''})
  Keyboard.dismiss()
//   alert('sent')

    // this.setState({inputValue:null})
}

    render(){
       const Details=this.props.navigation.getParam('UserDetails');
        var pic =require('../../../assets/images/dp1.png')
        return(
            <View style={styles.container}>
                {/* start of header  */}
                <View style={styles.header}>
                    <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} >
                        <BackIcon style={styles.backIcon}/>
                    </TouchableOpacity>
                    <View style={styles.picHolder}>
                        <Image 
                            source={Details.img}
                            resizeMode='cover'
                            style={styles.picture}
                        />
                    </View>
                    <View>
                        <RubikText style={styles.name}>{Details.name}</RubikText>
                        <RubikText style={styles.lastSeen}>Active 1m ago</RubikText>
                    </View>


                </View>

                {/* end of header */}
            
            <View style={{width:'100%',flex:1,padding:wp(16),}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        this.state.messages.map((item,index)=>{
                        return(
                            <View style={[styles.messageBox,item.type==='received'?{alignSelf:'flex-start',backgroundColor:'#D6DFE5'}:{alignSelf:'flex-end',backgroundColor:'#000AED'}]}>
                                <RubikText multiline={true} style={[styles.message,{color:item.type==='received'?'#2E414C':'white'}]}>{item.text}</RubikText>
                                <RubikText style={item.type==='received'?styles.receivedTime:styles.sentTime}>{item.time}</RubikText>
                            </View>
                        )
                        })
                    }
              </ScrollView>
                              {/* start of chat Box */}
                <View style={styles.bottomView}>
                    <TextInput
                        multiline={true}
                        numberOfLines={30}
                        value={this.state.inputValue}
                        style={styles.inputBox}
                        onChangeText={(text)=>this.setState({inputValue:text})}
                    />
                    <TouchableOpacity onPress={()=>this.Send()} style={styles.sendButton}>
                        <SendIcon style={styles.sendIcon}/>

                    </TouchableOpacity>
                </View>
                {/* end of chat Box */}
            </View>


                

            </View>
        )
    }
}
const styles=StyleSheet.create({
    receivedTime:{
        fontSize:hp(13),
        lineHeight:hp(19),
        color:'white',
        alignSelf:'flex-end',
        opacity:.5,
        marginRight:wp(8),
        color:'#2E414C'
    },
    sentTime:{
        fontSize:hp(13),
        lineHeight:hp(19),
        color:'white',
        alignSelf:'flex-end',
        opacity:.5,
        marginRight:wp(8),
        // color:''
    },
    message:{
        fontSize:hp(16),
        lineHeight:hp(19),

        color:'white',
        marginHorizontal:wp(13),
        marginVertical:hp(7)
    },
    messageBox:{
        marginTop:hp(12),
        backgroundColor:'#000AED',
        borderRadius:hp(12),
      width :wp(170)
    },
    lastSeen:{
        color:'#00081B',
        opacity:.5,
        fontSize:hp(12),
        lineHeight:hp(14)
    },
    name:{
        fontSize:hp(16),
        lineHeight:hp(19),
        fontWeight:'500',
        color:'#00081B',
        marginBottom:hp(5)
    },
    picture:{
        width:wp(48),
        height:wp(48),
        borderRadius:wp(24),
    },
    picHolder:{
        marginHorizontal:wp(16),
        width:wp(48),
        height:wp(48),
        borderRadius:wp(24),
        alignItems:'center',
        // justifyContent:'center'
    },
    backIcon:{
        width:wp(16),
        height:wp(16)
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        // height:(87/375)*wp(375),
        paddingVertical:hp(10),
        width:'100%',
        paddingHorizontal:wp(16),
        borderBottomWidth:1,
        borderColor:'black'
    },
    sendIcon:{
        height:wp(20),
        width:wp(20)
    },
    sendButton:{
        backgroundColor: '#2E424D',
        width:wp(55),
        height:wp(55),
        borderRadius:wp(30),
        alignItems:'center',
        marginLeft:wp(8),
        justifyContent:'center'
    },
    inputBox:{
       width:wp(284),
       borderRadius:hp(30),
       paddingHorizontal:wp(20),
       lineHeight:hp(30),
       height:(55/284)*wp(284),
       backgroundColor:'white'
    },
    bottomView:{
        // position:'absolute',
        // bottom:hp(10),
        marginHorizontal:wp(16),
        flexDirection:'row',
        alignSelf:'center',
        overflow:'hidden',
        // marginTop:hp(30),
        alignItems:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#F5FBFF'
    },
})