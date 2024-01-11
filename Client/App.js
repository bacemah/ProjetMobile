import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ParametersScreen from './src/screens/ParametersScreen';
import { Colors } from './app.constants';
import Categories from './src/screens/categories/Categories';
import Search from './src/screens/Search/Search';
import VerificationScreen from './src/screens/VerificationScreen';
import ResetScreen from './src/screens/ResetScreen';

const Stack = createStackNavigator();
export default function App() {
   return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: Colors.dark }, headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> 
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
         <Stack.Screen name="Parameters" component={ParametersScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Categories" component={Categories} />

        <Stack.Screen name="Reset" component={ResetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}