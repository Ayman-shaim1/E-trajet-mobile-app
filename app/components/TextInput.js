import { StyleSheet, View, TextInput as RNTextInput } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TextInput({ icon, ...otherProps }) {
  return (
    <View style={[styles.container]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <RNTextInput
        placeholderTextColor='#adb5bd'
        {...otherProps}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 5,
    flexDirection: "row",
    color: "#55595c",
    backgroundColor: "#f7f7f9",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: "100%",
    height: "100%",
  },
});
