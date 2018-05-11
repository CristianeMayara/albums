import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    elevation: 1,
    marginLeft: 5,
    marginTop: 10,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 2,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    borderColor: "#ddd",
    shadowColor: "#000",
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 }
  }
};

export default Card;
