import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

export default function App() {
  return (
    //<ItemDetailsScreen itemName={"Balushahi"}></ItemDetailsScreen>
    <AllProductsScreen/>
    //<WelcomeScreen />
    //<FunctionMenu/>
    //<PostSlides/>
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
