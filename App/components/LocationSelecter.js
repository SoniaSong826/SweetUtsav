import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function LocationSelecter({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="storefront"
          size={25}
          color={colors.white}
        />
        <Text style={styles.locationText}>{global.userCity}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  locationText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 13,
    color: colors.white,
  },
});
export default LocationSelecter;
