import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import React, { useState, useEffect } from 'react';
import NewsScreen from './NewsScreen';
import HistoryScreen from './HistoryScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const HomeScreen = ({ navigation }) => {
  const [fontLoaded] = useFonts({
    'regular': require("../assets/fonts/latoregular.ttf"),
    'bold': require("../assets/fonts/Lato-Bold.ttf"),
    'superbold': require("../assets/fonts/Lato-Black.ttf")
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }
   const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.overlayContainer}>
          <Icon2 name='circle' size={30} color="#00563b"></Icon2>
        </View>
        <View style={styles.seed}>
          <Seed name='seedling' size={20.4} color='white'></Seed>
        </View>
        <Text style={styles.logoname}>Farmers</Text>
        <Text style={styles.heading}>The best and most simple way to check your plants!</Text>
      </View>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00563b',
        tabBarInactiveTintColor: '#c8baba',
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'regular',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#00563b',
        },
      }}
    >
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Your Files" component={HistoryScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    ...Platform.select({
      android: {
        paddingTop: 30,
      }
    })
  },

  seed: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 19.5,
    marginTop: 7,
    height: 20,
    width: 50,
  },

  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 17,
    height: 35,
    width: 50,
  },

  heading: {
    color: "#00563b",
    fontSize: 28,
    width: 350,
    height: 69,
    textAlign: 'left',
    paddingLeft: 15,
    marginBottom: 8,
    fontFamily: "regular"
  },

  logoname: {
    color: "#00563b",
    fontSize: 22,
    width: 110,
    height: 30,
    marginLeft: 50,
    marginBottom: 17,
    marginTop: 1,
    fontFamily: "regular",
  },
});

export default HomeScreen;
