import React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import Card from "./Card";


function Menu(props) {
  return (
      <ScrollView>
        <View style={styles.scrollView}>
          <Card
          title="Balushahi"
          subTitle="$15.50 – $30.95"
          image={require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg")}
        ></Card>
        <Card
          title="Anjeer Pista Slice"
          subTitle="$19.98 – $39.95"
          image={require("../assets/FoodExample/DrySweets/Anjeer-Pista-Slice-2.jpg")}
        ></Card>
        <Card
          title="Champakali"
          subTitle="$2.95"
          image={require("../assets/FoodExample/FridgeSweets/Kaman-Dhokla-N523A-170x185.jpg")}
        ></Card>
        <Card
          title="Gift Box–B42 Mix"
          subTitle="$39.95"
          image={require("../assets/FoodExample/GiftBox/sweetbox3.jpg")}
        ></Card>
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: "4%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent:"space-between",
  },
});
export default Menu;
