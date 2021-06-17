import React, { useState, Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import CartItem from "../components/CartItem";
import AppText from "../components/AppText";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      totalPrice: 0,
      totalAmount: 0,
    };
  }
  handleDelete = (i) => {
    const dataCar = this.state.dataCart;
    dataCar.splice(i, 1);
    this.setState({ dataCart: dataCar });
    AsyncStorage.removeItem("cart");
    AsyncStorage.setItem("cart", JSON.stringify(dataCar));

    AsyncStorage.getItem("cart").then((cart) => {
      const cartfood = JSON.parse(cart);
      this.setState({ dataCart: cartfood });
      let addAmount = 0;
      let addPrice = 0;
      for (let i in this.state.dataCart) {
        addAmount = addAmount + parseInt(this.state.dataCart[i].quantity);
        addPrice =
          addPrice +
          parseFloat(this.state.dataCart[i].price) *
            parseFloat(this.state.dataCart[i].quantity);
      }
      this.setState({ totalPrice: addPrice });
      this.setState({ totalAmount: addAmount });
    });
  };

  componentDidMount() {
    AsyncStorage.getItem("cart")
      .then((cart) => {
        if (cart !== null) {
          const cartfood = JSON.parse(cart);
          this.setState({ dataCart: cartfood });
        }
        this.state.totalAmount = 0;
        this.state.totalPrice = 0;

        for (let i in this.state.dataCart) {
          const addAmount =
            this.state.totalAmount + parseInt(this.state.dataCart[i].quantity);
          const addPrice =
            this.state.totalPrice +
            parseFloat(this.state.dataCart[i].price) *
              parseFloat(this.state.dataCart[i].quantity);
          this.setState({ totalPrice: addPrice });
          this.setState({ totalAmount: addAmount });
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  onChangeQual(i, type) {
    const dataCar = this.state.dataCart;
    let cantd = parseInt(dataCar[i].quantity);

    if (type) {
      cantd = cantd + 1;
      dataCar[i].quantity = cantd;
      this.setState({ dataCart: dataCar });
    } else if (type == false && cantd >= 2) {
      cantd = cantd - 1;
      dataCar[i].quantity = cantd;
      this.setState({ dataCart: dataCar });
    } else if (type == false && cantd == 1) {
      dataCar.splice(i, 1);
      this.setState({ dataCart: dataCar });
    }
    AsyncStorage.removeItem("cart");
    AsyncStorage.setItem("cart", JSON.stringify(dataCar));

    this.state.totalAmount = 0;
    this.state.totalPrice = 0;

    AsyncStorage.getItem("cart").then((cart) => {
      const cartfood = JSON.parse(cart);
      this.setState({ dataCart: cartfood });
    });

    let addAmount = 0;
    let addPrice = 0;
    for (let i in this.state.dataCart) {
      addAmount = addAmount + parseInt(this.state.dataCart[i].quantity);
      addPrice =
        addPrice +
        parseFloat(this.state.dataCart[i].price) *
          parseFloat(this.state.dataCart[i].quantity);
    }
    this.setState({ totalPrice: addPrice });
    this.setState({ totalAmount: addAmount });
  }
  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../assets/lightOrange_background.jpg")}
      >
        <ScrollView contentContainerStyle={{ height: height }}>
          {this.state.dataCart.map((item, i) => {
            return (
              <CartItem
                title={item.name}
                price={item.price}
                amount={item.quantity}
                option={item.option.label}
                image={item.image}
                renderRightAction={() => this.handleDelete(i)}
                minusAction={() => this.onChangeQual(i, false)}
                plusAction={() => this.onChangeQual(i, true)}
              ></CartItem>
            );
          })}
        </ScrollView>

        <View style={styles.buttomRound}>
          <View style={styles.textContainer}>
            <AppText style={styles.text}>
              Amount: {this.state.totalAmount}
            </AppText>
            <AppText style={styles.text}>
              Total: $ {Math.round(this.state.totalPrice * 100) / 100}
            </AppText>
          </View>
          <AppButton
            onPress={() => navigation.navigate("Address")}
            title="Check Out"
          ></AppButton>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
  buttomRound: {
    width: width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 0,
    shadowOffset: { height: -3 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
});
