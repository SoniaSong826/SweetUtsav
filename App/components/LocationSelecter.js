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
import { FlatList } from "react-native-gesture-handler";
import CityPicker from "./CityPicker";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItemSeparator from "./ListItemSeparator";
import {store} from "../constants/const"
function LocationSelecter({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="map-marker"
          size={25}
          color={colors.white}
        />
        <Text style={styles.locationText}>{store.acronym}</Text>
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
