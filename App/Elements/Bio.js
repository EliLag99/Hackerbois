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
    <Text style={styles.title}>Sean Koh</Text>
    <Text style={styles.title}>MEng Electrical and Electronic Engineering</Text>
    <Text style={styles.title}>University of Southampton</Text>

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
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Sign Out</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.generalBtn}>
      <Text style={styles.loginText} onPress={() => navigation.navigate('Explore')}>Explore Groups</Text>
    </TouchableOpacity>

  </View>)
};

export default Bio;