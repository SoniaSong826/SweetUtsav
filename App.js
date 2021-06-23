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
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import mainContext, { doSome } from "./App/context/Context";
import colors from "./App/config/colors";
import LoginScreen from "./App/screens/LoginScreen";
import MainPageScreen from "./App/screens/MainPageScreen";
import AllProductsScreen from "./App/screens/AllProductsScreen";
import CategoriesScreen from "./App/screens/CategoriesScreen";
import LocationScreen from "./App/screens/LocationScreen";
import EventsScreen from "./App/screens/EventsScreen";
import CompleteApplicationScreen from "./App/screens/CompleteApplicationScreen";
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
import CareerApplyScreen from "./App/screens/CareerApplyScreen";

export default function App({ route }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_100Thin,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  const Stack = createStackNavigator();

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
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
        <>
          <Stack.Screen
            name="Pick City"
            component={CityScreen}
            options={() => ({
              headerLeftContainerStyle: { alignItems: "center" },
              headerTitle: "Choose Your City",
            })}
          />
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
            name="Franchise Apply"
            component={CompleteApplicationScreen}
            options={{
              title: "Franchise Apply",
            }}
          />
          <Stack.Screen
            name="Career Apply"
            component={CareerApplyScreen}
            options={{
              title: "Career Apply",
            }}
          />
          <Stack.Screen
            name="Follow Us"
            component={AboutUsScreen}
            options={{
              title: "About Us",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
