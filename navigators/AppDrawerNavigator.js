import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import InboxScreen from "../screens/InboxScreen";

import { Icon } from "react-native-elements";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Active: {
      screen: AppTabNavigator,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="fontawesome5" />,
      },
    },

    Inbox: {
      screen: InboxScreen,
      navigationOptions: {
        drawerIcon: <Icon name="bell" type="font-awesome" />,
        drawerLabel: "Inbox",
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: "Active",
  }
);
