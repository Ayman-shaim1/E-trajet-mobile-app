import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button({
  onPress,
  text,
  variant = "primary",
  iconStart,
  iconEnd,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[variant] }]}>
      {iconStart && (
        <MaterialCommunityIcons
          name={iconStart}
          size={20}
          color={colors.white}
        />
      )}
      <Text style={styles.text}>{text}</Text>
      {iconEnd && (
        <MaterialCommunityIcons name={iconEnd} size={20} color={colors.white} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    marginHorizontal: 5,
  },
});
