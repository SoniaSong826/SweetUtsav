import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
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
import CartScreen from "../screens/CartScreen";
import PoliciesScreen from "../screens/PoliciesScreen";
import CartButton from "../components/CartButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LocationSelecter from "../components/LocationSelecter";
import LocationSelecterView from "../components/LocationSelecterView";

const Stack = createStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={MainPageScreen}
      options={({ navigation }) => ({
        headerLeftContainerStyle: { alignItems: "center" },
        title: "Sweet UTSAV",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 22,
        },
        headerLeft: () => (
          <LocationSelecterView></LocationSelecterView>
        ),
        headerRight: () => (
          <CartButton
            onPress={() => navigation.navigate("My Cart")}
            title="My Cart"
          />
        ),
      })}
    />
    <Stack.Screen
      name="Order Now"
      component={AllProductsScreen}
      options={({ navigation }) => ({
        headerBackTitle: "Home",
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
        headerRight: () => (
          <CartButton
            onPress={() => navigation.navigate("My Cart")}
            title="My Cart"
          />
        ),
      })}
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
      name="Categories"
      component={CategoriesScreen}
      options={{
        headerBackTitle: "Home",
        title: "Categories",
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
      name="My Account"
      component={SignUpScreen}
      options={{
        headerBackTitle: "Home",
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
        headerBackTitle: "Home",
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
        headerBackTitle: "Home",
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
        headerBackTitle: "Home",
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
        headerBackTitle: "Home",
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
        headerBackTitle: "Home",
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
