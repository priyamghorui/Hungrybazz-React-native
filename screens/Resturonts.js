import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Cart from '../components/Rasturonts/Cart';
import Foods from '../components/Rasturonts/Foods';
import Fram from '../components/Rasturonts/Fram';

export default function Resturonts({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Fram
        country={route.params.country}
        city={route.params.city}
        img_uri={route.params.img_uri}
        
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Foods resturontsid={route.params.resturontsid}/>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          top: Dimensions.get('window').height - 80,
          left: Dimensions.get('window').width - 300,
        }}>
        <Cart resturontsid={route.params.resturontsid} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
}
