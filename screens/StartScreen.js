// StartScreen.js

import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';


const StartScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const aboutus = require("../assets/aboutus.jpg");
  const [fontLoaded] = useFonts({
    'regular': require("../assets/fonts/latoregular.ttf"),
    'bold': require("../assets/fonts/Lato-Bold.ttf"),
    'superbold': require("../assets/fonts/Lato-Black.ttf")
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, always navigate to HomeScreen on login
    navigation.navigate('LoginScreen');
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    navigation.navigate('SignUpScreen')
  };

  return (
    <ImageBackground source={aboutus} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Farmers</Text>

        {/* Login button */}
        <TouchableOpacity onPress={handleLogin} style={styles.button2}>
          <Text style={styles.back}>Login</Text>
        </TouchableOpacity>

        {/* Sign up link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Doesn't have an account yet?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}> Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    marginBottom: 16,
    color: '#fff',
    fontFamily: 'regular',
    marginBottom: 70,
  },
  inputContainer: {
    marginBottom: 16,
    width: '80%',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'regular',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 8,
    borderRadius: 5,
  },
  button2: {
    width: 150,
    height: 45,
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    fontFamily: 'regular',
    fontSize: 25,
    color: '#00563b',
  },
  signUpContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontFamily: 'regular',
    fontSize: 16,
  },
  signUpLink: {
    color: '#fff',
    fontFamily: 'regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default StartScreen;
