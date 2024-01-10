import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParametersScreen from "./ParametersScreen";
import Accordion from "../components/AccordionComponent";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function ParametersHomeScreen() {
    return (
        <NavigationContainer  independent={true}>
                <Stack.Navigator screenOptions={{headerShown: false, }} >
      <Stack.Screen name="ParametersScreen" component={ParametersScreen} />
      <Stack.Screen name="SpecificParamater" component={Accordion}  />
    </Stack.Navigator>
      </NavigationContainer>

  );
}

export default ParametersHomeScreen;
