import React, { useState } from "react";
import { FlatList, View, StyleSheet, Modal } from "react-native";
import colors from "../config/colors";
import SitePicker from "./SitePicker";
import AppText from "./AppText";

const sweetCities = [
  {
    id: 1,
    title: "Melbourne Corporate",
    acronym: "COP",
    img: require("../assets/CityLogo/Melbourne.jpg"),
    url: "https://melbourne.sweetutsav.com.au/",
  },
  {
    id: 2,
    title: "Tarneit",
    acronym: "TAR",
    img: require("../assets/CityLogo/Melbourne.jpg"),
    url: "https://tarneit.sweetutsav.com.au/",
  },
  {
    id: 3,
    title: "Caroline Springs",
    acronym: "CSP",
    img: require("../assets/CityLogo/Melbourne.jpg"),
    url: "https://carolinesprings.sweetutsav.com.au/",
  },
  {
    id: 4,
    title: "Lyndhurst",
    acronym: "LYN",
    img: require("../assets/CityLogo/Melbourne.jpg"),
    url: "https://lyndhurst.sweetutsav.com.au/",
  },
  // {
  // 	id: 5,
  // 	title: 'Hoppers Crossing',
  // 	acronym: 'HOP',
  // 	img: require('../assets/CityLogo/Melbourne.jpg'),
  // 	url:
  // },
  {
    id: 5,
    title: "Seven Hills",
    acronym: "SYD",
    img: require("../assets/CityLogo/Sydney.jpg"),
    url: "https://sydney.sweetutsav.com.au/",
  },
  {
    id: 6,
    title: "Browns Plains",
    acronym: "BRI",
    img: require("../assets/CityLogo/Brisbane.jpg"),
    url: "https://brownsplains.sweetutsav.com.au/",
  },
];

function SiteModal({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <React.Fragment>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.safeArea}>
          <View style={styles.inner}>
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>Choose Your Outlet</AppText>
            </View>
            <FlatList
              data={sweetCities}
              style={styles.flatList}
              contentContainerStyle={{ alignItems: "center" }}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <SitePicker
                  title={item.title}
                  onPress={() => {
                    setModalVisible(false);
                    global.userCity = item.acronym;
                    global.storeUrl = item.url;
                    navigation.navigate("Home");
                  }}
                ></SitePicker>
              )}
            ></FlatList>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
  },
  titleContainer: {
    backgroundColor: colors.secondary,
  },
  flatList: {
    flexGrow: 0,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
    marginVertical: 5,
  },
});
export default SiteModal;
