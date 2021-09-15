import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from "../components/MyHeader";

export default class ActiveScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Home" navigation={this.props.navigation} />
        <TouchableOpacity style={styles.buttonContainer} onPress = {()=>{this.props.navigation.navigate("PlaceOrder")}}>
          <Text style={styles.buttonText}>Place Order</Text>
        
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(400),
    borderWidth:2,
    borderRadius:10,
    width:"80%",
    height:RFValue(50),
    alignSelf:"center",
    backgroundColor:"#FFE5B8"
  },
  buttonText: {
      fontSize:RFValue(20),
      fontWeight:"400"
  },
});
