import React, { useState, Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import routes from "../navigation/route";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import CartItem from "../components/CartItem";

const width = Dimensions.get("window").width;

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
    };
  }
  handleDelete = (i) => {
    const dataCar = this.state.dataCart;
    dataCar.splice(i, 1);
    this.setState({ dataCart: dataCar });
    AsyncStorage.removeItem("cart");
    AsyncStorage.setItem("cart", JSON.stringify(dataCar));
  };

  componentDidMount() {
    AsyncStorage.getItem("cart")
      .then((cart) => {
        if (cart !== null) {
          const cartfood = JSON.parse(cart);
          this.setState({ dataCart: cartfood });
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
  }
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../assets/lightOrange_background.jpg")}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {this.state.dataCart.map((item, i) => {
            return (
              <CartItem
                title={item.food.name}
                price={item.food.price}
                amount={item.quantity}
                option={item.option}
                image={item.food.images[0].src}
                renderRightAction={() => this.handleDelete(i)}
                minusAction={() => this.onChangeQual(i, false)}
                plusAction={() => this.onChangeQual(i, true)}
              ></CartItem>
            );
          })}
          <AppButton style={styles.button} title="Check Out"></AppButton>
        </ScrollView>
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
  container:{
    width:width,
    alignItems:"center"
  }
});
