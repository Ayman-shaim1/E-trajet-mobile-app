import { StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.activeStyle} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={20} color='white' />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: "#4C4E52",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
