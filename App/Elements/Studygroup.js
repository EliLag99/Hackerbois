import React, { useEffect, useState } from "react";

import styles from './Styles'
import data from '../Data/StudyGroups'

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const StudyGroup = ({route, navigation}) => {

    const { id } = route.params;
    var group;  
    for (var j = 0; j < data.length; j++){
      if(data[j].ID == id){
        group = data[j];
    }
  }

  if(!group){
    group = {
      Name: "N/A",
      Description: "N/A",
    }
  }

  const members = group.Members.map(function(item){
      return <li> {item} </li>;
  })

  return(
  <View style={styles.containerTopAlign}>

    <Text style={styles.title}>{group.Name}</Text>

    <View style={styles.captionBubble}>
      <Text style={styles.captionText}>Description</Text>
    </View>
    <Text style={styles.Text}>{group.Description}</Text>

    <View style={styles.captionBubble}>
      <Text style={styles.captionText}>Members</Text>
    </View>
      <ul> {members} </ul>
    
  </View>)
};

export default StudyGroup;