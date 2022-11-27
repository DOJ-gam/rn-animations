import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useRef, useState } from "react";

const OpacityAnimation = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
  };
  const animatedStyles = {
    opacity: animation,
  };
  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyles]} />
    </TouchableWithoutFeedback>
  );
};

export default OpacityAnimation;

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: "red",
  },
});
