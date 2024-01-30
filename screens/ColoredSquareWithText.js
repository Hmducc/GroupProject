import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColoredSquareWithText = ({ color, text }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.coloredSquare, { backgroundColor: color }]} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    
  },
  coloredSquare: {
    width: 20, // Adjust the size as needed
    height: 20, // Adjust the size as needed
    marginRight: 5, // Adjust the spacing between the square and text
    marginTop:5
  },
  text:{
    fontFamily:'regular',
    
  }
});

export default ColoredSquareWithText;
