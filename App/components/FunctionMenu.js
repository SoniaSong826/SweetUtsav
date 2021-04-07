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
            image={require("../assets/function-icon/Order_Now.png")}
            color="red"
            onPress={() => console.log("Order Now button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Categories"
            image={require("../assets/function-icon/Categories.png")}
            onPress={() => console.log("Categories button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="My Account"
            image={require("../assets/function-icon/My_Account.png")}
            onPress={() => console.log("My Account button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Location"
            image={require("../assets/function-icon/Location.png")}
            onPress={() => console.log("Location button clicked")}
          ></FunctionIcon>
        </View>
        <View style={styles.menuRow}>
          <FunctionIcon
            title="Events"
            image={require("../assets/function-icon/Events.png")}
            color="secondary"
            onPress={() => console.log("Events button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Policies"
            image={require("../assets/function-icon/Policies.png")}
            color="secondary"
            onPress={() => console.log("Policies button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Contact Us"
            image={require("../assets/function-icon/Contact_Us.png")}
            color="secondary"
            onPress={() => console.log("Contact Us button clicked")}
          ></FunctionIcon>
          <FunctionIcon
            title="Follow Us"
            image={require("../assets/function-icon/Follow_Us.png")}
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
  },
});
export default FunctionMenu;
