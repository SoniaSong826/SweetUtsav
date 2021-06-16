import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import AppText from "../components/AppText";
import mainContext from "../context/Context";
import colors from "../config/colors";
import OrderItem from "../components/OrderItem";
import PersonalDetails from "../components/PersonalDetails";
import AppButton from "../components/AppButton";

const windowWidth = Dimensions.get("window").width;
const user = {
  photo: require("../assets/icon.png"),
  firstName: "Sonia",
  lastName: "Song",
  email: "sonia-826@outlook.com",
};

// const initialOrders = [
//   {
//     id: 1,
//     title: "Balushahi...",
//     dateTime: "8:00 pm 29 Mar 2021",
//     price: "$15.50",
//     image: require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg"),
//   },
//   {
//     id: 2,
//     title: "Anjeer Pista Slice...",
//     dateTime: "5:00 pm 29 Apr 2021",
//     price: "$19.98",
//     image: require("../assets/FoodExample/DrySweets/Anjeer-Pista-Slice-2.jpg"),
//   },
// ];

function MyAccountScreen({ navigation }) {
  const { userProfile, loggingIn, doLogout, error } = useContext(mainContext);
  const [orders, setOrders] = useState(initialOrders);
  return (
    console.log(userProfile),
    (
      <ImageBackground
        style={styles.backGround}
        source={require("../assets/white_green_background.jpg")}
      >
        <View style={styles.container}>
          <PersonalDetails
            photo={userProfile && userProfile.avatar}
            name={userProfile && userProfile.data.user_login}
          ></PersonalDetails>
          <AppButton
            icon="wordpress"
            icon_size={35}
            onPress={() => doLogout()}
            disabled={loggingIn}
            title="Logout"
          ></AppButton>
        </View>

        {/* <AppText style={styles.title}>Previous Orders</AppText>
      <FlatList
        data={orders}
        style={styles.flatList}
        keyExtractor={(order) => order.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <OrderItem
              title={item.title}
              price={item.price}
              dateTime={item.dateTime}
              image={item.image}
              onPress={() => console.log("sss")}
            ></OrderItem>
          </View>
        )}
        contentContainerStyle={{ alignItems: "center" }}
      ></FlatList> */}
      </ImageBackground>
    )
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: colors.lightGray,
    borderWidth: 1,
    overflow: "hidden",
  },
  content: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    width: "90%",
  },
  title: {
    color: colors.secondary,
    fontSize: 23,
    borderColor: colors.lightGray,
    borderTopWidth: 2,
    marginTop: 40,
    textAlign: "center",
  },
});
export default MyAccountScreen;
