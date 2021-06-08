import React from "react";
import { StyleSheet, View } from "react-native";
import FunctionIcon from "./FunctionIcon";
import colors from "../config/colors";

function FunctionMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuColumn}>
        <View style={styles.menuRow}>
          <FunctionIcon
            title="Order Now"
            iconName="cupcake"
            color="red"
            onPress={() => navigation.navigate("Order Now")}
          ></FunctionIcon>
          <FunctionIcon
            title="Categories"
            iconName="apps"
            onPress={() => navigation.navigate("Categories")}
          ></FunctionIcon>
          <FunctionIcon
            title="My Account"
            iconName="account"
            // onPress={() => navigation.navigate("My Account")}
            
          ></FunctionIcon>
          <FunctionIcon
            title="Locations"
            iconName="map-marker-multiple"
            onPress={() => navigation.navigate("Locations")}
          ></FunctionIcon>
        </View>
        <View style={styles.menuRow}>
          <FunctionIcon
            title="Policies"
            iconName="format-list-bulleted-square"
            color="secondary"
            onPress={() => navigation.navigate("Policies")}
          ></FunctionIcon>
          <FunctionIcon
            title="Join Us"
            iconName="hand"
            color="secondary"
            onPress={() => navigation.navigate("Events")}
          ></FunctionIcon>
          <FunctionIcon
            title="Contact Us"
            iconName="face-agent"
            color="secondary"
            onPress={() => navigation.navigate("Contact Us")}
          ></FunctionIcon>
          <FunctionIcon
            title="About Us"
            iconName="at"
            color="secondary"
            onPress={() => navigation.navigate("Follow Us")}
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
    marginBottom: 4,
  },
});
export default FunctionMenu;
