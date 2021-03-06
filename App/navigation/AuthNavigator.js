import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import colors from "../config/colors";
import MainPageScreen from "../screens/MainPageScreen";
import AllProductsScreen from "../screens/AllProductsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import LocationScreen from "../screens/LocationScreen";
import EventsScreen from "../screens/EventsScreen";
import CompleteApplicationScreen from "../screens/CompleteApplicationScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import CartScreen from "../screens/CartScreen";
import PoliciesScreen from "../screens/PoliciesScreen";
import CartButton from "../components/CartButton";
import LocationSelecterView from "../components/LocationSelecterView";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import CategoryProductScreen from "../screens/CategoryProductScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = (isLogged) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerBackTitle: "Back",
      headerStyle: {
        backgroundColor: colors.secondary,
      },
      headerTitleStyle: {
        fontFamily: "Roboto_700Bold",
        fontSize: 22,
        alignSelf: "center",
      },
      headerTintColor: colors.white,
    }}
  >
    {false == false ? (
      <>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </>
    ) : (
      <>
        <Stack.Screen
          name="Home"
          component={MainPageScreen}
          options={({ navigation }) => ({
            headerLeftContainerStyle: { alignItems: "center" },
            title: "Home",
            headerTitle: "Sweet UTSAV",
            headerLeft: () => <LocationSelecterView></LocationSelecterView>,
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
            title: "All Products",
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
          }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Categories",
          }}
        />
        <Stack.Screen
          name="My Account"
          component={MyAccountScreen}
          options={{
            title: "My Account",
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
          name="Locations"
          component={LocationScreen}
          options={{
            title: "Locations",
          }}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{
            title: "Events",
          }}
        />
        <Stack.Screen
          name="Policies"
          component={PoliciesScreen}
          options={{
            title: "Policies",
          }}
        />
        <Stack.Screen
          name="Contact Us"
          component={CompleteApplicationScreen}
          options={{
            title: "Contact Us",
          }}
        />
        <Stack.Screen
          name="Follow Us"
          component={AboutUsScreen}
          options={{
            title: "Follow Us",
          }}
        />
        <Stack.Screen
          name="Item Details"
          component={ItemDetailsScreen}
          options={({ route, navigation }) => ({
            title: route.params["item"].name,
            headerRight: () => (
              <CartButton
                onPress={() => navigation.navigate("My Cart")}
                title="My Cart"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Category Products"
          component={CategoryProductScreen}
          options={({ route }) => ({
            title: route.params["categoryName"],
            headerRight: () => (
              <CartButton
                onPress={() => navigation.navigate("My Cart")}
                title="My Cart"
              />
            ),
          })}
        />
      </>
    )}
  </Stack.Navigator>
);

export default AuthNavigator;
