import React, { useState, useEffect, useContext } from 'react';
import { View, Image, TouchableOpacity, TextInput, StyleSheet, Text, SafeAreaView,ScrollView,ActivityIndicator } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../src/AuthContext';

const ResultImageScreen = ({ route }) => {
    const navigation = useNavigation();
  const { imageURL, selectedFiles = [] } = route.params || { imageURL: null, selectedFiles: [] };
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [inputX, setInputX] = useState('');
  const [inputY, setInputY] = useState('');
  const [coordinatesConfirmed, setCoordinatesConfirmed] = useState(false);
  const [predictBlob, setPredictBlob] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const token = userInfo.token;

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setCoordinates({
      x: Math.max(0, Math.min(8000, Math.round((locationX / 400) * 8000))),
      y: Math.max(0, Math.min(8000, Math.round((locationY / 400) * 8000))),
    });
  };

  const handleInputChange = (value, coordinateType) => {
    if (value === '') {
      if (coordinateType === 'x') {
        setInputX(value);
        setCoordinates({ x: 0, y: coordinates.y });
      } else if (coordinateType === 'y') {
        setInputY(value);
        setCoordinates({ x: coordinates.x, y: 0 });
      }
      return;
    }

    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const clampedValue = Math.max(0, Math.min(8000, Math.round(numericValue)));
      if (coordinateType === 'x') {
        setInputX(value);
        setCoordinates({ x: clampedValue, y: coordinates.y });
      } else if (coordinateType === 'y') {
        setInputY(value);
        setCoordinates({ x: coordinates.x, y: clampedValue });
      }
    }
  };

  const handleConfirmButtonClick = () => {
    setCoordinatesConfirmed(true);
  };

  const handlePredictButtonClick = async () => {
    try {
        setLoading(true); // Show loading indicator
        const response = await fetch('http://100.99.67.126:8081/file/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fileNameHDR: selectedFiles[0],
          fileNameIMG: selectedFiles[1],
          x: coordinates.x,
          y: coordinates.y,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch predicted image. Status: ${response.status}`);
      }

      const predictBlob = await response.blob();
      setPredictBlob(predictBlob);
      setButtonPopup(true);
      navigation.navigate('PredictedImageScreen', { predictBlob });
    } catch (error) {
      console.error('Error fetching predicted image:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    } finally {
        setLoading(false); // Hide loading indicator
      }
  };

  useEffect(() => {
    console.log('ResultImageScreen - imageURL:', imageURL);
  }, [imageURL, predictBlob]);

  useEffect(() => {
    if (predictBlob) {
      setButtonPopup(true);
    }
  }, [predictBlob]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.overlayContainer}>
          <Icon2 name='circle' size={30} color="#00563b"></Icon2>
        </View>
        <View style={styles.seed}>
          <Seed name='seedling' size={20.4} color='white'></Seed>
        </View>
        <Text style={styles.logoname}>Farmers</Text>
        <Text style={styles.logoname1}>Your Preview picture:</Text>
        <Text style={styles.logoname2}>Please input the coordinates below</Text> 
      <View>
        {imageURL ? (
          <>
            <Image source={{ uri: imageURL }} style={styles.resultImage} />
            {coordinatesConfirmed && (
              <TouchableOpacity
                style={[styles.dot, { left: (coordinates.x / 8000) * 400 - 5, top: (coordinates.y / 8000) * 400 - 5 }]}
                onPress={handlePress}
              >
                <Svg height="10" width="10">
                  <Circle cx="5" cy="5" r="5" fill="red" />
                </Svg>
              </TouchableOpacity>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter X"
                keyboardType="numeric"
                value={inputX}
                onChangeText={(text) => handleInputChange(text, 'x')}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Y"
                keyboardType="numeric"
                value={inputY}
                onChangeText={(text) => handleInputChange(text, 'y')}
              />
            </View>
            <TouchableOpacity style={styles.button2} onPress={coordinatesConfirmed ? handlePredictButtonClick : handleConfirmButtonClick}>
            {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
              <Text style={styles.back}>{coordinatesConfirmed ? 'Predict' : 'Confirm'}</Text>
          )}
          </TouchableOpacity>

            {buttonPopup && predictBlob && (
              <View>
               
              </View>
            )}
          </>
        ) : (
          <Text></Text>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  resultImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 17,
  },
  dot: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  input: {
    width: 150,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
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
    marginTop: 10,
    fontFamily: "regular",
  },
  logoname2: {
    color: "#00563b",
    fontSize: 18,
    width: 300,
    height: 30,
    marginLeft: 30,
    marginBottom: 17,
    marginTop: 1,
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
});

export default ResultImageScreen;
