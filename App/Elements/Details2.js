import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Styles from './Styles.js'


const Details2 = ({ navigation }) => {
  const [uni, setuni] = useState("");
  const [course, setcourse] = useState("");
  return (
   <View style={Styles.container}>
    <StatusBar style="auto" />
      <View style={Styles.inputView}>
        <TextInput
          style={Styles.TextInput}
          placeholder="University name."
          placeholderTextColor="#003f5c"
          onChangeText={(uni) => setuni(uni)}
        />
      </View>
      <View style={Styles.inputView}>
        <TextInput
          style={Styles.TextInput}
          placeholder="Course name."
          placeholderTextColor="#003f5c"
          onChangeText={(course) => setcourse(course)}
        />
      </View>
  
      <TouchableOpacity style={Styles.loginBtn}>
        <Text style={Styles.loginText} onPress={function() 
          {   
            navigation.navigate('Bio')
          }
          }>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details2;
