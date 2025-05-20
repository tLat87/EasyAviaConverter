import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const AllEntryScreen = ({ navigation }) => {
    const entries = useSelector((state) => state.log.entries);

    const handleStart = () => {
        navigation.navigate('NewLogEntryScreen');
    };

    return (
        <ImageBackground
            source={require('../assets/img/Logbookempty.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={{fontSize: 52,
                    fontWeight: '600',
                    color: '#ff4d6d',
                    fontFamily: 'Lobster-Regular',
                    textShadowColor: '#ff4d6d88',
                    textShadowOffset: { width: 0, height: 2 },
                    textShadowRadius: 6,
                marginBottom: 50,
                alignSelf: 'center',}}>
                    Flight Logbook
                </Text>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {entries.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.entryContainer}
                            onPress={() => navigation.navigate('EntryDetailScreen', { entry: item })}
                        >
                            <View style={styles.leftStripe} />
                            <View style={styles.entryContent}>
                                <View style={styles.entryHeader}>
                                    <Text style={styles.entryTitle}>
                                        {item.title || 'Untitled'}
                                    </Text>
                                    <Text style={styles.entryDate}>
                                        {new Date(item.date).toLocaleDateString('en-GB')}
                                    </Text>
                                </View>
                                <Text style={styles.entryNote} numberOfLines={2}>
                                    {item.note}
                                </Text>
                            </View>
                            {/*<View style={styles.starButton}>*/}
                            {/*    <Icon name="star-outline" size={22} color="white" />*/}
                            {/*</View>*/}
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.bottomButton} onPress={handleStart}>
                        <Text style={styles.bottomButtonText}>+ New Entry</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        paddingTop: 50,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    bottomButton: {
        backgroundColor: '#ff4d6d',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#ff4d6d',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    bottomButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    entryContainer: {
        backgroundColor: '#222',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftColor: '#ff4d6d',
        borderLeftWidth: 10,
        marginBottom: 16,
    },
    leftStripe: {
        width: 6,
        backgroundColor: '#ff4d6d',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    entryContent: {
        flex: 1,
        padding: 12,
    },
    entryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    entryTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    entryDate: {
        color: '#aaa',
        fontSize: 12,
    },
    entryNote: {
        color: '#ccc',
        fontSize: 13,
    },
    starButton: {
        backgroundColor: '#ff4d6d',
        padding: 10,
        margin: 10,
        borderRadius: 12,
    },
});

export default AllEntryScreen;
