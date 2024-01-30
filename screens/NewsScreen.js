import React, { useContext,useCallback } from 'react';
import { View, Text, Image, ScrollView, Button, Alert, StyleSheet,SafeAreaView, ImageBackground,TouchableOpacity,Platform } from 'react-native';
import {useFonts} from 'expo-font'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from'react-native-vector-icons/FontAwesome'
import Seed from 'react-native-vector-icons/FontAwesome5'
import Account from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from 'react-native-vector-icons/Octicons'





import { NavigationContainer } from '@react-navigation/native';




const NewsScreen =({navigation}) => {
    const aboutus= require("../assets/aboutus.jpg")
    const usth= require("../assets/usth.jpg")
    const files= require("../assets/files.jpg")

    const [fontLoaded] = useFonts({
        'regular': require("../assets/fonts/latoregular.ttf"),
        'bold': require("../assets/fonts/Lato-Bold.ttf"),
        'superbold': require("../assets/fonts/Lato-Black.ttf")
      });
    
      if (!fontLoaded) {
        return null; // or a loading indicator
      }
  
    const goAbout= () => {
        navigation.navigate('AboutUsScreen'); // Replace with your actual screen name
      };
    const goDevelopers= () => {
    navigation.navigate('DevelopersScreen'); // Replace with your actual screen name
    };
    const AddScreen= () => {
        navigation.navigate('AddScreen'); // Replace with your actual screen name
        };
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <TouchableOpacity style={styles.rectangle3} onPress={AddScreen}>
                <ImageBackground source={files} style={{flex:1}  }>
                <Text style={styles.developers}>Upload Files</Text>
        
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={goAbout} style={styles.rectangle}>
                <ImageBackground source={aboutus} style={{flex:1}  }>
                 <Text style={styles.aboutus}>About Us</Text>
                <Text style={styles.method}>The technique, method, how the system works</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rectangle2} onPress={goDevelopers}>
                 <ImageBackground source={usth} style={{flex:1}  }>
                <Text style={styles.developers}>The Developers</Text>
         
                </ImageBackground>
            </TouchableOpacity>
            </ScrollView>
            
            
        </SafeAreaView>
       
    );
};
export default NewsScreen;

const styles = StyleSheet.create({
    container:{
      flex:1, 
      backgroundColor:'#ffffff',
        ...Platform.select({
            android:{
                paddingTop:30,
            }
            
        })},
  
      seed: {
        ...StyleSheet.absoluteFillObject,
        paddingLeft:19.5,
        marginTop:7,
        height:20,
        width:50,
  
  
        
      },
    
      overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        paddingLeft:17,
        height:35,
        width:50,
        
        
  
    
      },
  
    heading:{
        color:"#00563b",
        fontSize:28,
        width:350,
        height:69,
        textAlign:'left',
        paddingLeft:15,
        marginBottom:8,
        fontFamily:"regular"},
  
    top:{
      width:500,
      height:150},
      alignItems: 'center',
  
    logoname:{
        color:"#00563b",
        fontSize:22,
        width:110,
        height:30,
        marginLeft:50,
        marginBottom:17,
        marginTop:1,
        fontFamily:"regular",
        },

    newsandhistory:{
        fontFamily:"bold"
    },
  
    mainpagebutton:{
      color:'#00563b',},
  
    blackline1:{
      flex:0.3,
      height:3,
      backgroundColor:'#c8baba',
        marginLeft:12},

    blackline4:{
        flex:0.3,
        height:3,
        backgroundColor:'#c8baba',
        marginRight:12},

      headline:{
        width:70,
        height:25,
        alignItems:'center',
        paddingBottom:3,
        justifyContent:'center',
        borderBottomColor:'#00563b',
        borderBottomWidth:3,
        marginBottom:22
      },

      headline2:{
        width:110,
        height:25,
        alignItems:'center',
        paddingBottom:3,
        justifyContent:'center',
        borderBottomColor:'#00563b',
        borderBottomWidth:3,
        marginBottom:22
      },
      new:{
        fontFamily:'regular',
        fontSize:16,
        color:'#00563b'
      },
    
  
    rectangle: {
        width: 370.75,
        height: 250,
        alignSelf:'center',
        borderRadius: 15,
        borderWidth:1,
        overflow:'hidden',
        marginBottom:25,
        marginTop:25,
        Color:'#7f5df0',
        elevation:5,},
  
    aboutus: {
      fontSize:25,
      color:'#ffffff',
      height:30,
      width:105,
      marginTop:180,
      marginLeft:15,
      fontFamily:'bold',
    },
    method:{
      fontFamily:'regular',
      fontSize:12,
      width:200,
      height:30,
      color:'#ffffff',
      marginLeft:15
    },
  
    rectangle2: {
      width: 370.75,
      height: 250,
      alignSelf:'center',
      borderRadius: 15,
      borderWidth:1,
      overflow:'hidden'},
    
      developers: {
        fontSize:25,
        color:'#ffffff',
        height:30,
        width:200,
        marginTop:210,
        marginLeft:15,
        fontFamily:'bold',
        },
  
        screen: {
          flex: 0.37,
          justifyContent: 'center',
          alignItems: 'center',
        },
  
        addButton:{
          
        },
  
        blackline2:{flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue',
        marginTop:20,},
  
        blackline3:{
          flex:0.3,
          height:3,
          backgroundColor:'green'},

          rectangle3: {
            width: 370.75,
            height: 250,
            alignSelf:'center',
            borderRadius: 15,
            borderWidth:1,
            marginTop:15,
            overflow:'hidden'},
          
        
   
  })
