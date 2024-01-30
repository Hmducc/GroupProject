import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AboutUsScreen from '../screens/AboutUs';
import DevelopersScreen from '../screens/DevelopersScreen';
import AccountScreen from '../screens/AccountScreen';
import AddScreen from '../screens/AddScreen';
import Tabs from '../navigation/tabs';
import ContinueScreen from '../screens/ContinueScreen';
import ImageScreen from '../screens/ImageScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthContext } from './AuthContext';

import FilesScreen from '../screens/FilesScreen';
import FakeScreen2 from '../screens/FakeScreen2';
import FakeScreen3 from '../screens/FakeScreen3';
import SelectArea from '../screens/SelectArea';
import ResultImageScreen from '../screens/ResultImage';
import PredictedImageScreen from '../screens/PredictedImageScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userInfo.token ? (
          <> 
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            {/* Additional screens in the stack navigator */}
            <Stack.Screen name="ImageScreen" component={ImageScreen} />
            <Stack.Screen name="AddScreen" component={AddScreen} />
            <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
            <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
            <Stack.Screen name="DevelopersScreen" component={DevelopersScreen} />
            <Stack.Screen name="FakeScreen" component={FilesScreen} />
            <Stack.Screen name="FakeScreen2" component={FakeScreen2} />
            <Stack.Screen name="FakeScreen3" component={FakeScreen3} />
            <Stack.Screen name="Select Area" component={SelectArea} />
            <Stack.Screen name="ResultImage" component={ResultImageScreen} />
            <Stack.Screen name="PredictedImageScreen" component={PredictedImageScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;