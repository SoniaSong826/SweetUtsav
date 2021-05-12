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
import AppText from "../components/AppText";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

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
          // We have data!!
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
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../assets/lightOrange_background.jpg")}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {this.state.dataCart.map((item, i) => {
            return (
              <Swipeable
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => this.handleDelete(i)} />
                )}
              >
                <View style={styles.card}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.food.images[0].src }}
                  />
                  <View>
                    <AppText style={styles.title}>{item.food.name}</AppText>
                    <AppText style={styles.price}>
                      ${" "}
                      {Math.round(item.food.price * item.quantity * 100) / 100}
                    </AppText>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => this.onChangeQual(i, false)}
                    >
                      <MaterialCommunityIcons
                        name="minus-circle"
                        size={30}
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                    <AppText style={styles.text}>{item.quantity}</AppText>
                    <TouchableOpacity
                      onPress={() => this.onChangeQual(i, true)}
                    >
                      <MaterialCommunityIcons
                        name="plus-circle"
                        size={30}
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Swipeable>
            );
          })}
          <AppButton style={styles.button} title="Check Out"></AppButton>
        </ScrollView>

        {/* <FlatList
        data={dataCart}
        style={styles.flatList}
        keyExtractor={(dataCart) => dataCart.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <CartItem
              title={item.title}
              price={item.price}
              amount={item.amount}
              option={item.option}
              image={item.image}
              renderRightAction={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            ></CartItem>
          </View>
        )}
        contentContainerStyle={{ alignItems: "center" }}
      ></FlatList>
      <AppText style={styles.total}>Total：$35.48</AppText>
      <AppButton style={styles.button} title="Check Out"></AppButton> */}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: width - 10,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 7,
  },
  container: {
    width: width,
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
  },
  itemDetailsContainer: {
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    flexWrap: "nowrap",
    color: colors.black,
    fontSize: 16,
    marginBottom: 3,
  },
  text: {
    color: colors.black,
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    marginHorizontal: 5,
  },
  backGround: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
