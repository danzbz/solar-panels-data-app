import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './pages/login/index';
import CriarConta from './pages/login/criarConta'
import Home from './pages/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}
          options={{ headerTintColor: "purple" }}>
        </Stack.Screen>
        <Stack.Screen name="Criar Conta" component={CriarConta}
          options={{ headerTintColor: "purple" }}>
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home}
          options={{ headerTintColor: "purple" }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}