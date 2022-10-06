import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SearchResult } from './SearchResult';
function Headers({navigation}) {
  const [word,setWord]=useState()
  return (
    <View>
    <View style={style.container}>
    <TextInput onChangeText={(e)=>{setWord(e)}} placeholder='Search HungryBazz.in' style={style.input}/>
    <FontAwesome5 size={31} style={{marginTop:12}} name="microphone"/>
    </View>
    <SearchResult typeWord={word}/>
    </View>
  );
}

const style = StyleSheet.create({


  container: {
    backgroundColor: '#fff',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical:9
  },
  input:{
    backgroundColor:"white",
    borderRadius:7,
    flex:1,
    marginHorizontal:9,
    marginVertical:-1.5
    
  }
});

export default Headers;
