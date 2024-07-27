import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from "./redux/store";
import React from 'react';
import Home from './screens/Home';
import Resturonts from './screens/Resturonts';
import Tabs from './screens/Tabs';




export default function Navegation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Resturonts" component={Resturonts} />
    <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
