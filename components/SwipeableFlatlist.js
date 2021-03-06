import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";

import { SwipeListView } from "react-native-swipe-list-view";

import db from "../config";

export default class SwipeableFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allInbox: this.props.allInbox,
    };
  }

  updateMarkAsread = (inbox) => {
    db.collection("all_inbox").doc(inbox.doc_id).update({
      inbox_status: "read",
    });
  };

  onSwipeValueChange = (swipeData) => {
    var allInbox = this.state.allInbox;
    const { key, value } = swipeData;

    if (value < -Dimensions.get("window").width) {
      const newData = [...allInbox];
      const prevIndex = allInbox.findIndex((item) => item.key === key);
      this.updateMarkAsread(allInbox[prevIndex]);
      newData.splice(prevIndex, 1);
      this.setState({ allInbox: newData });
    }
  };

  renderItem = (data) => (
    <ListItem
      title={data.item.item_name}
      titleStyle={{ color: "black", fontWeight: "bold" }}
      subtitle={data.item.message}
      bottomDivider
    />
  );

  renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}></Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SwipeListView
          disableRightSwipe
          data={this.state.allInbox}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={-Dimensions.get("window").width}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onSwipeValueChange={this.onSwipeValueChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#29b6f6",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 100,
  },
  backRightBtnRight: {
    backgroundColor: "#29b6f6",
    right: 0,
  },
});
