import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Styles from './Styles.js'


const SignUp = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
   <View style={Styles.container}>
    <StatusBar style="auto" />
      <View style={Styles.inputView}>
        <TextInput
          style={Styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
<View style={Styles.inputView}>
        <TextInput
          style={Styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setusername(username)}
        />
      </View>
      <View style={Styles.inputView}>
        <TextInput
          style={Styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
  
      <TouchableOpacity style={Styles.loginBtn}>
        <Text style={Styles.loginText} onPress={function() 
          {   
            navigation.navigate('Details')
          }
          }>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;