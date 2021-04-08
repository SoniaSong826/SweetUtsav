import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';
import AllProductsScreen from './App/screens/AllProductsScreen';
import ItemDetailsScreen from './App/screens/ItemDetailsScreen';
import FunctionMenu from './App/components/FunctionMenu';
import PostSlides from './App/components/PostSlides'
import MainPageScreen from './App/screens/MainPageScreen';
import CategoriesScreen from './App/screens/CategoriesScreen';
import ContactUsScreen from './App/screens/ContactUsScreen';
import AboutUsScreen from './App/screens/AboutUsScreen';


export default function App() {

  return (
    //<ItemDetails itemName={"Balushahi"}></ItemDetails>
    //<AllProducts/>
    //<WelcomeScreen />
    //<FunctionMenu/>
    //<PostSlides/>
    //<MainPage/>
    //<CategoriesScreen/>
    //<ContactUsScreen/>
    <AboutUsScreen/>
  );
}


