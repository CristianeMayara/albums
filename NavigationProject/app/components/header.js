import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Home Screen</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#1D87E7',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 20
    }
}

export default Header;