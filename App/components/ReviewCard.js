import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import colors from "../config/colors";
const windowWidth = Dimensions.get("window").width;
function ReviewCard({ name, time, review, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.containerWords}>
        <Text style={styles.title}>
          {name} {"\n"}{time}
        </Text>
        <Text style={styles.review}>{review}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: windowWidth * 0.9,
    backgroundColor: colors.white,
    padding: 5,
    marginBottom:10,
    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    alignItems: "center",
  },
  containerWords: {
    flex: 1,
  },
  title: {
    marginVertical: 8,
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
  },
  review: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});

export default ReviewCard;
