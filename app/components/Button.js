import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button({
  onPress,
  text,
  variant = "primary",
  iconStart,
  iconEnd,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors[variant],
          borderWidth: variant !== "white" ? 0 : 1,
          ...style,
        },
      ]}>
      {iconStart && <Image source={iconStart} style={styles.icon} />}
      <Text
        style={[
          styles.text,
          {
            color:
              variant === "white" || variant === "third"
                ? colors.secondary
                : colors.white,
          },
        ]}>
        {text}
      </Text>
      {iconEnd && (
        <MaterialCommunityIcons name={iconEnd} size={20} color={colors.white} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    borderRadius: 17,
    borderColor: colors.third,
    margin: 2,
  },
  text: {
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
