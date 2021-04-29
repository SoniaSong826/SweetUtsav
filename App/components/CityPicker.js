import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function CityPicker({ img, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={img}></Image>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
export default CityPicker;
