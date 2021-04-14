import React from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import Card from "../components/Card";

const menu = [
  {
    id: 1,
    title: "Balushahi",
    price: "$15.50 – $30.95",
    image: require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg"),
  },
  {
    id: 2,
    title: "Anjeer Pista Slice",
    price: "$19.98 – $39.95",
    image: require("../assets/FoodExample/DrySweets/Anjeer-Pista-Slice-2.jpg"),
  },
  {
    id: 3,
    title: "Champakali",
    price: "$2.95",
    image: require("../assets/FoodExample/FridgeSweets/Kaman-Dhokla-N523A-170x185.jpg"),
  },
  {
    id: 4,
    title: "Gift Box–B42 Mix",
    price: "$39.95",
    image: require("../assets/FoodExample/GiftBox/sweetbox3.jpg"),
  },
];

function AllProductsScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar
        title="All Products"
        leftIcon={require("../assets/arrow-round-back.png")}
      ></TopBar>
      <FlatList
        data={menu}
        keyExtractor={(menu) => menu.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={()=>console.log("message selected")}
          ></Card>
        )}
        columnWrapperStyle={styles.flatlist}
        numColumns={3}
        contentContainerStyle={styles.content}
        horizontal={false}
      ></FlatList>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  flatlist: {
    flexWrap: "wrap",
  },
  content: {
    alignSelf: "flex-start",
  },
});

export default AllProductsScreen;
