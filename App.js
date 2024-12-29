import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Paciente from "./src/screens/Paciente";

export default function App(props) {

  const Stack = createStackNavigator();

  const [ fonteCarregada ] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fonteCarregada) {
    return null;
  }

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{HeaderShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Paciente" component={Paciente} />
    </Stack.Navigator>
  </NavigationContainer>

}