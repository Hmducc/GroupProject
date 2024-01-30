import React, { useContext, useState } from 'react';
import { View, Text, Button, Image, SafeAreaView, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../src/AuthContext';
import axios from 'axios';


const FileUploadComponent = () => {
  const { userInfo } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const pickImage = async () => {
    try {
        const result = await DocumentPicker.getDocumentAsync({
          type: 'application/zip',  // You can specify the type of files you want to pick
        });
    
        if (!result.cancelled) {
          const pickedImage = result.assets[0];
          setSelectedImage(pickedImage.uri);
          console.log('File picked:', pickedImage.uri);
        } else {
          console.log('File picking canceled or failed,', result);
        }
      } catch (error) {
        console.error('Error picking a file', error);
      }
  };

  const pickFile = async () => {
    try {
        const result = await DocumentPicker.getDocumentAsync({
          type: 'application/octet-stream',  // You can specify the type of files you want to pick
        });
    
        if (!result.cancelled) {
          const pickedDocument = result.assets[0];
          setSelectedFile(pickedDocument.uri);
          console.log('File picked:', pickedDocument.uri);
        } else {
          console.log('File picking canceled or failed,', result);
        }
      } catch (error) {
        console.error('Error picking a file', error);
      }
  };
  
  
  console.log('Selected Image:', selectedImage);
console.log('Selected File:', selectedFile);

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      if (selectedImage) {
        formData.append('img', {
          uri: selectedImage,
          name: 'selectedImage.zip', // Adjust the file name as needed
          type: 'application/zip',
        });
      }

      if (selectedFile) {
        formData.append('hdr', {
          uri: selectedFile,
          name: 'selectedFile.hdr', // Adjust the file name as needed
          type: 'application/octet-stream',
        });
      }
      console.log('FormData:', formData);

      const token = userInfo.token;
      const response = await axios.post('http://100.99.67.126:8081/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log('Files uploaded successfully');
      } else {
        console.error('Error uploading files:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading files:', error.message);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>File Upload</Text>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
          )}
          <Button title="Pick an image" onPress={pickImage} />

          {selectedFile && (
            <Text>{`Selected File: ${selectedFile}`}</Text>
          )}
          <Button title="Pick a file" onPress={pickFile} />

          <Button title="Upload" onPress={handleUpload} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FileUploadComponent;
