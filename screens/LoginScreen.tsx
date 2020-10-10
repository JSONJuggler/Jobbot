import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import globalStyles, { COLORS } from "../styles/styles"
import { LoginScreenProps } from "../app";

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Settings")
      }
      style={[globalStyles.button, styles.button]}
    >
      <Text style={styles.buttonText}>
        Go to the settings screen
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.main

  },
  buttonText: {
    color: COLORS.white
  }
})

export default LoginScreen