import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {toggleVibration} from '../redux/slices/vibrationSlice';

const SettingsScreen = () => {
    const vibrationEnabled = useSelector(state => state.vibration.enabled);
    const dispatch = useDispatch();

    const handleVibrationToggle = () => {
        dispatch(toggleVibration());
    };

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 52,
                fontWeight: '600',
                color: '#ff4d6d',
                fontFamily: 'Lobster-Regular',
                textShadowColor: '#ff4d6d88',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 6,
                marginBottom: 50,
                alignSelf: 'center',}}>Settings</Text>


            <View style={styles.settingRow}>
                <Text style={styles.settingText}>Vibration</Text>
                <Switch
                    value={vibrationEnabled}
                    onValueChange={handleVibrationToggle}
                    trackColor={{ false: '#888', true: '#f44' }}
                    thumbColor="#fff"
                />
            </View>

            <TouchableOpacity style={styles.termsButton}>
                <Text style={styles.termsText}>Terms of Use</Text>
            </TouchableOpacity>

            <Image source={require('../assets/img/8ad4846371d71e6a120c83ad49f89341adf9280c.png')} style={styles.planeImage} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f44',
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: 'Cochin',
        textShadowColor: '#f44',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    settingRow: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingText: {
        color: '#fff',
        fontSize: 18,
    },
    termsButton: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 12,
        marginBottom: 30,
    },
    termsText: {
        color: '#fff',
        fontSize: 18,
    },
    planeImage: {
        width: '100%',
        height: 200,
        marginTop: 20,
    },
});

export default SettingsScreen;
