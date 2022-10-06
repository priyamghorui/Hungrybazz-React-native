import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Footer = ({navigation}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.card}
        onPress={e => {
          console.log('asd');
        }}>
        <Icon name="home" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.card}
        onPress={e => {
          console.log('asd');
        }}>
        <Icon name="user-alt" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.card}
        onPress={e => {
          navigation.navigate('Tabs');
        }}>
        <Icon name="shopping-bag" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.card}
        onPress={e => {
          console.log('asd');
        }}>
        <Icon name="bars" />
      </TouchableOpacity>
    </View>
  );
};
const Icon = props => {
  return (
    <View style={style.icon_container}>
      <FontAwesome5 name={props.name} color="black" size={33} />
    </View>
  );
};
const style = StyleSheet.create({
  icon_container: {},
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexDirection: 'row',
    // marginHorizontal:5
  },
  card: {
    padding: 5,
    margin: 5,
  },
});

export default Footer;
