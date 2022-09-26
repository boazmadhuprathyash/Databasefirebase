/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Additems from './screens/Additems';
import List from './screens/List';

const Stack = createStackNavigator();

function App (){
  return(
    <NavigationContainer style = { styles.container }>
      <Stack.Navigator>
        <Stack.Screen name = 'Home'
                      component = { Home }/>
        <Stack.Screen name = 'Additems'
                      component = { Additems }/>
        <Stack.Screen name = 'List'
                      component = { List }/>                            
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})

export default App;
