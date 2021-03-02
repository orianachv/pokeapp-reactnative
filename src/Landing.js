import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import { render } from 'react-dom';

const myBackground = require('../assets/landing.jpg')

export default class Landing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={myBackground} style={styles.image} >
                    <View style={styles.viewStyle}>
                        <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
                        <Button block={true} style={styles.button} onPress={() => {this.props.switchScreen("search")}}>
                            <Text style={styles.buttonText}>Start Serching</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === "android " ? 24 : 0
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        color: 'blue',
        alignItems: 'center'
    },
    image: {
        flex: 1
    },
    button: {
        margin: 10,
    },
    buttonText: {
        color: 'white'
    }
}