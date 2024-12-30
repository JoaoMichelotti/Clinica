import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Paciente from "./src/screens/Paciente";
import Clinica from "./src/screens/Clinica";

export default function App() {

  const Stack = createStackNavigator();

  const [ fonteCarregada ] = useFonts({
    'Roboto': require('./assets/Roboto-Regular.ttf'),
  })

  if (!fonteCarregada) {
    return null;
  }

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Clinica" screenOptions={{HeaderShown: false}}>
      <Stack.Screen name="Clinica" component={Clinica} />
      <Stack.Screen name="Paciente" component={Paciente} />
    </Stack.Navigator>
  </NavigationContainer>

}