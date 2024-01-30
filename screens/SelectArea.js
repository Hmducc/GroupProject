import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { BASE_URL } from '../src/config';

const SelectArea = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  const [confirmedX, setConfirmedX] = useState(null);
  const [confirmedY, setConfirmedY] = useState(null);
  const [coordinatesConfirmed, setCoordinatesConfirmed] = useState(false);
  const [predictBlob, setPredictBlob] = useState(null);

  const handleConfirmButtonClick = () => {
    const parsedX = parseFloat(xValue);
    const parsedY = parseFloat(yValue);

    if (isNaN(parsedX) || isNaN(parsedY) || parsedX > 8000 || parsedY > 8000) {
      alert('Invalid X or Y value. Please enter a number <= 8000.');
      return;
    }

    setConfirmedX(parsedX);
    setConfirmedY(parsedY);
    setCoordinatesConfirmed(true);
  };

  const handlePredictButtonClick = () => {
    fetchPredictData();
  };

  const redDotStyle = {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    top: confirmedY,
    left: confirmedX,
    transform: [{ translateX: -5 }, { translateY: -5 }],
  };

  const fetchPredictData = async () => {
    const token = ''; // Replace with your logic to get the token
    if (props.filesForServer && props.filesForServer.fileNameHDR) {
      try {
        const response = await BASE_URL.post(
          '/file/predict',
          {
            fileNameHDR: props.filesForServer.fileNameHDR,
            fileNameIMG: props.filesForServer.fileNameIMG,
            x: confirmedX,
            y: confirmedY,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            responseType: 'arraybuffer',
          }
        );

        const blob = new Blob([response.data], { type: 'image/png' });
        setPredictBlob(blob);
        setButtonPopup(true);
      } catch (error) {
        console.log('Error fetching prediction data:', error.message);
      }
    } else {
      console.log(props.filesForServer);
    }
  };

  return props.trigger ? (
    <View style={styles.popupSA}>
      <View style={styles.popupInnerSA}>
        <Text>Đây là Xem trước của bạn</Text>
        <View style={styles.imageContainer}>
          {props.children}
          {confirmedX !== null && confirmedY !== null && (
            <View style={redDotStyle}></View>
          )}
        </View>

        <View>
          <Text>Please input the coordinates values to Select a particular Area!</Text>
          <Text>Note: The Red dot is your Selected Area!</Text>
          <Text>X:</Text>
          <TextInput
            keyboardType="numeric"
            value={xValue}
            onChangeText={(text) => setXValue(text)}
          />
        </View>
        <View>
          <Text>Y:</Text>
          <TextInput
            keyboardType="numeric"
            value={yValue}
            onChangeText={(text) => setYValue(text)}
          />
        </View>
        {coordinatesConfirmed ? (
          <TouchableOpacity style={styles.predictButton} onPress={handlePredictButtonClick}>
            <Text>Predict</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmButtonClick}>
            <Text>Confirm</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.closeBtnSA} onPress={() => props.setTrigger(false)}></TouchableOpacity>
      </View>
      <Result trigger={buttonPopup} setTrigger={setButtonPopup}>
        {predictBlob && (
          <View>
            {/* Display the image from Blob */}
            <Image source={{ uri: URL.createObjectURL(predictBlob) }} style={styles.predictedImage} />
          </View>
        )}
      </Result>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  popupSA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupInnerSA: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  imageContainer: {
    position: 'relative',
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 80,
  },
  confirmButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  predictButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  closeBtnSA: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
  predictedImage: {
    maxWidth: '100%',
    height: 'auto',
  },
});

export default SelectArea;
