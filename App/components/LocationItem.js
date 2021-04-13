import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function LocationItem({ image, title, address1, address2, tel }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.text}>{address1}</AppText>
        <AppText style={styles.text}>{address2}</AppText>
        <AppText style={styles.text}>{tel}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical:8,   
    justifyContent:"flex-start"
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  textContainer:{
      justifyContent:"center",
      width:"70%",
  },
  title:{
      color:colors.black,
      fontSize:18,
  },
  text:{
      color:colors.black,
      fontFamily:"Roboto_400Regular"
  }
});

export default LocationItem;
