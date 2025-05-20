import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity, Image,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const units = ['Knots', 'MPH', 'KMH', 'MPS'];

const conversionFactors = {
    Knots: { Knots: 1, MPH: 1.15078, KMH: 1.852, MPS: 0.514444 },
    MPH:   { Knots: 0.868976, MPH: 1, KMH: 1.60934, MPS: 0.44704 },
    KMH:   { Knots: 0.539957, MPH: 0.621371, KMH: 1, MPS: 0.277778 },
    MPS:   { Knots: 1.94384, MPH: 2.23694, KMH: 3.6, MPS: 1 },
};

const SpeedConverterScreen = () => {
    const [inputValue, setInputValue] = useState('1');
    const [fromUnit, setFromUnit] = useState('Knots');
    const [toUnit, setToUnit] = useState('MPH');
    const [result, setResult] = useState('');

    useEffect(() => {
        convert();
    }, [inputValue, fromUnit, toUnit]);

    const convert = () => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult('');
            return;
        }
        const converted = value * conversionFactors[fromUnit][toUnit];
        setResult(converted.toFixed(5));
    };

    const swapUnits = () => {
        const prevFrom = fromUnit;
        setFromUnit(toUnit);
        setToUnit(prevFrom);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Unit Converter</Text>



            {/* From Section */}
            <View style={styles.unitBox}>
                <Text style={styles.unitLabel}>{fromUnit}</Text>
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => setFromUnit(value)}*/}
                {/*    value={fromUnit}*/}
                {/*    items={units.map((unit) => ({ label: unit, value: unit }))}*/}
                {/*    style={pickerSelectStyles}*/}
                {/*    Icon={() => <Image source={require('../assets/img/Frame.png')} />}*/}
                {/*/>*/}
            </View>

            <View style={styles.unitBox}>
                <Text style={styles.unitLabel}>{toUnit}</Text>
                <Text style={styles.result}>{result}</Text>
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => setToUnit(value)}*/}
                {/*    value={toUnit}*/}
                {/*    items={units.map((unit) => ({ label: unit, value: unit }))}*/}
                {/*    style={pickerSelectStyles}*/}
                {/*    Icon={() => <Image source={require('../assets/img/Frame.png')} />}*/}
                {/*/>*/}
            </View>

            <View style={styles.actions}>
                <TouchableOpacity>
                    {/*<FontAwesome name="history" size={28} color="#ccc" />*/}
                </TouchableOpacity>
                <TouchableOpacity onPress={swapUnits} style={styles.swapButton}>
                    <Image source={require('../assets/img/Frameкопія.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/*<FontAwesome name="undo" size={28} color="#ccc" />*/}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SpeedConverterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e0e0e',
        padding: 20,
    },
    title: {
        fontSize: 52,
        fontWeight: '600',
        color: '#ff4d6d',
        fontFamily: 'Lobster-Regular',
        textShadowColor: '#ff4d6d88',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        marginBottom: 50,
        marginTop: 50,
        alignSelf: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
    },
    tabActive: {
        backgroundColor: '#d42c3b',
    },
    tabText: {
        color: '#ccc',
    },
    tabTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    unitBox: {
        backgroundColor: '#303030',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    unitLabel: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        color: '#fff',
        fontSize: 32,
        marginBottom: 10,
    },
    result: {
        color: '#fff',
        fontSize: 32,
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    swapButton: {
        backgroundColor: '#d42c3b',
        padding: 18,
        borderRadius: 999,
    },
});

const pickerSelectStyles = {
    iconContainer: {
        top: 10,
        right: 10,
    },
    inputIOS: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 8,
    },
    inputAndroid: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 8,
    },
};
