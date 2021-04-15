import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import CartItem from "../components/CartItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AppText from "../components/AppText";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import AppButton from "../components/AppButton";

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
      source={require("../assets/white_background_2.jpg")}
    >
      <View style={styles.bar}>
        <AppText style={styles.title}>My Cart</AppText>
        <View style={styles.twoButtons}>
          <TouchableWithoutFeedback
            onPress={() => console.log("left icon clicked")}
          >
            <Image
              style={styles.leftIcon}
              source={require("../assets/arrow-round-back.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <FlatList
        data={cart}
        style={styles.flatList}
        keyExtractor={(cart) => cart.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            title={item.title}
            price={item.price}
            amount={item.amount}
            option={item.option}
            image={item.image}
            renderRightAction={() => 
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            }
          ></CartItem>
        )}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={ListItemSeparator}
      ></FlatList>
      <AppButton style={styles.button} title ="Check Out"></AppButton>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bar: {
    height: 85,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    backgroundColor: colors.primary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  twoButtons: {
    paddingHorizontal: 14,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 2,
  },
  title: {
    position: "absolute",
    color: colors.white,
    fontSize: 22,
    paddingBottom: 12,
  },
  leftIcon: {
    height: 20,
    marginVertical: 12,
  },
  backGround: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignSelf: "center",
  },
  button:{
    marginBottom:40,
  }
});

export default CartScreen;
