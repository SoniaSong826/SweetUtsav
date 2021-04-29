import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_100Thin,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
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
