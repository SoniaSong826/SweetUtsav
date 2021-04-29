import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import CartItem from "../components/CartItem";
import AppText from "../components/AppText";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import AppButton from "../components/AppButton";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const initialCart = [
  {
    id: 1,
    title: "Balushahi",
    price: "$15.50",
    amount: "2",
    option: "1 kg",
    image: require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg"),
  },
  {
    id: 2,
    title: "Anjeer Pista Slice",
    price: "$19.98",
    amount: "1",
    option: "500 g",
    image: require("../assets/FoodExample/DrySweets/Anjeer-Pista-Slice-2.jpg"),
  },
];

function CartScreen(props) {
  const [cart, setCart] = useState(initialCart);
  const handleDelete = (product) => {
    const newCarts = cart.filter((m) => m.id !== product.id);
    setCart(newCarts);
  };
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightOrange_background.jpg")}
    >
    
      <FlatList
        data={cart}
        style={styles.flatList}
        keyExtractor={(cart) => cart.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <CartItem
              title={item.title}
              price={item.price}
              amount={item.amount}
              option={item.option}
              image={item.image}
              renderRightAction={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            ></CartItem>
          </View>
        )}
        contentContainerStyle={{ alignItems: "center" }}
      ></FlatList>
      <AppText style={styles.total}>Total：$35.48</AppText>
      <AppButton style={styles.button} title="Check Out"></AppButton>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bar: {
    height: Constants.statusBarHeight + 40,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 8,
    flexDirection: "row",
    backgroundColor: colors.primary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  twoButtons: {
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    color: colors.white,
    fontSize: 22,
    paddingBottom: 12,
  },
  leftIcon: {
    marginLeft: 5,
  },
  content: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  flatList: {
    width: windowWidth,
  },
  backGround: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  total: {
    fontSize:25,

  },
  button: {
    marginBottom: 40,
  },
});

export default CartScreen;
