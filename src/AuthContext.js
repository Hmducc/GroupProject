import React, { createContext, useState, useEffect, Children } from "react";
import { BASE_URL } from "./config";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(null);

  useEffect(() => {
    // Check if there's a stored user info (e.g., when the app is reopened)
    const retrieveUserInfo = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        
            // User is already logged in, perform necessary actions
            console.log('User is logged in:');
          
          
        }
      } catch (error) {
        console.error('Error retrieving user info from AsyncStorage:', error);
      }
    };

    retrieveUserInfo();
  }, []);

  const register = (username, password) => {
    setIsLoading(true);

    axios
      .post (`${BASE_URL}/user/register`, {
        username,
        password,
      })
      .then(res => {
        const userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (username, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/user/login`, {
        username,
        password,
      })
      .then(res => {
        const userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    // Clear user information from AsyncStorage
    AsyncStorage.removeItem('userInfo');
    console.log('Successfully logged out');

    // Clear user information in the state
    setUserInfo({});
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
