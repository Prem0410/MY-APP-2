import React from "react";
import { View, Text } from "react-native";
import MyHeader from "../components/MyHeader";
import {MapView} from "expo";
export default class OrderScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Order" navigation={this.props.navigation} />
        <Text>Order Has Been Placed....</Text>
      </View>
      
    );
  }
}
