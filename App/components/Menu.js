import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";

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
];

function Menu(props) {  
  const [menu, setMenu] = useState(initialMenu);
  const [refreshing,setRefreshing] = useState(false);
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
          onPress={() => console.log("message selected")}
        ></Card>
      )}
      columnWrapperStyle={styles.flatlist}
      numColumns={3}
      contentContainerStyle={styles.content}
      horizontal={false}
      refreshing={refreshing}
      onRefresh={()=>{setMenu([
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
      ])}}
    ></FlatList>
  );
}
const styles = StyleSheet.create({
  flatlist: {
    flexWrap: "wrap",
  },
});
export default Menu;
