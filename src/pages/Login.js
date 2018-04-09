import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo'

export default class Login extends Component<{}> {
    render() {
        return(
            <View style={styles.bigblue}> 
       <StatusBar
      backgroundColor="#76ffff"
      barStyle="light-content"
        />
      <Logo/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    bigblue: {
        backgroundColor: '#76ffff',
        flex : 1,
        alignItems : 'center',
        justifyContent :'center',

    }
  });
