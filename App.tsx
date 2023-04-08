/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer, StackActions } from '@react-navigation/native';
import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/MainNavigation';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import { HostNewGame } from './src/screens/HostNewGame';


const App = () => {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='HostNewGame' component={HostNewGame} />
        {/* <Stack.Screen name="DeleteAccount" component={DeleteAccount} /> */}
      </Stack.Navigator>

    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
