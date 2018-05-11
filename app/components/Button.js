import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    paddingTop: 10,
    color: "#007aff",
    fontWeight: "600",
    paddingBottom: 10,
    alignSelf: "center"
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 1,
    MarginRight: 5,
    borderRadius: 5,
    alignSelf: "stretch",
    borderColor: "#007aff",
    backgroundColor: "#fff"
  }
};

export default Button;
