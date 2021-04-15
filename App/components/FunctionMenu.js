import React from "react";
import { StyleSheet, View } from "react-native";
import FunctionIcon from "./FunctionIcon";
import colors from "../config/colors";

function FunctionMenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.menuColumn}>
        <View style={styles.menuRow}>
          <FunctionIcon
            title="Order Now"
            iconName = "cart"
            color="red"
            onPress={() => console.log("Order Now button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Categories"
            iconName="cupcake"
            onPress={() => console.log("Categories button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="My Account"
            iconName="account"
            onPress={() => console.log("My Account button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Locations"
            iconName="map-marker-multiple"
            onPress={() => console.log("Location button clicked")}
          ></FunctionIcon>
        </View>
        <View style={styles.menuRow}>
          <FunctionIcon
            title="Events"
            iconName="party-popper"
            color="secondary"
            onPress={() => console.log("Events button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Policies"
            iconName="format-list-bulleted-square"
            color="secondary"
            onPress={() => console.log("Policies button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Contact Us"
            iconName="face-agent"
            color="secondary"
            onPress={() => console.log("Contact Us button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Follow Us"
            iconName="at"
            color="secondary"
            onPress={() => console.log("Follow Us button clicked")}
          ></FunctionIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  menuColumn: {
    justifyContent: "center",
  },
  menuRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:4,
  },
});
export default FunctionMenu;
