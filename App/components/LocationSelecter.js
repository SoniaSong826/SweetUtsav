import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import CityPicker from "./CityPicker";
import { SafeAreaView } from "react-native-safe-area-context";

function LocationSelecter({
  items,
  selectedItem,
  onSelectItem,
  PickerItemComponent = CityPicker,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="map-marker"
            size={25}
            color={colors.white}
          />
          <Text style={styles.locationText}>{selectedItem.acronym}</Text>
        </View>
      </TouchableWithoutFeedback>
     
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          style={styles.modal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.text}>Choose Your City:</Text>
              <FlatList
                data={items}
                contentContainerStyle={styles.flatList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <PickerItemComponent
                    img={item.img}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}
                  ></PickerItemComponent>
                )}
              ></FlatList>
            </View>
          </View>
        </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  locationText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 13,
    color: colors.white,
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 22,
    paddingVertical: 5,
    color: colors.primary,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    height: 190,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 7,
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  flatList: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 0,
  },
});
export default LocationSelecter;
