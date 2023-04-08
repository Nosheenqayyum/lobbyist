import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';

import { HostNewGame } from '../screens/HostNewGame';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='SplashScreen'
                screenOptions={{ headerShown: false, gestureEnabled: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name="HostNewGame" component={HostNewGame} />
                {/* <Stack.Screen name="DeleteAccount" component={DeleteAccount} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
