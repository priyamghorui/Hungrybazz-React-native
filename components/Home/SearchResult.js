import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {addValues} from '../../redux/reducers/index1';
import {
  addFood,
  updateaddTocart,
  updateStorefood,
} from '../../redux/reducers/index2';
export const SearchResult = ({typeWord}) => {
  const [data, setdata] = useState([]);
  const [photo, setphoto] = useState('');
  const [isLoading1, setLoading1] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const getitems = async () => {
    try {
      const response = await fetch(
        `https://food-names-api.herokuapp.com/api/Food-Names/all`,
      );
      const json = await response.json();
      await setdata(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading1(false);
    }
  };
  // const fetchphotos = async (params) => {

  // };

  const sortnames = async () => {
    let a = 'priyam';
    a.toLowerCase();
    console.log('gere' + typeWord);
    let newarray = data.findIndex(
      e => e.Food.toLowerCase() == typeWord.toLowerCase(),
    );
    console.log('**' + data[newarray]);
    if (data[newarray] != undefined) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${data[newarray].Food}&client_id=Uj2oqacZqiC-PqkRXLy14p4SNMjCaipJ8ZYpfOS59ik`,
        );
        const json = await response.json();
        await setphoto(json.urls.regular);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading2(false);
      }
    }
    // await fetchphotos(data[newarray].Food.toLowerCase())
  };
  useEffect(() => {
    getitems();
    console.log(data);
  }, []);
  useEffect(() => {
    sortnames();
    if (typeWord == '') {
      setphoto('');
    }
  }, [typeWord]);
  let dispatch = useDispatch();
  function bouncyCheckboxHandaler(params) {

    // if (params.isckeck == true) {
    //   // console.log(params.id);

    //   let price = Math.round(Math.random() * (18 - 6 + 1)) + 6;
    //   dispatch(
    //     addFood({
    //       resturontsid: 100,
    //       food_id: 100,
    //       name: typeWord,
    //       desc: 'Safe Assured - Trusted Resturonts',
    //       price: price,
    //       img_uri: photo,
    //     }),
    //   );
    //   dispatch(
    //     updateaddTocart({resturontsid: 100, food_id: 100, addTocart: true}),
    //   );
    //   dispatch(
    //     updateStorefood({
    //       resturontsid: 100,
    //       food_id: 100,
    //       tick: true,
    //     }),
    //   );

    //   dispatch(
    //     addValues({
    //       price: price,
    //     }),
    //   );

    //   setphoto("")
    // }
  }
  return (
    // <Text
    // onPress={() => {
    //     console.log(data);
    //   }}>
    //   SearchResult{typeWord}
    // </Text>
    <View>
      {typeWord != '' && photo != '' ? (
        <View>
          <View style={{flexDirection: 'row', backgroundColor: '#E3E6E8'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 105,
                  width: 130,
                  borderRadius: 5,
                  marginHorizontal: 10,
                  marginVertical: 5,
                }}
                source={{uri: photo}}
              />

              <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {typeWord}
                </Text>
                <Text style={{color: 'black'}}>element.desc.</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text style={{color: 'black', fontSize: 18, marginLeft: 3}}>
                    element.price
                  </Text>
                </View>
              </View>
            </View>
<Text>On development..</Text>
            <BouncyCheckbox
              fillColor="green"
              iconStyle={{
                borderColor: 'lightgray',
                borderRadius: 6,
                borderWidth: 3,
                borderColor: 'green',
              }}
              // isChecked={element.tick}
              onPress={isckeck => {
                bouncyCheckboxHandaler({
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
      ) : (
        console.log('noResult')
      )}
    </View>
  );
};
