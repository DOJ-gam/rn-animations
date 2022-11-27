import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import OpacityAnimation from "../components/01-opacity";

const AppScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OpacityAnimation />
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
