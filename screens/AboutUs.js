import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';

const AboutUsScreen = () => {
  const navigation = useNavigation();
  const backicon = require("../assets/back.png");
  const imageicon = require("../assets/imageicon.png");
  const resultimage= require("../assets/resultimage.jpg")
  const [selectedImage, setSelectedImage] = useState(null);
  const aboutus= require("../assets/aboutus.jpg")
  const [fontLoaded] = useFonts({
    'regular': require("../assets/fonts/latoregular.ttf"),
    'bold': require("../assets/fonts/Lato-Bold.ttf"),
    'superbold': require("../assets/fonts/Lato-Black.ttf")
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }

  const goBack = () => {
    navigation.navigate('Tabs'); // Replace 'Home' with the actual screen name of your HomeScreen
  };
  

  return (
    <ImageBackground source={aboutus} style={{flex:1} }>
    <SafeAreaView style={styles.container}>
        
      <View>
        <View style={styles.overlayContainer}>
          <Icon2 name="circle" size={30} color="white" />
        </View>
        <View style={styles.seed}>
          <Seed name="seedling" size={20.4} color="#00563b" />
        </View>
        <Text style={styles.logoname}>Farmers</Text>
      </View>

      

      <TouchableOpacity style={styles.rectangleButton1} onPress={goBack}>
        <Image source={backicon} style={styles.icon} resizeMode='contain' />
      </TouchableOpacity>
      
      <Text style={styles.aboutus}>About Us</Text>
      <Text style={styles.content}> • Our system is using deep learning to evaluate the hyper-spectral images to evaluate the crop nutrient over or under the fertiliser assessment 
</Text>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  container: {
    flex: 1,
    ...Platform.select({
      android:{
          paddingTop:30,
      }
  })},
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
    color: 'white',
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
    marginLeft:25,
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
  aboutus:{
    width: 315,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'bold',
    fontSize: 40,
    marginTop:25,
    color:'white',
    marginLeft:120
  },
  content:{
    color:'white',
    fontFamily:'regular',
    fontSize:16,
    width:370,
    marginLeft:28,
    marginTop:10,
  }
});

export default AboutUsScreen;
