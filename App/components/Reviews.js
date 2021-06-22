import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ReviewCard from "./ReviewCard";
import WooCommerceAPI from "react-native-woocommerce-api";

const WooCommerceApp = new WooCommerceAPI({
  url: "https://carolinesprings.sweetutsav.com.au/", // Your store URL
  ssl: false,
  consumerKey: "ck_6a971880cc3e358b3e892536128d515795bc1ca0", // Your consumer secret
  consumerSecret: "cs_d0355515970cabedf9ac1ac351dab8bb15435066", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v2", // WooCommerce WP REST API version
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
          keyExtractor={(item) => item.id}
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
    width: "90%",
  },
  emptyMessageStyle: {
    textAlign: "left",
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    marginBottom: 20,
  },
});
