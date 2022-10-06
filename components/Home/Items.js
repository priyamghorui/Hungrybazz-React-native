import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from "lottie-react-native"

// 'https://api.unsplash.com/photos/random?count=10&query=restaurants&client_id=Uj2oqacZqiC-PqkRXLy14p4SNMjCaipJ8ZYpfOS59ik',
export default function Items({navigation}) {
  const [isLoading1, setLoading1] = useState(false);
  const [name1, setname1] = useState([]);

  const getitems = async () => {
    let a = [1, 2, 3, 4];
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/random?count=10&query=restaurants&client_id=Uj2oqacZqiC-PqkRXLy14p4SNMjCaipJ8ZYpfOS59ik',
      );
      const json = await response.json();
      await json.map(async e => {
        await setname1(preval => {
          return [
            ...preval,
            {
              img_uri: e.urls.regular,
              city: e.location.city,
              country: e.location.country,
            },
          ];
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading1(true);
    }
  };

  useEffect(() => {
    getitems();
    // getitems();
    // getitems();
    // getitems();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading1 == true ? (
        <View>
          {name1.map((e, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Resturonts', {
                  img_uri: e.img_uri,
                  city: e.city,
                  country: e.country,
                  resturontsid: index,
                });
              }}
              style={{
                width: Dimensions.get('window').width,
                backgroundColor: '#E3E6E8',
                marginVertical: 5,
                paddingVertical: 9,
              }}>
              <View
                style={{
                  marginHorizontal: 6,
                  borderColor: '#E3E6E8',
                  borderWidth: 4,
                  borderRadius: 5,
                  backgroundColor: '#E3E6E8',
                }}>
                <Image
                  style={{
                    width: Dimensions.get('screen').width - 20,
                    borderRadius: 100 / 10,
                    overflow: 'hidden',
                    borderWidth: 3,
                    borderColor: '#E3E6E8',
                    height: 180,
                  }}
                  source={{uri: e.img_uri}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 17,
                  alignItems: 'center',
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      justifyContent: 'space-between',
                      // marginHorizontal: 8,
                    }}>
                    <Text style={{color: 'black'}}>Location : {e.city}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      justifyContent: 'space-between',
                      // marginHorizontal: 8,
                    }}>
                    <Text style={{color: 'black'}}>
                      Location :: City : {e.city} , Country : {e.country}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 100 / 6,
                    overflow: 'hidden',
                    borderWidth: 3,
                    borderColor: '#fff',
                    height: 28,
                    width: 28,
                    backgroundColor: '#cdd1d4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'black'}}>
                    {' '}
                    {Math.round(Math.random() * (5 - 4 + 1)) + 3}{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={{justifyContent:"center",alignItems:"center",height:Dimensions.get
      ("window").height/1.5}}>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  item_container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eee',
    marginVertical: 6,
  },
  img_container: {
    flex: 1,
  },
  data: {
    flex: 1,
  },
  img: {
    height: 100,
    width: 100,
  },
});

// {async () => {
//   await db.transaction(tx => {
//     tx.executeSql(
//       'INSERT INTO Student_Table (student_name, student_phone, student_address) VALUES (?,?,?)',
//       ['ghorui', '6297345864', '12.'],
//       (tx, results) => {
//         console.log('Results', results.rowsAffected);
//       },
//     );
//   });
//   console.log('done');
// }}

// const createTable = () => {
//   // create table if not exists
//   db.transaction(tx => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS Student_Table(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(30), student_phone INT(15), student_address VARCHAR(255))',
//       [],
//       error => {
//         console.log(error);
//       },
//     );
//   });
// };
