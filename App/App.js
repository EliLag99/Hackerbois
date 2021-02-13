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


function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
   <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/snack-icon.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
<TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate('Create1')}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

function Create1({ navigation }) {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
   <View style={styles.container}>
    <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
<View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setusername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
  
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Create2')}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

function Create2({ navigation }) {
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
        <Text style={styles.loginText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Create1" component={Create1} />
        <Stack.Screen name="Create2" component={Create2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },

  inputView: {
    backgroundColor: "lightcyan",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

   inputView2: {
    backgroundColor: "lightcyan",
    borderRadius: 30,
    width: "20%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  
  TextInput2: {
    height: 50,
  textAlign:'center',
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "deepskyblue",
  },

  row:{
  flexDirection: 'row',
  justifyContent: 'center',
  },
  
});

export default App;
