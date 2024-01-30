import React, { useState,useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';

const FakeScreen3 = () => {
  const navigation = useNavigation();
  const backicon = require("../assets/back.png");
  const imageicon = require("../assets/imageicon.png");
  const resultimage= require("../assets/resultimage.jpg")
  const [selectedImage, setSelectedImage] = useState(null);
  const selectedimage = require("../assets/selectedimage.png")
  const cuttedimage= require("../assets/cuttedimage.jpg")
  const [fontLoaded] = useFonts({
    'regular': require("../assets/fonts/latoregular.ttf"),
    'bold': require("../assets/fonts/Lato-Bold.ttf"),
    'superbold': require("../assets/fonts/Lato-Black.ttf")
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }
  

  const goBack = () => {
    navigation.goBack(); // Replace 'Home' with the actual screen name of your HomeScreen
  };
  const predict = () => {
    navigation.navigate('ContinueScreen'); // Replace 'Home' with the actual screen name of your HomeScreen
  };
  

  return (
    <SafeAreaView style={styles.container}>
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

      <TouchableOpacity style={styles.rectangleButton1} onPress={goBack}>
        <Image source={backicon} style={styles.icon} resizeMode='contain' />
      </TouchableOpacity>

      <Text style={styles.hyperspectral}>Your Selected Area:</Text>
       
        <Image source={selectedimage} style={styles.image} />
       
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={predict}style={styles.button1}>
              <Text style={styles.back}>Predict </Text>
            </TouchableOpacity>
            
          </View>
 
          


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10

  },

  hyperspectral: {
    width:362,
    height:36,
    fontSize:22,
    marginLeft:15,
    marginTop:50,
    fontFamily: 'bold'
  },
  image:{
    width:350,
    height:350,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:35,
    marginTop:25,
    
  },
  
  tap:{
    width:260,
    height:34,
    fontFamily:'regular',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
    
    marginLeft:57,
    bottom:1,
    color:'#747474'
  },
  buttonContainer: {
    
    marginTop: 20,
  },
  button1:{
    width:150,
    height:50,
    backgroundColor:'#00563b',
    marginTop:40,
    marginLeft:140,
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
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    
    marginLeft:2

  },
});

export default FakeScreen3;
