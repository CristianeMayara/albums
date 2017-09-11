import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#1D87E7'
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 20
    }
}

export default Header;