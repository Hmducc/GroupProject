import React, { useState,useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, ImageBackground, blur } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';

const DevelopersScreen = () => {
  const navigation = useNavigation();
  const backicon = require("../assets/back.png");
  const imageicon = require("../assets/imageicon.png");
  const resultimage= require("../assets/resultimage.jpg")
  const [selectedImage, setSelectedImage] = useState(null);
  const aboutus= require("../assets/aboutus.jpg")
  const usthlogo = require("../assets/usthlogo.png");

  const goBack = () => {
    navigation.navigate('Tabs'); // Replace 'Home' with the actual screen name of your HomeScreen
  };
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

      <Image source={usthlogo} style={styles.image} resizeMode='contain' blurRadius={4}/>
      
      <Text style={styles.aboutus}>The Developers</Text>
      <Text style={styles.content}> • For the project, our group have 7 members, 3 members from the Data - Science major and 4 members from the Information and Communication Technology major: 
        </Text>
        <Text style={styles.content}> • Members in Data - Science major:</Text>
        <Text style={styles.name}>
        • Phạm Xuân Trung - BI12-458
        </Text>
        <Text style={styles.name}>
        • Ngyễn Anh Quân - BI12-365
        </Text>
        <Text style={styles.name}>
        • Hoàng Hà Đăng - BI12-077
        </Text>
        <Text style={styles.content}> • Members in Information and Communication Technoloy major:</Text>
        <Text style={styles.name}>
        • Hoàng Minh Đức - BI12-093
        </Text>
        <Text style={styles.name}>
        • Lê Ngọc Phan Anh - BI12-010
        </Text>
        <Text style={styles.name}>
        • Nguyễn Hoàng Nam - BI12-308
        </Text>
        <Text style={styles.name}>
        • Nguyễn Tuấn Vương - BI12-498
        </Text>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  container: {
    flex: 1,
    backgroundColor:'#216f56',
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
    marginLeft:70
  },
  content:{
    color:'white',
    fontFamily:'regular',
    fontSize:18,
    width:370,
    marginLeft:28,
    marginTop:10,
  },
  name:{
    color:'white',
    fontFamily:'regular',
    fontSize:18,
    width:370,
    marginLeft:55,
    marginTop:10,
  },
  
  image:{
    ...StyleSheet.absoluteFillObject,
    width:316,
    height:192,
    alignItems:'center',
    justifyContent:'center',
    
    marginLeft:58,
    top:350,
    
  }
});

export default DevelopersScreen;
