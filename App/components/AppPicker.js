import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Constants from "expo-constants";
import AppText from "./AppText";
import { FlatList } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  style,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={StyleSheet.flatten([styles.container, style])}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.lightGray}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.lightGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.safeArea}>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              ></PickerItem>
            )}
          ></FlatList>
        </View>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    width: "100%",
    height: 45,
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: colors.lightGray,
  },
  safeArea: {
    marginTop: Constants.statusBarHeight,
  },
});
export default AppPicker;
