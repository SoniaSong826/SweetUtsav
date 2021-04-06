import React from "react";
import { SafeAreaView, View,StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

function AllProducts(props) {
  return (
    <SafeAreaView style={styles.card}>
      <Card
        title="Balushahi"
        subTitle="$15.50 – $30.95"
        image={require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg")}
      ></Card>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        
    }
})

export default AllProducts;
