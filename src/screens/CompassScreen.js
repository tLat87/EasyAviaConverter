import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    PanResponder,
    Animated,
} from 'react-native';
import Timer from './Timer';


const CompassScreen = () => {
    const [angle, setAngle] = useState(0);
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [activeTab, setActiveTab] = useState('compass');

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const newAngle = angle + gestureState.dx * 0.5;
                setAngle(newAngle);
                rotateAnim.setValue(newAngle);
            },
        })
    ).current;

    const rotate = rotateAnim.interpolate({
        inputRange: [-360, 360],
        outputRange: ['-360deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Text  style={{fontSize: 52,
                fontWeight: '600',
                color: '#ff4d6d',
                fontFamily: 'Lobster-Regular',
                textShadowColor: '#ff4d6d88',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 6,
                marginBottom: 50,
                alignSelf: 'center',}}>Compass</Text>

            <View style={styles.switchContainer}>
                <TouchableOpacity
                    style={activeTab === 'compass' ? styles.switchButtonActive : styles.switchButton}
                    onPress={() => setActiveTab('compass')}
                >
                    <Text style={activeTab === 'compass' ? styles.switchTextActive : styles.switchText}>
                        Compass
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={activeTab === 'timer' ? styles.switchButtonActive : styles.switchButton}
                    onPress={() => setActiveTab('timer')}
                >
                    <Text style={activeTab === 'timer' ? styles.switchTextActive : styles.switchText}>
                        Timer
                    </Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'compass' ? (
                <>
                    <View style={styles.compassContainer} {...panResponder.panHandlers}>
                        <Animated.Image
                            source={require('../assets/img/Groupcfqwfc.png')}
                            style={[styles.compass, { transform: [{ rotate }] }]}
                        />
                    </View>
                    <Text style={styles.angleText}>{Math.round(angle) % 360}°</Text>
                </>
            ) : (
                <Timer />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 60,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ff4d6d',
        textShadowColor: '#ff4d6d99',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
        fontStyle: 'italic',
    },
    switchContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    switchButtonActive: {
        backgroundColor: '#ff4d6d',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    switchButton: {
        backgroundColor: '#333',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    switchTextActive: {
        color: '#fff',
        fontWeight: '600',
    },
    switchText: {
        color: '#aaa',
        fontWeight: '500',
    },
    compassContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    compass: {
        width: 300,
        height: 300,
    },
    angleText: {
        fontSize: 24,
        color: '#fff',
        marginTop: 30,
        fontWeight: '600',
    },
    timerContainer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: 48,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CompassScreen;
