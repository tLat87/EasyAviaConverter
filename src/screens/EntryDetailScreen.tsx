import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';

const EntryDetailScreen = ({ route, navigation }) => {
    const { entry } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                   <Image source={require('../assets/img/back.png')} />
                </TouchableOpacity>
                <View style={styles.headerButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        {/*<Icon name="share-outline" size={18} color="white" />*/}
                        <Text style={styles.actionText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.title}>{entry.title}</Text>
            <Text style={styles.date}>{new Date(entry.date).toLocaleDateString('en-GB')}</Text>
            <Text style={styles.note}>{entry.note}</Text>

            {entry.photo && (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: entry.photo }} style={styles.image} />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#111',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    iconButton: {
        backgroundColor: '#222',
        padding: 10,
        borderRadius: 12,
    },
    headerButtons: {
        flexDirection: 'row',
        gap: 10,
    },
    actionButton: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    actionText: {
        color: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    date: {
        alignSelf: 'flex-end',
        color: '#aaa',
        marginBottom: 10,
    },
    note: {
        fontSize: 16,
        color: '#ddd',
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 12,
    },
});

export default EntryDetailScreen;
