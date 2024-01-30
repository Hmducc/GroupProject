import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Image, ScrollView, ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Seed from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../src/AuthContext';

const App = () => {
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const [resultImages, setResultImages] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading indicator
  const navigation = useNavigation();
  const token = userInfo.token;
  
  const backicon = require("../assets/back.png");

  useEffect(() => {
    // Fetch files from your server with authentication header
    fetchFiles();
  }, [token]);

  const fetchFiles = async () => {
    try {
      const response = await fetch('http://100.99.67.126:8081/file/get/u', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }

      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const toggleFileSelection = (fileName) => {
    const isSelected = selectedFiles.includes(fileName);

    if (isSelected) {
      setSelectedFiles(selectedFiles.filter(name => name !== fileName));
    } else {
      setSelectedFiles([...selectedFiles, fileName]);
    }
  };

  const onFilePress = (selectedFile) => {
    console.log(`Selected File: ${selectedFile.fileName}`);
    toggleFileSelection(selectedFile.fileName);
  };

  const uploadSelectedFiles = async () => {
    setProcessing(true);
    setLoading(true); // Show loading indicator

    const postUrl = 'http://100.99.67.126:8081/file/preview';

    const postData = {
      fileNameHDR: selectedFiles[0],
      fileNameIMG: selectedFiles[1],
    };

    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`Failed to upload files. Status: ${response.status}`);
      }

      const imageBlob = await response.blob();
      const imageURL = URL.createObjectURL(imageBlob);
      setResultImages([...resultImages, imageURL]);
      console.log('Upload successful');
      navigation.navigate('ResultImage', { imageURL /* your imageURL */, selectedFiles });
    } catch (error) {
      console.error('Error uploading files:', error.message);
      if (error.response) {
        // Log more details if available
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    } finally {
      setProcessing(false);
      setLoading(false); // Hide loading indicator
    }
  };

  const renderFileItem = ({ item }) => (
    <View style={styles.fileContainer}>
      <CheckBox
        checked={selectedFiles.includes(item.fileName)}
        onPress={() => toggleFileSelection(item.fileName)}
      />
      <TouchableOpacity onPress={() => onFilePress(item)} style={styles.fileCard}>
        <Text style={styles.fileName}>{item.fileName}</Text>
        <Text style={styles.fileDetails}>{`File ID: ${item.fileId}`}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderResultImages = () => {
    return resultImages.map((imageURL, index) => (
      <View key={index} style={styles.resultImageContainer}>
        <Image source={{ uri: imageURL }} style={styles.resultImage} />
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container1}>
 
      <View style={styles.overlayContainer}>
          <Icon2 name='circle' size={30} color="#00563b"></Icon2>
        </View>
        <View style={styles.seed}>
          <Seed name='seedling' size={20.4} color='white'></Seed>
        </View>
        <Text style={styles.logoname}>Farmers</Text>
        <View style={styles.container}>
          <Text style={styles.header}>File List</Text>
          <Button
            title={`Process ${selectedFiles.length} Selected Files`}
            onPress={uploadSelectedFiles}
            disabled={selectedFiles.length !== 2 || processing}
          />
        
          {loading ? (
            <ActivityIndicator size="large" color="#00563b" />
          ) : (
            <FlatList
              data={files}
              keyExtractor={(item) => item.fileId.toString()}
              renderItem={renderFileItem}
            />
          )}
        </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex:1,
    backgroundColor:'#fff'
    
  },
  container: {
    padding: 16,
    marginBottom: 100,
    
  },
  header: {
    fontSize: 23,
    fontFamily:'regular',
    marginBottom: 16,
    color:'#00563b'
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 15,
  },
  fileCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginLeft: 8,
  },
  fileName: {
    fontSize: 18,
    fontFamily:'bold',
    marginBottom: 8,

  },
  fileDetails: {
    fontSize: 14,
    color: '#666',
    fontFamily:'regular'
  },
  resultImageContainer: {
    marginBottom: 16,
  },
  resultImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Adjust this property as needed
  },
  seed: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 19.5,
    marginTop: 64,
    height: 20,
    width: 50,
    
  },

  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 17,
    height: 35,
    width: 50,
    marginTop:58,
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
});

export default App;
