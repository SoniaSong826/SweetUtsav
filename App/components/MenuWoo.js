import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "./Card";
import routes from "../navigation/route";
import WooCommerceAPI from "react-native-woocommerce-api";

const WooCommerceApp = new WooCommerceAPI({
  url: "https://melbourne.sweetutsav.com.au/", // Your store URL
  ssl: true,
  consumerKey: "ck_c051b081b4f1dcecabddabfe83682fcc4ea49b72", // Your consumer secret
  consumerSecret: "cs_c4a1ee8a76a58cbb53b75a9704fc1806056c58b0", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v3", // WooCommerce WP REST API version
  queryStringAuth: true,
});

export default class MenuWoo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsedata: [],
      loading: false,
      page: 1,
      searchValue: "",
      base_url: WooCommerceApp.url,
      c_key: WooCommerceApp.consumerKey,
      c_secret: WooCommerceApp.consumerSecret,
    };

    WooCommerceApp.get("products", { per_page: "30" }, { status: "publish" })
      .then((data) => {
        this.setState({ responsedata: data }, () => {
          this.setState({ loading: false });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async componentDidMount() {
    await this.getCredentials();
    this.fetchProductList();
  }

  getCredentials = async () => {
    const credentials = await SecureStore.getItemAsync("credentials");
    const credentialsJson = JSON.parse(credentials);
    this.setState({
      base_url: credentialsJson.base_url,
      c_key: credentialsJson.c_key,
      c_secret: credentialsJson.c_secret,
    });
  };

  fetchProductList = () => {
    const { base_url, c_key, c_secret, page, searchValue } = this.state;
    let url = null;
    if (searchValue) {
      url = `${base_url}/wp-json/wc/v3/products?per_page=20&search=${searchValue}&page=${page}&consumer_key=${c_key}&consumer_secret=${c_secret}`;
    } else {
      url = `${base_url}/wp-json/wc/v3/products?per_page=20&page=${page}&consumer_key=${c_key}&consumer_secret=${c_secret}`;
    }
    console.log(url);
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            responsedata: this.state.responsedata.concat(responseJson),
            error: responseJson.code || null,
            loading: false,
            refreshing: false,
          });
        })
        .catch((error) => {
          this.setState({
            error,
            loading: false,
            refreshing: false,
          });
        });
    }, 1500);
  };
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
        data: [],
      },
      () => {
        this.fetchProductList();
      }
    );
  };
  handleLoadMore = () => {
    console.log("loading triggered");
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.fetchProductList();
      }
    );
  };
  handleSearch = (value) => {
    // console.log(value)
    this.setState(
      {
        searchValue: value,
        page: 1,
        refreshing: true,
        data: [],
      },
      () => {
        this.fetchProductList();
      }
    );
  };
  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        data={this.state.responsedata}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) =>
          item.images.length != 0 ? (
            <Card
              title={item.name}
              price={item.price}
              image={{ uri: item.images[0].src }}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS, { item })
              }
            ></Card>
          ) : (
            <Card
              title={item.name}
              price={item.price}
              image={require("../assets/icon_default.jpg")}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS, { item })
              }
            ></Card>
          )
        }
        columnWrapperStyle={{ justifyContent: "flex-start" }}
        numColumns={3}
        onEndReached={
          this.state.responsedata.length > 0 ? this.handleLoadMore : null
        }
        horizontal={false}
        contentContainerStyle={styles.content}
      ></FlatList>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
