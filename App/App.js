import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Login from './Elements/Login.js'
import SignUp from './Elements/Signup'
import Details from './Elements/Details'
import Bio from './Elements/Bio'

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Bio" component={Bio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
