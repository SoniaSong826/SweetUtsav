import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import OrderItem from "../components/OrderItem";
import PersonalDetails from "../components/PersonalDetails";

const user = {
  photo: require("../assets/icon.png"),
  firstName: "Sonia",
  lastName: "Song",
  email: "sonia-826@outlook.com",
};

const initialOrders = [
  {
    id: 1,
    title: "Balushahi...",
    dateTime: "8:00 pm 29 Mar 2021",
    price: "$15.50",
    image: require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg"),
  },
  {
    id: 2,
    title: "Anjeer Pista Slice...",
    dateTime: "5:00 pm 29 Apr 2021",
    price: "$19.98",
    image: require("../assets/FoodExample/DrySweets/Anjeer-Pista-Slice-2.jpg"),
  },
];

function MyAccountScreen({ navigation }) {
  const [orders, setOrders] = useState(initialOrders);
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_green_background.jpg")}
    >
      <PersonalDetails
        photo={user.photo}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      ></PersonalDetails>
      
      <AppText style={styles.title}>Previous Orders</AppText>
      <FlatList
        data={orders}
        style={styles.flatList}
        keyExtractor={(order) => order.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <OrderItem
              title={item.title}
              price={item.price}
              dateTime={item.dateTime}
              image={item.image}
              onPress={() => navigation.navigate("Order Details", item)}
            ></OrderItem>
          </View>
        )}
        contentContainerStyle={{ alignItems: "center" }}
      ></FlatList>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: colors.lightGray,
    borderWidth: 1,
    overflow: "hidden",
  },
  content: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    color: colors.secondary,
    fontSize: 23,
    borderColor: colors.lightGray,
    borderTopWidth: 2,
    marginTop: 40,
    textAlign:"center",
  },
});
export default MyAccountScreen;
