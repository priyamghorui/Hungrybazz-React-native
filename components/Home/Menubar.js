import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import bread from '../../assets/images/bread.png';
import coffee from '../../assets/images/coffee.png';
import deals from '../../assets/images/deals.png';
import desserts from '../../assets/images/desserts.png';
import fastfood from '../../assets/images/fast-food.png';
import shoppingbag from '../../assets/images/shopping-bag.png';
import softdrink from '../../assets/images/soft-drink.png';

const Menubar = () => {

  return (
    <ScrollView horizontal overScrollMode="always">
      <View style={styles.container}>
        <Menus />
        </View>
    </ScrollView>
  );
};
const Menus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.imgage} source={bread} />
        <Text>Bread</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgage} source={coffee} />
        <Text>Coffee</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgage} source={deals} />
        <Text>Deals</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgage} source={desserts} />
        <Text>Desserts</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgage} source={fastfood} />
        <Text>Fastfood</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgage} source={shoppingbag} />
        <Text>Shoppingbag</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgage} source={softdrink} />
        <Text>Softdrink</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 4,
    // padding:5
    marginTop: 9,
  },
  card:{

    marginHorizontal: 9,
  },
  imgage: {
    width: 39,
    height: 39,
  },
});
export default Menubar;
