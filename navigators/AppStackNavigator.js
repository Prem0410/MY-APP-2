import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import ActiveScreen from "../screens/ActiveScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";

export const AppStackNavigator = createStackNavigator(
  {
    Active: {
      screen: ActiveScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    PlaceOrder: {
      screen: PlaceOrderScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: "Active",
  }
);
