import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Menu from "../components/Menu";
import AppTextInput from "../components/AppTextInput";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/form/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import CategoryButton from "../components/CategoryButton";

const categories = [
  { id: 1, title: "All Products", color: "primary" },
  { id: 2, title: "Fridge Sweets", color: "secondary" },
  { id: 3, title: "Dry Sweets", color: "secondary" },
  { id: 4, title: "Snacks", color: "secondary" },
  { id: 5, title: "Gift Boxes", color: "secondary" },
  { id: 6, title: "Platters", color: "secondary" },
];

function AllProductsScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar title="All Products"></TopBar>
      <Formik
        initialValues={{ keywords: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.inputBox}
                name="keywords"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search Here"
                onChangeText={handleChange("keywords")}
              ></TextInput>
              <MaterialCommunityIcons
                name="magnify"
                size={30}
                color={colors.secondary}
                style={styles.icon}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
      <FlatList
        style={styles.flatlist}
        data={categories}
        keyExtractor={(category) => category.id.toString()}
        renderItem={({ item }) => (
          <CategoryButton
            style={styles.itemButton}
            title={item.title}
            color={item.color}
          />
        )}
        horizontal={true}
      ></FlatList>
      <Menu></Menu>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  flatlist: {
    paddingHorizontal: 10,
  },
  content: {
    alignSelf: "flex-start",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 15,
    marginLeft: 2,
  },
  inputBox: {
    flex: 1,
    marginLeft: 15,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 7,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
});

export default AllProductsScreen;
