import React from "react";
import { Text as RNText } from "react-native";
import styles from "../config/styles";

export default function Text({ as, children }) {
  return <RNText style={{ ...styles.text[as] }}>{children}</RNText>;
}

// const styles = StyleSheet.create({});
