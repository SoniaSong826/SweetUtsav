import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AllProductsScreen} />
    <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
