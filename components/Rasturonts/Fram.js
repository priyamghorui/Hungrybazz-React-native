import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
export default function SpecificItem({img_uri, city, country}) {
  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;

  return (
    <View>
      <Image
        style={{
          height: Dimensions.get('window').height / 3,
          width: Dimensions.get('window').width,
        }}
        source={{uri: img_uri}}
      />
      <View style={{marginTop: 15}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20}}> RestaurantName not fetch</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>
            Location :: City : {city} , Country : {country}
          </Text>
        </View>
        <Divider
          width={1}
          orientation="horizontal"
          style={{marginVertical: 1, marginTop: 25}}
        />
      </View>
    </View>
  );
}
