import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Modal,
  FlatList,
} from "react-native";
import MenuWoo from "../components/MenuWoo";
import PostSlides from "../components/PostSlides";
import FunctionMenu from "../components/FunctionMenu";
import * as SplashScreen from "expo-splash-screen";
import SiteModal from "../components/SiteModal";
import InAppReview from "react-native-in-app-review";

function MainPageScreen({ navigation }) {
  useEffect(() => {
    SplashScreen.hideAsync();
    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        // when return true in android it means user finished or close review flow
        console.log("InAppReview in android", hasFlowFinishedSuccessfully);

        // when return true in ios it means review flow lanuched to user.
        console.log(
          "InAppReview in ios has lanuched successfully",
          hasFlowFinishedSuccessfully
        );

        // 1- you have option to do something ex: (navigate Home page) (in android).
        // 2- you have option to do something,
        // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

        // 3- another option:
        if (hasFlowFinishedSuccessfully) {
          // do something for ios
          // do something for android
        }

        // for android:
        // The flow has finished. The API does not indicate whether the user
        // reviewed or not, or even whether the review dialog was shown. Thus, no
        // matter the result, we continue our app flow.

        // for ios
        // the flow lanuched successfully, The API does not indicate whether the user
        // reviewed or not, or he/she closed flow yet as android, Thus, no
        // matter the result, we continue our app flow.
      })
      .catch((error) => {
        //we continue our app flow.
        // we have some error could happen while lanuching InAppReview,
        // Check table for errors and code number that can return in catch.
        console.log(error);
      });
  });
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <SiteModal navigation={navigation}></SiteModal>
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
