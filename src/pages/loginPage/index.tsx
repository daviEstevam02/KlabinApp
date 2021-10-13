import * as React from 'react';
import {Text, View,StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from '../../components/Header'

import { Actions } from 'react-native-router-flux'

export function LoginPage() {

  const onHandlePress = () =>{
    Actions.InitialPage()
  }


  return (
    <View style={styles.container}>
      <View style={ styles.forms }>
        <Text style={styles.headerText}>
          Digite seu email { '\n' } corporativo:
        </Text>
        <TextInput 
          style={ styles.input }
          placeholder= "Digite seu email"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={ onHandlePress }>
        <Text style={ styles.buttonText }>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      width: '100%',
      minWidth: 300,
      alignItems: 'center',
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
  },
  forms:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height: 100
  },
  logoImg:{
    width: 200,
    height: 200,
    marginTop:40,
  },
  headerText:{
    fontSize: 30,
    fontWeight:'bold',
    textAlign:'center',
    color: '#52665A',
    marginTop: -200
  },
  input:{
    height: 40,
    width: '100%',
    maxWidth: 300 ,
    borderBottomWidth:1,
    padding: 10,
    textAlign:'center',
    fontSize:20,
    marginTop: 50
  
  },
  button:{
    borderRadius: 16,
    alignItems:'center',
    width: '100%',
    maxWidth:240,
    backgroundColor:"#00A65A",
    padding: 20,
    top: -200
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  }
})
