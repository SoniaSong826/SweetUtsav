import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_100Thin,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import AllProductsScreen from "./App/screens/AllProductsScreen";
import ItemDetailsScreen from "./App/screens/ItemDetailsScreen";
import FunctionMenu from "./App/components/FunctionMenu";
import PostSlides from "./App/components/PostSlides";
import MainPageScreen from "./App/screens/MainPageScreen";
import CategoriesScreen from "./App/screens/CategoriesScreen";
import ContactUsScreen from "./App/screens/ContactUsScreen";
import AboutUsScreen from "./App/screens/AboutUsScreen";
import EventsScreen from "./App/screens/EventsScreen";
import LoginScreen from "./App/screens/LoginScreen";
import LocationScreen from "./App/screens/LocationScreen";
import CartScreen from "./App/screens/CartScreen";
import AppPicker from "./App/components/form/AppPicker";
import AppTextInput from "./App/components/AppTextInput";
import SignUpScreen from "./App/screens/SignUpScreen";
import AppButton from "./App/components/AppButton";
import ImageInput from "./App/components/ImageInput";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./App/navigation/AuthNavigator";
import MenuNavigator from "./App/navigation/MenuNavigator";
import navigationTheme from "./App/navigation/navigationTheme";


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer theme={navigationTheme}>
      <MenuNavigator></MenuNavigator>
    </NavigationContainer>
    //<ItemDetailsScreen itemName={"Balushahi"}></ItemDetailsScreen>
    //<AllProductsScreen/>
    //<WelcomeScreen />
    //<MainPageScreen/>
    //<CategoriesScreen/>
    //<ContactUsScreen/>
    //<LoginScreen></LoginScreen>
    //<EventsScreen></EventsScreen>
    //<LocationScreen></LocationScreen>
    //<CartScreen></CartScreen>
    //<SignUpScreen></SignUpScreen>
    //<View>
    //  <AppTextInput icon = "apps" placeholder="abc"></AppTextInput>
    //</View>
  );
}
