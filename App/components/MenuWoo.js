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
import routes from "../screens/route";
import WooCommerceAPI from "react-native-woocommerce-api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Formik } from "formik";
import CategoryButton from "./CategoryButton";
const windowWidth = Dimensions.get("window").width;

const categories = [
  { id: 95, title: "All Products", color: "primary" },
  { id: 78, title: "Sweets", color: "secondary" },
  { id: 77, title: "Desserts", color: "secondary" },
  { id: 79, title: "Snacks", color: "secondary" }, 
  { id: 112, title: "Savouries", color: "secondary" },
  { id: 114, title: "Gift Boxes", color: "secondary" }, 
  { id: 80, title: "Gift Platters", color: "secondary" },
];

const WooCommerceApp = new WooCommerceAPI({
  url: "https://carolinesprings.sweetutsav.com.au/", // Your store URL
  ssl: false,
  consumerKey: "ck_6a971880cc3e358b3e892536128d515795bc1ca0", // Your consumer secret
  consumerSecret: "cs_d0355515970cabedf9ac1ac351dab8bb15435066", // Your consumer secret
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
        selectedItem: 95,
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
      per_page: 10,
      orderby: "menu_order",
      page: this.state.page,
      order:"asc",
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

  fetchProductList = () => {
    if (this.state.searchValue) {
      WooCommerceApp.get("products", {
        search: this.state.searchValue,
        per_page: 10,
        orderby: "menu_order",
        page: this.state.page,
        status: "publish",
        order: "asc",
      })
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
    } else {
      WooCommerceApp.get("products", {
        category: this.state.category,
        orderby: "menu_order",
        per_page: 10,
        order: "asc",
        page: this.state.page,
        status: "publish",
      })
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
    }
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

  onPressHandler(id) {
    this.setState({ selectedItem: id });
  }

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
                  color={
                    this.state.selectedItem === item.id
                      ? "primary"
                      : "secondary"
                  }
                  onPress={() => {
                    this.onPressHandler(item.id), this.handleCategory(item.id);
                  }}
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
            item.images == undefined || item.images.length == 0 ? (
              <Card
                title={item.name}
                price={item.price}
                image={require("../assets/icon_default.jpg")}
                onPress={() =>
                  navigation.push(routes.LISTING_DETAILS, { item })
                }
              ></Card>
            ) : (
              <Card
                title={item.name}
                price={item.price}
                image={{ uri: item.images[0].src }}
                onPress={() =>
                  navigation.push(routes.LISTING_DETAILS, { item })
                }
              ></Card>
            )
          }
          columnWrapperStyle={{ justifyContent: "flex-start" }}
          numColumns={3}
          onMomentumScrollEnd={this.handleLoadMore}
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
