import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import colors from "../config/colors";
import MainPageScreen from "../screens/MainPageScreen";
import AllProductsScreen from "../screens/AllProductsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import LocationScreen from "../screens/LocationScreen";
import EventsScreen from "../screens/EventsScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import CartScreen from '../screens/CartScreen';
import PoliciesScreen from "../screens/PoliciesScreen";

const Stack = createStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={MainPageScreen}
      options={{
        headerShown: false,
        title: "Home",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="My Cart"
      component={CartScreen}
      options={{
        title: "My Cart",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Order Now"
      component={AllProductsScreen}
      options={{
        title: "All Products",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "Categories",
        headerTransparent: true,
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="My Account"
      component={SignUpScreen}
      options={{
        title: "My Account",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Locations"
      component={LocationScreen}
      options={{
        title: "Locations",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Events"
      component={EventsScreen}
      options={{
        title: "Events",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Policies"
      component={PoliciesScreen}
      options={{
        title: "Policies",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Contact Us"
      component={ContactUsScreen}
      options={{
        title: "Contact Us",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
    <Stack.Screen
      name="Follow Us"
      component={AboutUsScreen}
      options={{
        title: "Follow Us",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerBackTitleStyle: {
          fontFamily: "Roboto_400Regular",
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
      }}
    />
  </Stack.Navigator>
);

export default MenuNavigator;
