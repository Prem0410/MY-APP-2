import "react-native-gesture-handler";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { AppDrawerNavigator } from "./navigators/AppDrawerNavigator";
import { AppTabNavigator } from "./navigators/AppTabNavigator";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: AppDrawerNavigator },
  //BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
