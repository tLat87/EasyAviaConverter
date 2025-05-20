import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import {addLogEntry} from "../redux/slices/logSlice.ts";

export default function NewLogEntryScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [photo, setPhoto] = useState(null);
    const dispatch = useDispatch();

    const handleSave = () => {
        if (title.trim() === '' && note.trim() === '') return;
        dispatch(addLogEntry({ date: date.toISOString(), title, note, photo }));
        navigation.goBack();
    };

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel && response.assets?.length > 0) {
                setPhoto(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Image source={require('../assets/img/back.png')} />
            </TouchableOpacity>

            <Text style={styles.label}>Date</Text>
            <View style={{backgroundColor: 'gray', borderRadius: 12}}>
                <DateTimePicker value={date} mode="date" display="default" onChange={(e, selectedDate) => selectedDate && setDate(selectedDate)} />
            </View>

            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Enter title" />

            <Text style={styles.label}>Note</Text>
            <TextInput style={styles.textArea} value={note} onChangeText={setNote} multiline placeholder="Enter note" />

            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>📸 Photo</Text>
            </TouchableOpacity>

            {photo && <Image source={{ uri: photo }} style={styles.imagePreview} />}

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#141412', flex: 1, paddingTop: 50 },
    label: { color: '#fff', marginTop: 15 },
    input: { backgroundColor: '#222', color: '#fff', padding: 10, borderRadius: 8 },
    textArea: { backgroundColor: '#222', color: '#fff', padding: 10, height: 120, borderRadius: 8 },
    button: { backgroundColor: '#333', padding: 12, marginTop: 10, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff' },
    saveButton: { backgroundColor: '#777', padding: 15, borderRadius: 10, marginTop: 30, alignItems: 'center' },
    saveButtonText: { color: '#fff', fontWeight: 'bold' },
    imagePreview: { width: '100%', height: 200, marginTop: 10, borderRadius: 8 }
});
