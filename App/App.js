import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Elements/Login'
import SignUp from './Elements/Signup'
import Details from './Elements/Details'
import Details2 from './Elements/Details2'
import Bio from './Elements/Bio'
import StudyGroup from './Elements/Studygroup'
import Explore from './Elements/Explore'

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Details2" component={Details2} />
        <Stack.Screen name="Bio" component={Bio} />
        <Stack.Screen name="StudyGroup" component={StudyGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
