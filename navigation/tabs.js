import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import AddScreen from '../screens/AddScreen';
import FilesScreen from '../screens/FilesScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
<TouchableOpacity
    style={{
        top: -30,
        justifyContent:'center',
        alignContent: 'center',
        
    }}
    onPress={onPress}
>
    <View style={{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#00563b',
        top:15
    }}>
        {children}
    </View>
</TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator 
        screenOptions={{headerShown:false,tabBarShowLabel:false,
        tabBarStyle:{
            position:'absolute',
            
            borderTopColor:"#00563b",
            elevation:0,
            backgroundColor:"white",
            borderRadius:2,
            height:80,
        }}} 
        
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center', top:20}}>
                        <Image 
                        source={require('../assets/home2.png')}
                        
                        style={{
                            width:35,
                            height:35,
                            tintColor: focused ? '#00563b' : '#d4d4d4'
                        }} 
                        />
                        <Text
                            style={{color: focused ? '#00563b' : '#748c94', fontSize:12}}>Home</Text>
                            
                        
                    </View>
                )
            }}/>
            <Tab.Screen name="Add" component={FilesScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <Image source={require('../assets/plus.png')}
                        style={{
                            width:30,
                            height:30,
                            tintColor:'#ffffff',
                            
                        }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center', top:20}}>
                        <Image 
                        source={require('../assets/accountcolor.png')}
                        
                        style={{
                            width:32,
                            height:32,
                            tintColor: focused ? '#00563b' : '#d4d4d4',
                            
                        }} 
                        />
                        <Text
                            style={{color: focused ? '#00563b' : '#748c94', fontSize:12}}>Account</Text>
                            
                        
                    </View>
                )
            }}/>
            
            
            
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    
    
    
})

export default Tabs;