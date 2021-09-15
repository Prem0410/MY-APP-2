import color from "color";
import firebase from "firebase";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  Alert,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";

export default class PlaceOrderScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      fromAddress: "",
      fromPhone: "",
      note: "",
      parcelDesc: "",
      paymentType: "",
      requestId: "",
      status: "",
      toAddress: "",
      toPhone: "",
      userId: firebase.auth().currentUser.email,
    };
  }
  addRequest = async (userId) => {
    var userId = this.state.userId;

    db.collection("delevery_request").add({
      user_id: userId,
      book_name: bookName,
      reason_to_request: reasonToRequest,
      request_id: randomRequestId,
      book_status: "requested",
      date: firebase.firestore.FieldValue.serverTimestamp(),
      image_link: books.data[0].volumeInfo.imageLinks.smallThumbnail,
    });

    await this.getBookRequest();
    db.collection("users")
      .where("username", "==", userId)
      .get()
      .then()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          db.collection("users").doc(doc.id).update({
            isBookRequestActive: true,
          });
        });
      });

    this.setState({
      bookName: "",
      reasonToRequest: "",
      requestId: randomRequestId,
    });

    return Alert.alert("Book Requested Successfully!");
  };

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#ffff"
              onPress={() => this.props.navigation.goBack()}
            />
          }
          centerComponent={{
            text: "Place Order",
            style: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
          }}
          backgroundColor="#32867d"
        />

        <View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={"padding"}>
              <View style={styles.buttonContainer}>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                >
                  FROM:
                </Text>
                <View style={{ alignItems: "center" }}>
                  <TextInput
                    style={styles.loginBox}
                    //styes={{color:'#000'}}
                    placeholder={"Address:"}
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={(text) => {
                      this.setState({
                        fromAddress: text,
                      });
                    }}
                  />
                </View>

                <View style={{ alignItems: "center" }}>
                  <TextInput
                    style={styles.loginBox}
                    placeholder={"Phone:"}
                    maxLength={10}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        fromPhone: text,
                      });
                    }}
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <TextInput
                    style={styles.loginBox}
                    placeholder={"Note:"}
                    //keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        Note: text,
                      });
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                >
                  To:
                </Text>
                <View style={{ alignItems: "center" }}>
                  <TextInput
                    style={styles.loginBox}
                    placeholder={"Address:"}
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={(text) => {
                      this.setState({
                        toAddress: text,
                      });
                    }}
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <TextInput
                    style={styles.loginBox}
                    placeholder={"Phone:"}
                    maxLength={10}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        toPhone: text,
                      });
                    }}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => {
              //Alert.alert("Order has been placed");
              this.props.navigation.navigate("Order");
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "50",
    color: "#000",
    fontWeight: "bold",
  },
  loginBox: {
    width: 350,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "black",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5,

    color: "black",
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ffff",
    elevation: 10,
  },
  buttonContainer: {
    //flex: 0.1,
    marginTop: 10,
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffab",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
  },
  registerButton: {
    width: "85%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#00ffab",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  buttonContainer1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(40),
    borderWidth: 2,
    borderRadius: 2,
    width: "80%",
    height: RFValue(50),
    alignSelf: "center",
    backgroundColor: "#FFE5B8",
  },
  buttonText: {
    fontSize: RFValue(20),
    fontWeight: "400",
  },
});
