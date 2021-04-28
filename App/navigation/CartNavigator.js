import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import colors from "../config/colors";
import CartScreen from "../screens/CartScreen";
import MainPageScreen from "../screens/MainPageScreen";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="My Cart"
      component={CartScreen}
      options={{
        title: "My Cart",
        headerStyle: {
          backgroundColor: colors.darkSecondary,
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

export default CartNavigator;
