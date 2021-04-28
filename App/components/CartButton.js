import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function CartButton({ navigation }) {
  
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("My Cart")}
      >
        <Text style={styles.cartText}>My Cart</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 95,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: colors.primary,
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  cartText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: colors.white,
  },
});

export default CartButton;
