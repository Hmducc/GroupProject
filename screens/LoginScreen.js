// LoginScreen.js

import React, { useState, useContext,useCallback } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ImageBackground,TouchableOpacity } from 'react-native';
import { AuthContext } from '../src/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const {login,userInfo} = useContext(AuthContext);
  
  
  
  const aboutus = require("../assets/aboutus.jpg");
  const [fontLoaded] = useFonts({
    'regular': require("../assets/fonts/latoregular.ttf"),
    'bold': require("../assets/fonts/Lato-Bold.ttf"),
    'superbold': require("../assets/fonts/Lato-Black.ttf")
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }

  
  

  return (
    <ImageBackground source={aboutus} style={{ flex: 1 }}>
      <View style={styles.container}>
    
        <Text style={styles.title}>Farmers</Text>

        {/* Email input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usename</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>

        {/* Password input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
        
          />
        </View>

        {/* Login and Sign Up buttons */}
        <TouchableOpacity onPress={() =>{login(username, password)}}style={styles.button2}>
              <Text style={styles.back}>Login</Text>
            </TouchableOpacity>
       
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
    borderRadius:5,
    color:'#fff'
    
    
  },
  button2:{
    width:150,
    height:45,
    backgroundColor:'#fff',
    marginTop:25,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },

  back:{
    fontFamily:'regular',
    fontSize:18,
    color:'#00563b'
  }
});

export default LoginScreen;
