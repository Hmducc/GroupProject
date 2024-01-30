// Import necessary dependencies
import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import ColoredSquareWithText from './ColoredSquareWithText';
import { useNavigation } from '@react-navigation/native';

const PredictedImageScreen = ({ route }) => {
    const navigation = useNavigation();
    const backicon = require("../assets/back.png");
  // Retrieve the predictBlob from the route params
  const { predictBlob } = route.params;
  const goBackHome = () => {
    navigation.navigate('Tabs'); // Replace 'Home' with the actual screen name of your HomeScreen
  };
  const goBack = () => {
    navigation.goBack(); // Replace 'Home' with the actual screen name of your HomeScreen
  };

  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.overlayContainer}>
          <Icon2 name='circle' size={30} color="#00563b"></Icon2>
        </View>
        <View style={styles.seed}>
          <Seed name='seedling' size={20.4} color='white'></Seed>
        </View>
        <Text style={styles.logoname}>Farmers</Text>
        <TouchableOpacity style={styles.rectangleButton1} onPress={goBack}>
        <Image source={backicon} style={styles.icon} resizeMode='contain' />
      </TouchableOpacity>
        <Text style={styles.logoname1}>Your Predicted Image:</Text>
      <View>
        {predictBlob && (
          <Image source={{ uri: URL.createObjectURL(predictBlob) }} style={styles.predictedImage} />
        )}
        <Text style={styles.logoname2}>Which:</Text>
        <View>
         <ColoredSquareWithText color="#fde724" text="Deficient areas" />
        <ColoredSquareWithText color="#35b778" text="Excessiveness areas" />
        <ColoredSquareWithText color="#30678d" text="Sufficiency areas" />
        <ColoredSquareWithText color="#440154" text="Background color" />
        <TouchableOpacity style={styles.button2} >
              <Text style={styles.back} onPress={goBackHome}>Back Home</Text>
            </TouchableOpacity>
      {/* Add more instances as needed */}
    </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
    
  },
  predictedImage: {
    width: 400,
    height: 400,
    marginTop:5,
    resizeMode: 'contain',
    marginLeft:17
    
  },
  seed: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 19.5,
    marginTop:63,
    height: 20,
    width: 50,
  
  },

  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 17,
    height: 35,
    width: 50,
   
    marginTop:56,

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
  logoname1: {
    color: "#00563b",
    fontSize: 20,
    width: 300,
    height: 30,
    marginLeft: 30,
    marginBottom: 17,
    marginTop: 20,
    fontFamily: "regular",
  },
  logoname2: {
    color: "#00563b",
    fontSize: 20,
    width: 300,
    height: 30,
    marginLeft: 30,
    marginBottom: 17,
    marginTop: 10,
    fontFamily: "regular",
  },
  button2: {
    width: 150,
    height: 45,
    backgroundColor: '#00563b',
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140,
  },
  back: {
    fontFamily: 'regular',
    fontSize: 18,
    color: '#fff'
  },
  icon: {
    width: 20,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10

  },
  rectangleButton1: {
    backgroundColor: '#d9d9d9', // Choose your desired button color
    borderRadius:20,
    justifyContent:'center',
    height:40,
    width:40,
    marginLeft:15
    
  
  },
});

export default PredictedImageScreen;
