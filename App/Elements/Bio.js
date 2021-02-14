import React, { useEffect, useState } from "react";

import styles from './Styles'

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const Bio = ({navigation}) => {
  
  return(
<View style={styles.container2}>
<Image style={styles.image2} source={require("../assets/face.png")} />
<Text style={styles.title}>Carl Hikardi</Text>
<Text style={styles.title}>MEng Electrical and Electronics</Text>
<Text style={styles.title}>University of Southampton</Text>
    <View style={styles.modbubble}>
        <Text style={styles.bubtext}>Compter Engineering</Text>
      </View>
    <View style={styles.modbubble}>
        <Text style={styles.bubtext}>Foundation of Machine Learning</Text>
      </View>
      <View style={styles.modbubble}>
        <Text style={styles.bubtext}>Advanced Computer Architecture</Text>
      </View>
      <View style={styles.langbubble}>
        <Text style={styles.bubtext}>Chinese</Text>
      </View>
      <View style={styles.langbubble}>
        <Text style={styles.bubtext}>English</Text>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('Explore')}>Explore Groups</Text>
      </TouchableOpacity>
</View>)
};

export default Bio;