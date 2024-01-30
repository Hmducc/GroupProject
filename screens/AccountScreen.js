import React, { useState, useCallback, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image,TouchableWithoutFeedback, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import { AuthContext } from '../src/AuthContext';

const AccountScreen = () => {
  const navigation = useNavigation();
  const backicon = require("../assets/back.png");
  const imageicon = require("../assets/imageicon.png");

 

  const{ logout} = useContext(AuthContext)

 

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome </Text>
      
      <Button title="Logout" onPress={logout} />
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  // ... Your other styles
});

export default AccountScreen;
