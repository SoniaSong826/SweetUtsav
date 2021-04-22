import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../config/colors";
import AppText from "./AppText";
import {
  useFonts,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

function Card({ title, price, image, onPress }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableHighlight
      underlayColor={colors.primary}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.price}>
          {price}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 6,
  },
  card: {
    width: 120,
    height: 170,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 12,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    //overflow:"hidden",
  },
  title: {
    flexWrap: "nowrap",
    marginBottom: 7,
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    color: colors.black,
  },
  price: {
    color: colors.secondary,
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
  },
  image: {
    width: 105,
    height: 105,
    marginBottom: 10,
  },
});

export default Card;
