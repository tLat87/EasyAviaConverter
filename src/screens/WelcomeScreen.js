import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const handleStart = () => {
        navigation.navigate('MainTab');
    };

    return (
        <ImageBackground
            source={require('../assets/img/5c525ea08f8d7164e8b418c7ede02158cc25bdb4.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/img/8901dc05dcc1bcc940993d44410689a7c1699491.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Welcome aboard,</Text>
                    <Text style={styles.subtitle}>Captain!</Text>
                    <Text style={styles.description}>
                        Easily convert distance, speed, pressure, and fuel flow with just a few taps.
                    </Text>
                    <Text style={styles.description}>
                        Navigate with the built-in compass and keep track of your flights in the logbook
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleStart}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.15)', // полупрозрачный тёмный слой для читаемости текста
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 25,
        borderWidth: 3,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: '600',
        color: '#ff4d6d',
        fontFamily: 'Lobster-Regular',
        textShadowColor: '#ff4d6d88',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
    },
    subtitle: {
        fontSize: 36,
        fontWeight: '700',
        color: '#ff4d6d',
        marginBottom: 16,
        fontFamily: 'Lobster-Regular',
        textShadowColor: '#ff4d6d88',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 8,
    },
    button: {
        backgroundColor: '#D60038',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 40,
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default WelcomeScreen;
