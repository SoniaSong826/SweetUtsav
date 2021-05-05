import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import routes from "../navigation/route";
import WooCommerceAPI from "react-native-woocommerce-api";

const wooAPI = new WooCommerceAPI({
  url: "https://melbourne.sweetutsav.com.au/", // Your store URL
  ssl: true,
  consumerKey: "ck_c051b081b4f1dcecabddabfe83682fcc4ea49b72", // Your consumer secret
  consumerSecret: "cs_c4a1ee8a76a58cbb53b75a9704fc1806056c58b0", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v3", // WooCommerce WP REST API version
  queryStringAuth: true,
});

wooAPI
  .get("products/")
  .then((data) => {
    this.setState({ responsedata: data }, () => {
      this.setState({ loading: false });
    });
  })
  .catch((error) => {
    console.log(error);
  });

const initialMenu = [
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
  {
    id: 5,
    title: "Besan Barfi",
    price: "$13.99 – $27.95",
    image: require("../assets/FoodExample/DrySweets/Besan-Barfi-S407A.jpg"),
  },
  {
    id: 6,
    title: "Dry Fruit Cake",
    price: "$19.99 – $39.95",
    image: require("../assets/FoodExample/DrySweets/Dry-Fruit-Cake-P306A.jpg"),
  },
  {
    id: 7,
    title: "Mothichoor Ladoo",
    price: "$13.50 – $26.95",
    image: require("../assets/FoodExample/DrySweets/Motichoor-Ladoo-S410A.jpg"),
  },
  {
    id: 8,
    title: "Cashew Masala",
    price: "$29.95",
    image: require("../assets/FoodExample/Snakes/Cashew-Masala-1.jpg"),
  },
  {
    id: 9,
    title: "Plate Platter",
    price: "$29.99",
    image: require("../assets/FoodExample/Platters/Plate-Platter-M701A-170x185.jpg"),
  },
  {
    id: 10,
    title: "Jalebi",
    price: "$11.50 – $22.95",
    image: require("../assets/FoodExample/Snakes/Jalebi-S422A.jpg"),
  },
  {
    id: 11,
    title: "Agra Dal Moth",
    price: "$20.95",
    image: require("../assets/FoodExample/Snakes/Kuthiraivali-Murukku-170x185-1-170x185.jpg"),
  },
  {
    id: 12,
    title: "Rabdi",
    price: "$29.99",
    image: require("../assets/FoodExample/FridgeSweets/Rabdi.jpg"),
  },
];

function Menu({ navigation, route }) {
  const [menu, setMenu] = useState(initialMenu);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (product) => {
    const newMenu = menu.filter((m) => m.id !== product.id);
    setCart(newMenu);
  };

  return (
      <FlatList
        data={menu}
        keyExtractor={(menu) => menu.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, { item })
            }
          ></Card>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={3}
        horizontal={false}
        contentContainerStyle={styles.content}
        refreshing={refreshing}
        onRefresh={() => {
          setMenu([
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
          ]);
        }}
      ></FlatList>
  );
}
const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
export default Menu;
