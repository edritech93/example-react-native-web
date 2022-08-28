import React from "react";
import { TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";

Interface ButtonProps {
  onPress: () => void
  imageSource: ImageSourcePropType
}

export default function TestComponent({ onPress, imageSource }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.image}
        source={imageSource}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 28,
    height: 28,
  },
});