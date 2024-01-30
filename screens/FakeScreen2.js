import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { BASE_URL } from '../src/config';


const Preview = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [previewBlob, setPreviewBlob] = useState(null);
  const [filesForSelectArea, setFilesForSelectArea] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFilesForSelectArea(props.filesForServer);
  }, [props.filesForServer]);

  const fetchPreviewData = async () => {
    setLoading(true);

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJwYW5oYW5kbGUiLCJzdWIiOiIxIiwidXNlcl9pZCI6IjEiLCJ1c2VybmFtZSI6InBhbGhzMSIsImdyb3VwcyI6WyJ1c2VyIl0sImV4cCI6MTcwNjQ2ODg3NCwiaWF0IjoxNzA2NDU4MDc0LCJqdGkiOiJiZWIxMGFmNC0wZGExLTRlYTktOTBkNS04YTRkYTVkN2YyZGQifQ.FG5SOJ9rMWtIMhtm3rIXPFJEpU7oJ5Zs3MmcPHWwwev6lo6iS8piErXzlTEtELzQoY9qEYeRMm11iZSnI3WXFxVqfFuSR-VB0AhZblsQbm80yfSKB3YaCfpkyM20JRvmF4QiNdQ6ZBL5U0jdRm6tsW-PGg-X-zVRRmIu-msZ0Gn4afrNiQd7GGi7jdsO_pC-3wzjVhSy_j6cKODilKNhGW3jmjNLwWf7EWP9BjV7oOCkMfjZ6w7dEkjylXmSvZGC12fkdUIYdwPu3P_BeM_YDMz2KGeV3Gk5NL-uD6e0s9aG2PFfyo_RtQ9G_93E9HZHZoCNBIOhFdWNRyyZKWMMwQ'; // Replace with your authentication token logic

    try {
      const response = await BASE_URL.post(
        '/file/preview',
        {
          fileNameHDR: props.filesForServer.fileNameHDR,
          fileNameIMG: props.filesForServer.fileNameIMG,
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
      setPreviewBlob(blob);
      setButtonPopup(true);
    } catch (error) {
      console.error('Error fetching preview data', error);
      Alert.alert('Error', 'Error fetching preview data');
    } finally {
      setLoading(false);
    }
  };

  return (
    props.trigger && (
      <View style={styles.popupPreview}>
        <View style={styles.popupInnerPreview}>
          <TouchableOpacity onPress={() => props.setTrigger(false)} style={styles.closeBtnPreview}></TouchableOpacity>
          {props.children}
          <TouchableOpacity
            onPress={fetchPreviewData}
            style={styles.previewButton}
          >
            <Text style={styles.previewButtonText}>Preview</Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator style={styles.loadingSpinner} />}
        </View>

        <SelectArea filesForServer={filesForSelectArea} trigger={buttonPopup} setTrigger={setButtonPopup}>
          {previewBlob && (
            <View>
              <Image source={{ uri: URL.createObjectURL(previewBlob) }} style={{ maxWidth: '100%', height: '100%' }} />
            </View>
          )}
        </SelectArea>
      </View>
    )
  );
};

const styles = {
  popupPreview: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupInnerPreview: {
    backgroundColor: '#fff',
    padding: 16,
    position: 'relative',
    width: '80%',
    borderRadius: 8,
  },
  closeBtnPreview: {
    // Your close button styles
  },
  previewButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  previewButtonText: {
    color: 'white',
    fontSize: 16,
  },
  loadingSpinner: {
    marginTop: 8,
  },
};

export default Preview;
