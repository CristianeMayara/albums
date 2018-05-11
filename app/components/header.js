import React from "react";
import { View, Text } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 40,
    elevation: 5,
    shadowOpacity: 0.2,
    alignItems: "center",
    position: "relative",
    shadowColor: "#000000",
    justifyContent: "center",
    backgroundColor: "#1D87E7",
    shadowOffset: { width: 0, height: 2 }
  },
  textStyle: {
    fontSize: 20,
    color: "#FFFFFF"
  }
};

export default Header;
