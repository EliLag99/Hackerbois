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
  return(
  <View style={styles.containerTopAlign}>

    <Text style={styles.title}>{group.Name}</Text>
    <Text style={styles.Text}>{group.Description}</Text>
    
  </View>)
};

export default StudyGroup;