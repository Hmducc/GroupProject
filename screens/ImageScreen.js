import React, { useState, useEffect,useCallback } from 'react';
import { View, Image, Button, StyleSheet,SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';

const ImageScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedImage } = route.params;
  const backicon = require("../assets/back.png");

  const goBack = () => {
    navigation.goBack();
  };

  const continueAction = () => {
    navigation.navigate('ContinueScreen'); // Replace with your actual screen name
  };

  useEffect(() => {
    // Reset selectedImage when the component is focused
    // You can add any additional logic here
  }, [navigation]);
  const [fontLoaded] = useFonts({
    'regular': require("../assets/fonts/latoregular.ttf"),
    'bold': require("../assets/fonts/Lato-Bold.ttf"),
    'superbold': require("../assets/fonts/Lato-Black.ttf")
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }
  return (
    <SafeAreaView style={styles.container}>
      {selectedImage ? (
        <>
        <View>
        <View style={styles.overlayContainer}>
          <Icon2 name="circle" size={30} color="#00563b" />
        </View>
        <View style={styles.seed}>
          <Seed name="seedling" size={20.4} color="white" />
        </View>
        <Text style={styles.logoname}>Farmers</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 10 }}>
        <View style={styles.blackline} />
      </View>

      

      <Text style={styles.hyperspectral}>Your hyperspectral image:</Text>


          <Image source={{ uri: selectedImage }} style={styles.image} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={goBack}style={styles.button1}>
              <Text style={styles.back}>Choose Another</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={continueAction}style={styles.button2}>
              <Text style={styles.back}>Continue</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Button title="No image selected" disabled />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button1:{
    width:150,
    height:50,
    backgroundColor:'#00563b',
    marginTop:40,
    marginLeft:30,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  button2:{
    width:150,
    height:50,
    backgroundColor:'#00563b',
    marginTop:40,
    marginRight:30,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  back:{
    fontFamily:'regular',
    fontSize:18,
    color:'white'
  },
  image:{
    width:350,
    height:350,
    marginLeft:40,
    marginTop:50
  },
  container:{
    backgroundColor:'white',
    flex:1
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
    color: '#00563b',
    fontSize: 28,
    width: 320,
    height: 69,
    textAlign: 'left',
    paddingLeft: 15,
    fontFamily: 'regular',
  },
  logoname: {
    color: '#00563b',
    fontSize: 22,
    width: 110,
    height: 30,
    marginLeft: 50,
    marginBottom: 17,
    marginTop: 1,
    fontFamily: 'regular',
  },
  blackline: {
    flex: 1,
    height: 3,
    backgroundColor: '#c8baba',
    marginLeft: 12,
    marginRight: 12,
    
  },
  rectangleButton1: {
    backgroundColor: '#d9d9d9', // Choose your desired button color
    borderRadius:20,
    justifyContent:'center',
    height:40,
    width:40,
    marginLeft:15
    
  },
  hyperspectral: {
    width:362,
    height:36,
    fontSize:22,
    marginLeft:15,
    marginTop:50,
    fontFamily: 'bold'
  },
});

export default ImageScreen;
