import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput, 
  TouchableOpacity
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
      <TouchableOpacity style = {styles.loginButton}>
      <Text style = {styles.loginbuttonTekst}>Login</Text>
      </TouchableOpacity>


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
        color : '#ffffff',
        marginVertical : 7
    },
    loginButton:{
        width : 300,
        backgroundColor : 'rgba(76, 99, 214,0.85)',
        borderRadius : 25,
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    loginbuttonTekst: {
        fontSize : 16,
        fontWeight : '500',
        paddingHorizontal : 16,
        fontSize : 16,
        color : '#ffffff',
        marginVertical : 7
        
    }
})