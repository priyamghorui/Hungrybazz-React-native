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
import LottieView from 'lottie-react-native';
import PlaceOrder from './PlaceOrder';
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
    <View>
      <Modal animationType="slide" visible={card} transparent={true} style={{}}>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: Dimensions.get('window').height / 2,
              width: Dimensions.get('window').width,
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
            }}></View>
          <View
            style={{
              height: Dimensions.get('window').height / 2,
              width: Dimensions.get('window').width,
              backgroundColor: '#fff',
              // alignItems: "",
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1b1b1b',
                  borderRadius: 100,
                  width: 100,
                  height:31,
                  alignItems: 'center',
                  margin: 5,
                }}
                onPress={() => {
                  setcard(false);
                }}>
                <Text style={{color: '#fff', fontSize: 22}}>Close</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {allStoreitems.length == 0 ? (
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
                            <Text style={{color: 'black'}}>
                              {element.desc}.
                            </Text>
                            <View style={{flexDirection: 'row', marginTop: 5}}>
                              <Foundation
                                name="dollar"
                                color="black"
                                size={22}
                              />
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
                        {element.resturontsid == resturontsid ? (
                          <Text>...</Text>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              removeItemInCart(element);
                            }}
                            style={{justifyContent: 'center', marginRight: 5}}>
                            <MaterialCommunityIcons
                              name="delete"
                              color="black"
                              size={33}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                      <Divider
                        width={1}
                        orientation="horizontal"
                        style={{marginVertical: 1}}
                      />
                    </View>
                  ))}
                  <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <View style={{}}>
                   <Text style={{fontSize:35,color:"black"}}>No order Place!</Text>
                  </View>
                </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                  </View>
                </View>
              ) : (
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
                            <Text style={{color: 'black'}}>
                              {element.desc}.
                            </Text>
                            <View style={{flexDirection: 'row', marginTop: 5}}>
                              <Foundation
                                name="dollar"
                                color="black"
                                size={22}
                              />
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
                        {element.resturontsid == resturontsid ? (
                          <Text>...</Text>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              removeItemInCart(element);
                            }}
                            style={{justifyContent: 'center', marginRight: 5}}>
                            <MaterialCommunityIcons
                              name="delete"
                              color="black"
                              size={33}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                      <Divider
                        width={1}
                        orientation="horizontal"
                        style={{marginVertical: 1}}
                      />
                      </View>
                      ))}
                      <Divider
                      
                        width={1}
                        orientation="horizontal"
                        style={{marginVertical: 5}}
                      />
                      <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                  }}>
                

                  <Text style={{
                    color:"black",
                    fontSize:22
                  }}>Total Price _._._._._._._._._$ {val}</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <View style={{width: 180}}>
                      <PlaceOrder navigation={navigation}/>
                    </View>
                  </View>
                </View>
              )}
            </ScrollView>
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
          <Text style={{color: '#fff', fontSize: 22, marginRight: 30}}>
            View Cart
          </Text>
          <Foundation name="dollar" color="#fff" size={30} />
          <Text style={{color: '#fff', fontSize: 22, marginLeft: 5}}>
            {val}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
// <View key={index}>
//   <View>
//   {element.resturontsid==resturontsid? <Text>...</Text>:<Text
//   onPress={() => {
//     removeItemInCart(element);
//   }}>
//   Remove
// </Text>}
//     <Text>
//       ${element.price}--{element.resturontsid}
//     </Text>
//     <Image
//       style={{
//         height: 105,
//         width: 130,
//         borderRadius: 5,
//         marginHorizontal: 10,
//         marginVertical: 5,
//       }}
//       source={{uri: element.img_uri}}
//     />
//   </View>
// </View>
