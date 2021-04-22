import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
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

export default function App() {
  const [imageURI, setImageURI] = useState();
  const requestPermission = async () => {
    const { granded } = ImagePicker.requestCameraPermissionsAsync();
    Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  };
  if (!granted) {
    alert("You need to enable premission to access the library.");
  }
  useEffect =
    (() => {
      requestPermission();
    },
    []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageURI(result.uri);
    } catch (error) {
      console.log("error when read the image");
    }
  };
  return (
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

    <View>
      <ImageInput
        imageURI={imageURI}
        onChangeImage={(uri) => setImageURI(uri)}
      ></ImageInput>
    </View>
  );
}
