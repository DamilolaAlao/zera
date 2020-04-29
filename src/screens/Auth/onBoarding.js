import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackIcon from '../../assets/svgs/back1.svg';
import {NirmalaText} from '../../components/NirmalaText';
import {styles, wp} from '../../styles/onBoarding-styles';

class OnBoarding extends React.Component {
  state = {
    position: 0,
  };
  backPressed = position => {
    if (position === 1) {
      this.setState ({position: 0});
    } else if (position == 2) {
      this.setState ({position: 1});
    }
  };
  getPosition = event => {
    position = event.nativeEvent.contentOffset.x;
    if (position < 320) {
      this.setState ({position: 0});
    } else if (position > 320 && position < 690) {
      this.setState ({position: 1});
    } else if (position > 690) {
      this.setState ({position: 2});
    }
  };
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.skipContainer}>
          <View>
            {this.state.position !== 0 &&
              <TouchableOpacity
              // onPress={()=>this.backPressed(this.state.position)}
              >
                <BackIcon fill="black" style={styles.backIcon} />
              </TouchableOpacity>}
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('SignUp')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Image
          resizeMode="contain"
          style={styles.topImage}
          source={require ('../../assets/images/signup.png')}
        />
        <View style={styles.body}>
          <ScrollView
            style={{width: wp (375)}}
            pagingEnabled={true}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            showsHorizontalScrollIndicator={false}
            onScroll={event => this.getPosition (event)} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
            scrollEventThrottle={16}
          >
            {/* ----Page 1------*/}
            <View style={styles.onBoardContainer}>
              <Image
                resizeMode="contain"
                style={styles.onBoardImage}
                source={require ('../../assets/images/onboarding1.png')}
              />

              <NirmalaText style={styles.subtitleText}>
                Welcome to ZERA, a platform where {'\n'} you give, get or swap
                items.{'\n'}

              </NirmalaText>
            </View>
            {/* --------End of page 1------- */}

            {/* -------Page 2-------- */}
            <View style={styles.onBoardContainer}>
              <Image
                resizeMode="contain"
                style={styles.onBoardImage}
                source={require ('../../assets/images/onboarding2.png')}
              />
              <NirmalaText style={styles.subtitleText}>
                At ZERA, items like Books, Food, Clothes,{'\n'} Shoes, Phones
                etc can be donated,{'\n'} received or swapped.
              </NirmalaText>
            </View>
            {/* |-----end of page 2----- */}

            {/* --------Page 3-------- */}
            <View style={styles.onBoardContainer}>
              <Image
                resizeMode="contain"
                style={styles.onBoardImage}
                source={require ('../../assets/images/onboarding3.png')}
              />

              <NirmalaText style={styles.subtitleText}>
                All items are Free on this platform. No money {'\n'} can be
                charged. Items once pledged/released {'\n'} cannot be retrieved.
              </NirmalaText>
            </View>
            {/* -----End of page 3------ */}
          </ScrollView>
          <TouchableOpacity
            style={styles.get}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate ('SignUp')}
          >
            <Text style={{color: '#fff', fontFamily: 'rubik-md'}}>
              GET STARTED
            </Text>
          </TouchableOpacity>

          {/* indicators */}
          <View style={styles.indicatorContainer}>
            {[1, 2, 3].map ((_, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    {
                      backgroundColor: this.state.position === i
                        ? '#000'
                        : 'lightgrey',
                    },
                  ]}
                />
              );
            })}
          </View>
          {/* -----End of Indicators---- */}
        </View>
      </View>
    );
  }
}
// const mapStateToProps = (state) =>{
//     return state
//   }

export default OnBoarding;
