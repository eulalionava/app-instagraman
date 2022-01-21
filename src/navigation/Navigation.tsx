import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Historia } from '../interfaces/interface';
import { ActivityScreen } from '../screens/ActivityScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ReelsScreen } from '../screens/ReelsScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { StatusScreen } from '../screens/StatusScreen';

export type RootStackParam = {
    Bottom:undefined;
    Status:Historia
}

const Stack = createStackNavigator<RootStackParam>();
const Tab = createMaterialBottomTabNavigator();

const bottomTabScreen = ()=>{
    return(
        <Tab.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor:'purple'
            }}
            screenOptions={({ route })=>({
                tabBarShowIcon:true,
                tabBarIcon:({focused,color})=>{
                    let iconName:string = '';
        
                    switch(route.name){
                    case 'Home':
                        iconName = 'home-outline';
                        break;
                    case 'Search':
                        iconName = 'search-outline';
                        break;
                    case 'Reels':
                        iconName = 'caret-forward-circle-outline';
                        break;
                    case 'Activity':
                        iconName = 'heart-outline';
                        break;
                    case 'Profile':
                        iconName = 'person-outline';
                        break;
                    }
                    return <Icon name={ iconName } size={ 20 } color={ color } />
                }
            })}
        >
            <Tab.Screen name='Home' component={ HomeScreen } />
            <Tab.Screen name='Search' component={ SearchScreen } />
            <Tab.Screen name='Reels' component={ ReelsScreen } />
            <Tab.Screen name='Activity' component={ ActivityScreen } />
            <Tab.Screen name='Profile' component={ ProfileScreen } />
        </Tab.Navigator>
    )
}

export const Navigation = ()=> {
    
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Bottom" component={ bottomTabScreen } />
      <Stack.Screen name="Status" component={ StatusScreen } />
    </Stack.Navigator>
  );
}