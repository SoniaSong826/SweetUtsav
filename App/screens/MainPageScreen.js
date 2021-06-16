import React, { useEffect } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import MenuWoo from '../components/MenuWoo';
import PostSlides from "../components/PostSlides";
import FunctionMenu from "../components/FunctionMenu";

function MainPageScreen({ navigation }) {
  
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <FunctionMenu navigation={navigation}></FunctionMenu>
      <PostSlides navigation={navigation} />
      <MenuWoo
        searchBarVisible={false}
        categoryVisible={false}
        category={95}
        navigation={navigation}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
});

export default MainPageScreen;
