import React, {Component} from 'react'
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
// import SplashScreen from 'react-native-splash-screen'

import AuthNav from './src/navigation/index'

class App extends Component {

  render () {
  
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar   barStyle='light-content' /> */}
        <AuthNav />
      </SafeAreaView>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
})
