/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';


import Routes from './src/Routes' ;
import Registrer from './src/pages/Registrer';
import Login from './src/pages/Login'   ;


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar
      backgroundColor='#006064'
      barStyle="light-content"
        />
        <Login/>
        </View>
    );
  }
}
const styles = StyleSheet.create( {
  container : {
    backgroundColor : '#00363a',
    flex : 1,
    alignItems : 'center',
    justifyContent :'center',
    
  }
})


