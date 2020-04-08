import {StyleSheet} from 'react-native'
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'

export const hp = num => {
  return heightPercentageToDP((num / 812) * 100)
}

export const wp = num => {
  return widthPercentageToDP((num / 375) * 100)
}

export const styles = StyleSheet.create({
  backIcon: {
    height: (18.56 / 12.15) * wp(12.15),
    width: wp(12.15),
    alignSelf: 'center',
  },
  get: {
    backgroundColor: '#000AED',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(331),
    height:(50/331)*wp(331),
    paddingVertical: hp(12),
    marginHorizontal: wp(12),
    marginBottom:hp(90),
    borderRadius: wp(7),
    marginBottom: hp(30),
  },
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(12),
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dot: {
    height: wp(8),
    width: wp(8),
    backgroundColor: 'black',
    margin: wp(4),
    borderRadius: wp(4),
  },
  swiperContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  onBoardImage: {
    width: wp(350),
    height: (262 / 350) * wp(350),
    alignSelf: 'center',
  },
  submitText: {
    fontWeight: '400',
    color: '#fff',
  },
  indicatorContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageTextContainer: {
    marginBottom: hp(30),
    width: wp(375),
  },
  onBoardContainer: {
    width: wp(375),
    alignItems: 'center',

    justifyContent: 'center',
  },

  nextText: {
    fontWeight: '400',
    color: 'orange',
    fontSize: hp(17),
  },

  subtitleText: {
    fontFamily: 'nirmala-rg',
    fontSize: hp(17),
    textAlign: 'center',
    marginTop: hp(30),
  },
  skipText: {
    fontFamily: 'segoe-rg',
    color: '#FF0066',
    fontSize: hp(15),
  },
  topImage:{
    width:wp(74),
    height:(90/74)* wp(74),
    marginTop:hp(5),
},
  skipContainer: {
    flexDirection: 'row',
    width: wp(375) * 0.95,

    marginTop: hp(7),
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

export default styles
