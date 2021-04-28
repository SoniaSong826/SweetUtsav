import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllProductsScreen from "../screens/AllProductsScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="All Products" component={AllProductsScreen} />
    <Stack.Screen name="Item Details" component={ItemDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;