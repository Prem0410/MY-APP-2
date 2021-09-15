import React from "react";
import ActiveScreen from "../screens/ActiveScreen";
import FinishedScreen from "../screens/FinishedScreen";
import OrderScreen from "../screens/OrderScreen";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { AppStackNavigator } from "./AppStackNavigator";

export const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Active: {
      screen: AppStackNavigator,
    },
    Finished: {
      screen: FinishedScreen,
    },
    Order: {
      screen: OrderScreen,
    },
  },
  {
    tabBarOptions: {
      tabStyle: { marginTop: 50 },
    },
  }
);
