import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./App/navigation/navigationTheme";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_100Thin,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import React, { useEffect, useState, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { loginUrl, store } from "./App/constants/const";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import mainContext, { doSome } from "./App/context/Context";
import colors from "./App/config/colors";
import LoginScreen from "./App/screens/LoginScreen";
import MainPageScreen from "./App/screens/MainPageScreen";
import AllProductsScreen from "./App/screens/AllProductsScreen";
import CategoriesScreen from "./App/screens/CategoriesScreen";
import LocationScreen from "./App/screens/LocationScreen";
import EventsScreen from "./App/screens/EventsScreen";
import ContactUsScreen from "./App/screens/ContactUsScreen";
import AboutUsScreen from "./App/screens/AboutUsScreen";
import MyAccountScreen from "./App/screens/MyAccountScreen";
import CartScreen from "./App/screens/CartScreen";
import PoliciesScreen from "./App/screens/PoliciesScreen";
import CartButton from "./App/components/CartButton";
import ItemDetailsScreen from "./App/screens/ItemDetailsScreen";
import SignUpScreen from "./App/screens/SignUpScreen";
import CategoryProductScreen from "./App/screens/CategoryProductScreen";
import LogoTitle from "./App/components/LogoTitle";
import CityScreen from "./App/screens/CityScreen";
import LocationSelecter from "./App/components/LocationSelecter";
import AddressScreen from "./App/screens/AddressScreen";

export default function App({route}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const [loggingIn, setloggingIn] = useState(false);
  const [error, setError] = useState(null);

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_100Thin,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  useEffect(() => {
    AsyncStorage.getItem("userProfile").then((value) => {
      if (value) {
        setUserProfile(JSON.parse(value)),
          setIsLoading(false),
          setIsLogged(true);
      } else {
        setIsLoading(false), setIsLogged(false);
      }
    });
  }, []);

  const doLogout = async () => {
    try {
      await AsyncStorage.removeItem("userProfile");
      setloggingIn(true);
      setUserProfile(null);
      setloggingIn(false);
      setIsLogged(false);
      return true;
    } catch (exception) {
      return false;
    }
  };

  const doLogin = async (email, password) => {
    setloggingIn(true);
    setError(null);
    let formData = new FormData();
    formData.append("type", "login");
    formData.append("email", email);
    formData.append("password", password);
    try {
      let response = await fetch(loginUrl, {
        method: "POST",
        body: formData,
      });
      let json = await response.json();
      console.log(json);
      if (json.status != false) {
        setError(null);
        try {
          await AsyncStorage.setItem(
            "userProfile",
            JSON.stringify({
              isLoggedIn: json.status,
              authToken: json.token,
              id: json.data.id,
              email:json.data.email,
              name: json.data.user_login,
              avatar: json.avatar,
            })
          );
        } catch {
          setError("Error storing data on device");
        }
        setUserProfile({
          isLoggedIn: json.status,
          authToken: json.token,
          id: json.data.id,
          name: json.data.user_login,
          avatar: json.avatar,
        });
        setIsLogged(true);
        setUserProfile(json);
        setUserToken(json.token);
      } else {
        setIsLogged(false);
        setError("Login Failed");
      }
      setloggingIn(false);
    } catch (error) {
      setError("Error connecting to server");
      setloggingIn(false);
    }
  };

  const wContext = {
    userProfile: userProfile,
    loggingIn: loggingIn,
    error: error,
    doSome: () => {
      doSome();
    },
    doLogin: (email, password) => {
      doLogin(email, password);
    },
    doLogout: () => {
      doLogout();
    },
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }
  const Stack = createStackNavigator();

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <mainContext.Provider value={wContext}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName="Login"
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
          {isLogged == false ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={() => ({
                  headerLeftContainerStyle: { alignItems: "center" },
                  headerTitle: "One Step to Go...",
                  headerStyle: {
                    backgroundColor: colors.primary,
                  },
                })}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={MainPageScreen}
                options={({ navigation, route }) => ({
                  headerLeftContainerStyle: { alignItems: "center" },
                  title: "Home",
                  headerTitle: (props) => <LogoTitle {...props} />,
                  headerLeft: () => (
                    <LocationSelecter
                      onPress={() => navigation.navigate("Pick City")}
                    ></LocationSelecter>
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
                name="Pick City"
                component={CityScreen}
                options={() => ({
                  headerLeftContainerStyle: { alignItems: "center" },
                  headerTitle: "Choose Your City",
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
                  title: "Join Us",
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
                component={ContactUsScreen}
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

              <Stack.Screen
                name="Address"
                component={AddressScreen}
                options={() => ({
                  headerStyle: {
                    backgroundColor: colors.primary,
                  },
                  headerLeftContainerStyle: { alignItems: "center" },
                  headerTitle: "Almost There",
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </mainContext.Provider>
  );
}
