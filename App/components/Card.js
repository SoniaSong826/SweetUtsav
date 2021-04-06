import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView,TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.image} source={image} />
      <AppText style ={styles.title}>{title}</AppText>
      <AppText style ={styles.subTitle}>{subTitle}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width:115,
    height:170,
    borderColor:colors.lightGray,
    borderWidth:1,
    borderRadius: 6,
    backgroundColor: colors.white,
    alignItems:"center",
    marginBottom: 10,
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    shadowOffset: { width: 3, height: 3 },
    overflow:"hidden",
  },
  title:{
    color:colors.black,
    marginBottom: 7,
  },
  subTitle:{
    color:colors.secondary,
  },
  image: {
    width:105,
    height: 105,
    marginBottom:10,
  },
});

export default Card;
