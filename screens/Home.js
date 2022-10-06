import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Footer from '../components/Home/Footer';
import Headers from '../components/Home/Header';
import Items from '../components/Home/Items';
import Menubar from '../components/Home/Menubar';
import { SearchResult } from '../components/Home/SearchResult';
import Test from '../components/Test';

function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Headers navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Menubar />
        <Items navigation={navigation} />
      </ScrollView>
      <Footer navigation={navigation} />
      </SafeAreaView>
      // <SearchResult/>
  );
}

export default Home;
