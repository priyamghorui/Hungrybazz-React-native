import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Modal, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider} from 'react-native-elements';
import Foundation from 'react-native-vector-icons/Foundation';
import {useDispatch, useSelector} from 'react-redux';
import {addValues, deleteAllValues} from '../../redux/reducers/index1';
import {
  addFood,
  storefood,
  updateaddTocart,
  updateStorefood,
} from '../../redux/reducers/index2';

import LottieView from "lottie-react-native"
export default function Foods({resturontsid}) {
  const allStoreitems = useSelector(state => state.storefood);
  const dispatch = useDispatch();

  const [isLoading1, setLoading1] = useState(false);

  // {
  //   food_name: 'Fried Rice1',
  //   food_desc: 'A dish of boiled that is stir typically and vegetables.',
  //   img_uri:
  //     'https://images.unsplash.com/photo-1564834730442-15e1985f2710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjM3NDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM0ODAwNjQ&ixlib=rb-1.2.1&q=80&w=1080',
  //   price: 10,
  // },
  const [name2, setname2] = useState([]);
  const getitems = async props => {
    // console.log('****' + props.food_name);
    const city = props.food_name.replace(' ', '-');
    // `https://api.unsplash.com/photos/random/?query=${city}&client_id=Uj2oqacZqiC-PqkRXLy14p4SNMjCaipJ8ZYpfOS59ik`
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?query=${city}&client_id=Uj2oqacZqiC-PqkRXLy14p4SNMjCaipJ8ZYpfOS59ik`,
      );
      const json = await response.json();
      // setData(json.movies);
      let price = Math.round(Math.random() * (18 - 6 + 1)) + 6;
      // console.log(json.urls.regular);
      setname2(preval => {
        return [
          ...preval,
          {
            name: props.food_name,
            desc: props.food_desc.split('.')[0],
            img_uri: json.urls.regular,
            price: price,
          },
        ];
      });

      dispatch(
        addFood({
          resturontsid: resturontsid,
          food_id: props.food_id,
          name: props.food_name,
          desc: props.food_desc.split('.')[0],
          price: price,
          img_uri: json.urls.regular,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getnames = async () => {
    // console.log('[[]]]' + resturontsid);
    let newarray = allStoreitems.filter(e => e.resturontsid == resturontsid);
    // console.log(newarray);
    if (newarray.length == 0) {
      try {
        const response = await fetch(
          `https://food-names-api.herokuapp.com/api/Food-Names?index=9&number=9`,
        );
        const json = await response.json();
        for (let index = 0; index < 9; index++) {
          await getitems({
            food_name: json[index].Food,
            food_desc: 'Safe Assured - Trusted Resturonts',
            food_id: index + 1,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading1(true);
      }
    } else {
      console.log("don't have" + resturontsid);
      setname2([]);
      newarray.map(ee => {
        setname2(preval => {
          return [
            ...preval,
            {
              name: ee.name,
              desc: ee.desc,
              img_uri: ee.img_uri,
              price: ee.price,
              tick: ee.tick,
            },
          ];
        });
      });
      setLoading1(true)

    }
  };
  function bouncyCheckboxHandaler(params) {
    if (params.isckeck == true) {
      // console.log(params.id);

      dispatch(
        updateaddTocart({
          resturontsid,
          food_id: params.id + 1,
          addTocart: true,
        }),
      );
      dispatch(
        updateStorefood({resturontsid, food_id: params.id + 1, tick: true}),
      );
      dispatch(
        addValues({
          price: params.price,
        }),
      );
    } else {
      let params_id = params.id + 1;

      dispatch(
        addValues({
          price: -params.price,
        }),
      );
      dispatch(
        updateStorefood({resturontsid, food_id: params.id + 1, tick: false}),
      );
      dispatch(
        updateaddTocart({
          resturontsid,
          food_id: params.id + 1,
          addTocart: false,
        }),
      );
    }
  }

  useEffect(() => {
    // console.log(resturontsid);
    // databasevalues();

    getnames();
  }, []);

  return (
    <View>

      {isLoading1 == true ? (
        <View>
          {name2.map((element, index) => (
            <View key={index}>
              <View style={{flexDirection: 'row', backgroundColor: '#E3E6E8'}}>
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
                        style={{color: 'black', fontSize: 18, marginLeft: 3}}>
                        {element.price}
                      </Text>
                    </View>
                  </View>
                </View>

                <BouncyCheckbox
                  fillColor="green"
                  iconStyle={{
                    borderColor: 'lightgray',
                    borderRadius: 6,
                    borderWidth: 3,
                    borderColor: 'green',
                  }}
                  isChecked={element.tick}
                  onPress={isckeck => {
                    bouncyCheckboxHandaler({
                      id: index,
                      name: element.food_name,
                      price: element.price,
                      img_uri: element.img_uri,
                      isckeck: isckeck,
                    });
                  }}
                />
              </View>
              <Divider
                width={1}
                orientation="horizontal"
                style={{marginVertical: 1}}
              />
            </View>
          ))}
        </View>
      ) : (
       <View style={{justifyContent:"center",alignItems:"center",height:Dimensions.get
      ("window").height/2.2}}>
        <LottieView
        style={{ height: 200 }}
        source={require("../../assets/animations/scanner.json")}
        autoPlay
        speed={3}
      />
        </View>
      )}
    </View>
  );
}
