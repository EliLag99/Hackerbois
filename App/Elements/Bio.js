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
    <h1>Sean Koh</h1>
    <h4>MEng Electrical and Electronic Engineering</h4>
    <h4>University of Southampton</h4>

    <View style={styles.captionBubble}>
      <Text style={styles.captionText}>Modules</Text>
    </View>
      <Text>Computer Engineering</Text>
      <Text>Advanced Computer Architecture</Text>
      <Text>Foundations of Machine Learning</Text>

    <View style={styles.captionBubble}>
      <Text style={styles.captionText}>Languages</Text>
    </View>
      <Text>Mandarin</Text>
      <Text>English</Text>

    <View style={styles.captionBubble}>
      <Text style={styles.captionText}>StudyGroups</Text>
    </View>
      <Text style={styles.link} onPress={() => navigation.navigate('StudyGroup', {id: 1})}>Hackerbois</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('StudyGroup', {id: 2})}>Lawful Activities</Text>

    <TouchableOpacity style={styles.generalBtn}>
      <Text style={styles.loginText} onPress={() => navigation.navigate('Explore')}>Explore Groups</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.generalBtn}>
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Sign Out</Text>
    </TouchableOpacity>

  </View>)
};

export default Bio;