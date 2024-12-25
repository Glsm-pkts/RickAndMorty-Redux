import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CHARECTER, EPISODE, LOCATION } from '../utils/routes';
import Charecter from '../screens/charecter';
import Episode from '../screens/episode';
import Location from '../screens/location';
import { KeyboardOpen,  LocationAdd, UserAdd } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={
          {
            headerShown: false,
            tabBarStyle: {backgroundColor:  "#545B77", shadowOffset: 0.2, shadowOpacity:0.6 },
          }
        }>
          <Tab.Screen 
          options={{
            headerShown: false,
            tabBarLabel: 'Charecter',
            tabBarLabelStyle: {color: '#D8C4B6', fontSize: 13, fontWeight: '500'},
            tabBarIcon: ({focused}) =>
              focused ? (
                <UserAdd size={30} color='#D8C4B6' variant='Bold'/>
              )
               : (
                <UserAdd size={30} color='#D8C4B6' />
              ),
          }}
          name={CHARECTER}component={Charecter} />
          <Tab.Screen 
          options={{
            headerShown: false,
            tabBarLabel: 'Episode',
            tabBarLabelStyle: {color: '#D8C4B6', fontSize: 13, fontWeight: '500'},
            tabBarIcon: ({focused}) =>
              focused ? (
                <KeyboardOpen size={30} color='#D8C4B6' variant='Bold'/>
              )
               : (
                <KeyboardOpen size={30} color='#D8C4B6' />
              ),
          }}
          name={EPISODE} component={Episode} />



<Tab.Screen 
  options={{
    headerShown: true,
    headerStyle: {
      backgroundColor: "#374259", // Change this to your desired color
    },
    headerTintColor: '#D8C4B6', // This changes the color of the header text and icons
    headerTitle: 'Location', // Set the title to "Location"
    tabBarLabel: 'Location',
    tabBarLabelStyle: {color: '#D8C4B6', fontSize: 13, fontWeight: '500'},
    tabBarIcon: ({focused}) =>
      focused ? (
        <LocationAdd size={30} color='#D8C4B6' variant='Bold'/>
      )
      : (
        <LocationAdd size={30} color='#D8C4B6' />
      ),
  }}
  name={LOCATION} component={Location}
/>


        </Tab.Navigator>
      );
}

export default TabNavigation