import React from "react";
import { SafeAreaView, View,StyleSheet } from "react-native";
import Card from "../components/Card";
import Menu from "../components/Menu";
import colors from "../config/colors";

function AllProducts(props) {
  return (
    <SafeAreaView style={styles.card}>
      <Menu></Menu>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,

    }
})

export default AllProducts;
