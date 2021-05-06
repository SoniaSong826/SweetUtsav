import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Card from "./Card";
import routes from "../navigation/route";
import WooCommerceAPI from "react-native-woocommerce-api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Formik } from "formik";
import CategoryButton from "./CategoryButton";
const windowWidth = Dimensions.get("window").width;

const categories = [
  { id: 95, title: "All Products", color: "primary" },
  { id: 77, title: "Fridge Sweets", color: "secondary" },
  { id: 78, title: "Dry Sweets", color: "secondary" },
  { id: 79, title: "Snacks", color: "secondary" },
  { id: 100, title: "Gift Boxes", color: "secondary" },
  { id: 80, title: "Platters", color: "secondary" },
];

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
    ((this.categoryVisible = props.categoryVisible),
    (this.searchBarVisible = props.searchBarVisible)),
      (this.state = {
        data: [],
        loading: true,
        page: 1,
        refreshing: false,
        searchValue: "",
        category: props.category,
        base_url: WooCommerceApp.url,
        c_key: WooCommerceApp.consumerKey,
        c_secret: WooCommerceApp.consumerSecret,
      });

    WooCommerceApp.get("products", {
      category: this.state.category,
      per_page: 30,
      status: "publish",
    })
      .then((newData) => {
        this.setState({ data: newData }, () => {
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
    const {
      base_url,
      c_key,
      c_secret,
      page,
      searchValue,
      category,
    } = this.state;
    let url = null;
    if (searchValue) {
      console.log(url);
      url = `${base_url}/wp-json/wc/v3/products?status=publish&per_page=30&search=${searchValue}&page=${page}&consumer_key=${c_key}&consumer_secret=${c_secret}`;
    } else {
      console.log(url);
      url = `${base_url}/wp-json/wc/v3/products?status=publish&per_page=30&category=${category}&page=${page}&consumer_key=${c_key}&consumer_secret=${c_secret}`;
    }
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: this.state.data.concat(responseJson),
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
    console.log("uuoh", value);
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

  handleCategory = (value) => {
    this.setState(
      {
        category: value,
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
      <>
        {this.searchBarVisible ? (
          <Formik
            initialValues={{ keywords: "" }}
            onSubmit={(values) => {
              this.handleSearch(values.keywords);
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.inputBox}
                    label="keywords"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.keywords}
                    placeholder="Search Here"
                    onChangeText={handleChange("keywords")}
                  ></TextInput>
                  <TouchableOpacity
                    style={styles.squareButton}
                    onPress={handleSubmit}
                  >
                    <MaterialCommunityIcons
                      name="magnify"
                      size={35}
                      color={colors.white}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        ) : null}
        {this.categoryVisible ? (
          <View style={{ height: 50 }}>
            <FlatList
              contentContainerStyle={styles.flatlist}
              data={categories}
              keyExtractor={(category) => category.id.toString()}
              renderItem={({ item }) => (
                <CategoryButton
                  title={item.title}
                  key={item.id}
                  color={item.color}
                  onPress={() => this.handleCategory(item.id)}
                />
              )}
              horizontal={true}
            ></FlatList>
          </View>
        ) : null}

        <FlatList
          data={this.state.data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) =>
            item.images.length == 0 ? (
              <Card
                title={item.name}
                price={item.price}
                image={require("../assets/icon_default.jpg")}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, { item })
                }
              ></Card>
            ) : (
              <Card
                title={item.name}
                price={item.price}
                image={{ uri: item.images[0].src }}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, { item })
                }
              ></Card>
            )
          }
          columnWrapperStyle={{ justifyContent: "flex-start" }}
          numColumns={3}
          onEndReached={this.state.data.length > 0 ? this.handleLoadMore : null}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          horizontal={false}
          contentContainerStyle={styles.content}
        ></FlatList>
      </>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  flatlist: {
    paddingLeft: 10,
  },
  searchContainer: {
    width: windowWidth,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginLeft: 2,
  },
  inputBox: {
    flex: 1,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 7,
    height: 45,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  squareButton: {
    backgroundColor: colors.secondary,
    height: 35,
    width: 35,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});
