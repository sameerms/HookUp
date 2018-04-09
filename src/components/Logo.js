import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return(
  <View style={styles.logotekstContainer}>
     <Image style={{width:100 , height:100}}
     source={require('../images/logo.png')}/>
     <Text style={styles.logoteksten}> Velkommen til erem </Text>
    </View>
        )
    }
}
const styles = StyleSheet.create({
    logotekstContainer : {
         justifyContent : 'center',
         alignItems : 'center'
    },
    logoteksten : {
        backgroundColor : '#76ffff',
        fontSize : 30,
        color : 'rgba(255,255,255,0.8)',
        justifyContent : 'center',
         alignItems : 'center'
    }
})