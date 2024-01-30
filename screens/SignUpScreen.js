// LoginScreen.js

import React, { useState, useContext, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon2 from'react-native-vector-icons/FontAwesome'
import Seed from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from '../src/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';


const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading,register} = useContext(AuthContext);
   


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
    navigation.navigate('Tabs');
  };

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container1}>
        <Spinner visible={isLoading}/>
        <View>
            <View style={styles.overlayContainer}>
                <Icon2 name='circle' size ={30} color="#00563b"></Icon2>
            </View>
            <View style={styles.seed}>
                <Seed name='seedling' size={20.4} color='white'></Seed>
            </View>
            <Text style={styles.logoname}>Farmers</Text>
        </View>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Email input */}
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>

      {/* Password input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      {/* Buttons container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goBack} style={styles.button1}>
          <Text style={styles.back}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
            register(username, password);
        }}  style={styles.button2}>
          <Text style={styles.back}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container1:{
    flex:1, 
    backgroundColor:'#ffffff',
      ...Platform.select({
          android:{
              paddingTop:30,
          }
      })},
  title: {
    fontSize: 55,
    marginBottom: 16,
    color: '#00563b',
    fontFamily: 'regular',
    marginBottom: 70,
  },
  inputContainer: {
    marginBottom: 16,
    width: '80%',
  },
  label: {
    fontSize: 16,
    color: '#00563b',
    fontFamily: 'regular',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#d9d9d9',
    padding: 8,
    borderRadius: 5
  },
  button2: {
    width: 150,
    height: 45,
    backgroundColor: '#00563b',
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    width: 150,
    height: 45,
    backgroundColor: '#00563b',
    marginTop: 25,
    marginRight: 20, // Adjust margin as needed
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    fontFamily: 'regular',
    fontSize: 18,
    color: '#fff'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seed: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft:19.5,
    marginTop:7,
    height:20,
    width:50,


    
  },

  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft:17,
    height:35,
    width:50,
  },
  logoname:{
    color:"#00563b",
    fontSize:22,
    width:110,
    height:30,
    marginLeft:50,
    marginBottom:17,
    marginTop:1,
    fontFamily:"regular",
    },
});

export default SignUpScreen;
