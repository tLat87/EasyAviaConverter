import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import {useNavigation} from '@react-navigation/native';
import CompassScreen from '../screens/CompassScreen';
import AllEntryScreen from '../screens/AllEntryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SpeedConverterScreen from '../screens/SpeedConverterScreen';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
    switch (routeName) {
        case 'SpeedConverterScreen':
            return require('../assets/img/RoundSortHorizontal.png');
        case 'CompassScreen':
            return require('../assets/img/Frameкопія2.png');
        case 'AllEntryScreen':
            return require('../assets/img/Frameопія3.png');
        case 'SettingsScreen':
            return require('../assets/img/Frameкопія4.png');
        // default:
        //     return require('../assets/img/Group86.png');
    }
};

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#1F2021', shadowColor: '#1F2021', height: 150 },
                headerTitleStyle: {
                    color: 'white',
                    fontFamily:'Quantico-BoldItalic',
                    fontSize: 40,
                },
                // headerShadowVisible: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    width: '90%',
                    marginLeft: '5%',
                    backgroundColor: '#D60038',
                    borderRadius: 22,
                    paddingHorizontal: 1,
                    borderWidth: 3,
                    borderColor: '#282828',
                    paddingTop: 20,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                },
                tabBarIcon: () => (
                    <Image
                        source={getTabIcon(route.name)}
                        style={{ }}
                    />
                ),
            })}
        >

            <Tab.Screen
                name="SpeedConverterScreen"
                component={SpeedConverterScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />
            <Tab.Screen
                name="CompassScreen"
                component={CompassScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Habit',
                }}
            />
            <Tab.Screen
                name="AllEntryScreen"
                component={AllEntryScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Achievements',
                }}
            />

            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Settings',

                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
