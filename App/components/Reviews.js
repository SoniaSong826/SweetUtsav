import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ReviewCard from "./ReviewCard";
import WooCommerceAPI from "react-native-woocommerce-api";

const WooCommerceApp = new WooCommerceAPI({
  url: "https://melbourne.sweetutsav.com.au/", // Your store URL
  ssl: true,
  consumerKey: "ck_c051b081b4f1dcecabddabfe83682fcc4ea49b72", // Your consumer secret
  consumerSecret: "cs_c4a1ee8a76a58cbb53b75a9704fc1806056c58b0", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v2", // WooCommerce WP REST API version, Remember to use v2 for reviews
  queryStringAuth: true,
});

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      base_url: WooCommerceApp.url,
      c_key: WooCommerceApp.consumerKey,
      c_secret: WooCommerceApp.consumerSecret,
    };

    WooCommerceApp.get("products/" + props.productID + "/reviews", {})
      .then((newData) => {
        this.setState({ data: newData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <ReviewCard
              name={item.name}
              time={item.date_created.substring(0, 10)}
              review={item.review}
              image={require("../assets/icon_default.jpg")}
            ></ReviewCard>
          )}
          ListHeaderComponent={() =>
            !this.state.data.length ? (
              <Text style={styles.emptyMessageStyle}>No Reviews</Text>
            ) : null
          }
        ></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"90%",
  },
  emptyMessageStyle: {
      textAlign:"left",
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    marginBottom:20,
  },
});
