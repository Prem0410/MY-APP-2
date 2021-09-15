import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";
import SwipeableFlatlist from "../components/SwipeableFlatlist";
import db from "../config";

export default class InboxScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser.email,
      allInbox: [],
    };

    this.InboxRef = null;
  }

  getInbox = () => {
    console.log(this.state.userId);
    this.inboxRef = db
      .collection("all_inbox")
      .where("inbox_status", "==", "unread")
      .where("targeted_user_id", "==", this.state.userId)
      .onSnapshot((snapshot) => {
        var allInbox = [];
        snapshot.docs.map((doc) => {
          var inbox = doc.data();
          inbox["doc_id"] = doc.id;
          allinbox.push(inbox);
        });
        this.setState({
          allInbox: allInbox,
        });
      });
  };

  componentDidMount() {
    this.getInbox();
  }

  componentWillUnmount() {
    this.inboxRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.item_name}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        subtitle={item.message}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1 }}>
          <MyHeader title={"Inbox"} navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 0.9 }}>
          {this.state.allInbox.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/Inbox.png")} />
              <Text style={{ fontSize: 30, marginTop:30 }}>Inbox Is Empty </Text>
            </View>
          ) : (
            <SwipeableFlatlist allInbox={this.state.allInbox} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
