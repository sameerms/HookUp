import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default class Form extends Component<{}> {
    render() {
        return(
  <View style = {styles.container}>
      <TextInput style = {styles.inputBox} 
      underlineColorAndroid = 'rgba(255,255,255,1)'
      placeholder = 'Epost'
      placeholderTextColor = '#ffffff'/>
      <TextInput style = {styles.inputBox} 
      underlineColorAndroid = 'rgba(255,255,255,1)'
      placeholder = 'Passord'
      placeholderTextColor = '#ffffff'/>
    </View>
        )
    }
}
const styles = StyleSheet.create({
    Container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    inputBox : {
        width : 300,
        backgroundColor : 'rgba(5, 25, 25,0.8)',
        borderRadius : 25,
        paddingHorizontal : 16,
        fontSize : 16,
        color : '#ffffff'

    }
})