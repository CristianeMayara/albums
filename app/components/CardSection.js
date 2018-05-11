import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    padding: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: "row",
    position: "relative",
    justifyContent: "flex-start"
  }
};

export default CardSection;
