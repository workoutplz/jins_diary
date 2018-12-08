import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Image
                    style={{width: 79, height: 100, marginTop: 30}}
                    source={require('../img/LUNA_logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Logo;