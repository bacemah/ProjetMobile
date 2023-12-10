import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();
export default function App() {
   return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#200623", paddingTop: 50 }, headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> 
        {/* <Stack.Screen name="Verification" component={VerificationScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Parameters" component={ParametersScreen} /> */}
        {/* <Stack.Screen name="Reset" component={ResetScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}