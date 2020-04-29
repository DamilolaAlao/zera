import React from 'react'
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native'
import {RobotoText} from '../../components/RobotoText'
import {RubikText} from '../../components/RubikText'
import Company from '../../components/Organisation'

import {styles, wp, hp} from '../../styles/SignUp-styles'
import {BarIndicator} from 'react-native-indicators'
// import Loading from  './Loading.js'

export default class CorpSignUp extends React.Component {
  state = {
    companyDropdown: false,
    showCompanyModal: false,
    ngoDropdown: false,
    govdropDown: false,
    embassyDropdown: false,
    corporatedropDown: false,
    isLoading: false,
  }
  openDropDown = company => {
    switch (company) {
      case 'NGOs':
        return this.setState({ngoDropdown: !this.state.ngoDropdown})
        break
      case 'Development Financial Institutions':
        return this.setState({ngoDropdown: !this.state.ngoDropdown})
        break

      case 'Government Organization':
        return this.setState({govdropDown: !this.state.govdropDown})
        break

      case 'Embassies':
        return this.setState({embassyDropdown: !this.state.embassyDropdown})
        break
      case 'Corporate Organization':
        return this.setState({corporatedropDown: !this.state.corporatedropDown})
        break

      case 'Humanitarian Aid':
        return '#25AD25'
        break

      default:
        break
    }
  }
  SignUp = () => {
    this.setState({isLoading: true})
    this.props.navigation.navigate('BottomTab')
  }
  render () {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color='#000AED' size={30} />
          <RubikText
            style={{color: '#000AED', fontSize: hp(16), marginTop: hp(35)}}>
            Signing up...
          </RubikText>
        </View>
      )
    } else {
      return (
        <View style={[styles.container, {alignItems: null}]}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode='contain'
                style={styles.topImage}
                source={require('../../assets/images/signup.png')}
              />
              <RobotoText style={[styles.signUpText, {fontSize: hp(20)}]}>
                Create Corporate Profile
              </RobotoText>
            </View>

            <View
              style={[styles.corpOptionBox, {alignSelf: 'center', flex: 1}]}>
              <View>
                <RobotoText style={[styles.InputTag, {marginTop: 0}]}>
                  Type of Corporate Organization
                </RobotoText>
                <View style={[styles.corpFormBox, {justifyContent: 'center'}]}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onPress={() =>
                      this.setState({
                        showCompanyModal: !this.state.showCompanyModal,
                      })
                    }>
                    <RobotoText style={styles.searchText}>Search</RobotoText>
                    <Image
                      style={styles.dropdown}
                      resizeMode='contain'
                      source={require('../../assets/images/dropdown.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <RobotoText style={styles.InputTag}>Company Name</RobotoText>
                <TextInput
                  style={styles.corpFormBox}
                  placeholder='Enter RC Number'
                  placeholderTextColor='grey'
                />
              </View>
              <View>
                <RobotoText style={styles.InputTag}>Location</RobotoText>
                <TextInput
                  style={styles.corpFormBox}
                  placeholder='Enter RC Number'
                  placeholderTextColor='grey'
                />
              </View>
              <View>
                <RobotoText style={styles.InputTag}>RC Number</RobotoText>
                <TextInput
                  style={styles.corpFormBox}
                  placeholder='Enter RC Number'
                  placeholderTextColor='grey'
                />
              </View>
              <View>
                <RobotoText style={styles.InputTag}>
                  {' '}
                  Upload Registration Document (Optional)
                </RobotoText>
                <View style={styles.corpFormBox}></View>
              </View>
              <TouchableOpacity
                onPress={() => this.SignUp()}
                style={[
                  styles.signupButton,
                  {marginVertical: hp(30), paddingVertical: hp(6)},
                ]}>
                <Text style={{color: '#fff', fontFamily: 'rubik-md'}}>
                  SIGN UP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <RubikText style={{color: '#000', fontSize: hp(14)}}>
                  Already have an account ?
                  <RubikText
                    onPress={() => this.props.navigation.navigate('SignIn')}
                    style={{color: '#57E8FF'}}>
                    {' '}
                    Sign in
                  </RubikText>
                </RubikText>
              </TouchableOpacity>
              {this.state.showCompanyModal && (
                <View style={styles.modalContainer}>
                  <View style={styles.companyModal}>
                    <ScrollView>
                      <View>
                        {Company.map((item, index) => {
                          return (
                            <View>
                              <View>
                                <CompanyDropdown
                                  item={item}
                                  openDropDown={this.openDropDown}
                                />
                              </View>
                              {this.state.ngoDropdown && (
                                <Text>{item.company.name}</Text>
                              )}
                              {this.state.ngoDropdown && (
                                <Text>{item.company.name}</Text>
                              )}
                            </View>
                          )
                        })}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      )
    }
  }
}
const CompanyDropdown = props => {
  const {item} = props
  const {company} = item

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.openDropDown(company.name)}
        style={{
          flexDirection: 'row',
          paddingBottom: hp(16),
          justifyContent: 'space-between',
        }}>
        <RubikText style={{fontSize: hp(16)}}>{company.name}</RubikText>

        {company.types.length > 0 && (
          <Image
            style={styles.dropdown}
            resizeMode='contain'
            source={require('../../assets/images/dropdown.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}
