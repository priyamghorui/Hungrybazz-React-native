import React, {useState} from 'react';
import {Dimensions, Modal, Text, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
export default function PlaceOrder({navigation, resturontsid}) {
  const [card, setcard] = useState(false);
  return (
    <View>
      <Modal animationType="slide" visible={card} transparent={true} style={{}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: Dimensions.get('window').height,
          }}>
          <Text style={{color: 'black', fontSize: 28}}>Order done</Text>
          <Text style={{color: 'black', fontSize: 22}}>
            Thanks! for choosing us
          </Text>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/cooking.json')}
            autoPlay
            speed={1.5}
          />
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/check-mark.json')}
            autoPlay
            speed={1}
            loop={false}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                borderRadius: 5,
                width: 150,
                height: 30,
                alignItems: 'center',
                margin: 5,
              }}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={{color: '#fff', fontSize: 22}}>Back to home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{backgroundColor: '#1b1b1b', borderRadius: 100}}
        onPress={() => {
          setcard(true);
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 40,
            marginVertical: 7,
          }}>
          <Text style={{color: '#fff', fontSize: 22}}>PlaceOrder</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

