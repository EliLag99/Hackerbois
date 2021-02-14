import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from './Styles.js'

const Details = ({ navigation }) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [day, setday] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  return (
   <View style={styles.container} >
    <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstname) => setfirstname(firstname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastname) => setlastname(lastname)}
        />
      </View>
      <View style={styles.row}>
      <View style={styles.inputView2}>
      <TextInput
          style={styles.TextInput2}
          placeholder="Day"
          placeholderTextColor="#003f5c"
          onChangeText={(day) => setday(day)}
        />
        </View>
        <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput2}
          placeholder="Month"
          placeholderTextColor="#003f5c"
          onChangeText={(month) => setmonth(month)}
        />
        </View>
        <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput2}
          placeholder="Year"
          placeholderTextColor="#003f5c"
          onChangeText={(year) => setyear(year)}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}onPress={() => navigation.navigate('Explore')}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;