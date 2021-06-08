import { color } from "ansi-styles";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  renderRightAction,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import ListItemDeleteAction from "./ListItemDeleteAction";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CartItem({
  title,
  price,
  amount,
  option,
  image,
  onPress,
  renderRightAction,
  minusAction,
  plusAction,
}) {
  return (
    <Swipeable
      renderRightActions={() => (
        <ListItemDeleteAction onPress={renderRightAction} />
      )}
    >
      <View style={styles.card} onPress={onPress}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.optionText}>Option: {option}</AppText>
            <AppText style={styles.price}>
              $ {Math.round(price * amount * 100) / 100}
            </AppText>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={minusAction}>
            <MaterialCommunityIcons
              name="minus-circle"
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
          <AppText style={styles.text}>{amount}</AppText>

          <TouchableOpacity onPress={plusAction}>
            <MaterialCommunityIcons
              name="plus-circle"
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  card: {
    width: windowWidth - 20,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 7,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
  },
  itemDetailsContainer: {
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    width: windowWidth * 0.4,
    flexWrap: "wrap",
    color: colors.black,
    fontSize: 16,
    marginBottom: 3,
  },
  text: {
    color: colors.black,
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    marginHorizontal: 5,
  },
  optionText: {
    color: colors.darkGray,
    fontFamily: "Roboto_400Regular",
    fontSize: 13,
    marginVertical:3,
  },
});

export default CartItem;
