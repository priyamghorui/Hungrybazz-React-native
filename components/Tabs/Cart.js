import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider} from 'react-native-elements';
import Foundation from 'react-native-vector-icons/Foundation';
import {useDispatch, useSelector} from 'react-redux';
import {addValues} from '../../redux/reducers/index1';
import {updateaddTocart, updateStorefood} from '../../redux/reducers/index2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Cart({navigation, resturontsid}) {
  const [card, setcard] = useState(false);
  const storefood = useSelector(state => state.storefood).filter(
    e => e.tick == true,
  );
  const allStoreitems = useSelector(state => state.storefood).filter(
    e => e.addTocart == true,
  );
  const items1 = useSelector(state => state.values);
  const [val, setval] = useState(0);
  useEffect(() => {
    let a = [1, 2, 3];

    if (items1.length != 0) {
      setval(items1[items1.length - 1].price);
    } else {
      setval(0);
    }
  }, [items1]);
  const dispatch = useDispatch();
  function removeItemInCart(params) {
    dispatch(
      updateStorefood({
        resturontsid: params.resturontsid,
        food_id: params.food_id,
        tick: false,
      }),
    );
    dispatch(
      updateaddTocart({
        resturontsid: params.resturontsid,
        food_id: params.food_id,
        addTocart: false,
      }),
    );
    dispatch(
      addValues({
        price: -params.price,
      }),
    );
  }
  return (
    <View style={{}}>
      {allStoreitems.map((element, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#E3E6E8',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {element.img_uri == undefined ? (
                <Image
                  style={{
                    height: 105,
                    width: 130,
                    borderRadius: 5,
                    marginHorizontal: 10,
                    marginVertical: 5,
                  }}
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png',
                  }}
                />
              ) : (
                <Image
                  style={{
                    height: 105,
                    width: 130,
                    borderRadius: 5,
                    marginHorizontal: 10,
                    marginVertical: 5,
                  }}
                  source={{uri: element.img_uri}}
                />
              )}

              <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {element.name}
                </Text>
                <Text style={{color: 'black'}}>{element.desc}.</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Foundation name="dollar" color="black" size={22} />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      marginLeft: 3,
                    }}>
                    {element.price}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                removeItemInCart(element);
              }}
              style={{justifyContent: 'center', marginRight: 5}}>
              <MaterialCommunityIcons name="delete" color="black" size={33} />
            </TouchableOpacity>
          </View>
          <Divider
            width={1}
            orientation="horizontal"
            style={{marginVertical: 1}}
          />
        </View>
      ))}
    </View>
  );
}
