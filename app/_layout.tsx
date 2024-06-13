import { Stack } from "expo-router";
import { setStatusBarHidden } from "expo-status-bar";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Tabs} from 'expo-router';
import React from 'react';
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import { StyleSheet } from "react-native";



export default function RootLayout() {

  const colorScheme = useColorScheme();

  return (
    // <Stack>
    //   <Stack.Screen name="index" options={{headerShown: false}}/>
    //   <Stack.Screen name="tab1" options={{headerShown: false}}/>
      
    // </Stack>
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
      sceneContainerStyle={styles.sceneContainer}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'home',
            tabBarIcon: ({color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
          }}
          />
        <Tabs.Screen  
          name="tab1"
          options={{
            title: 'page1',
            tabBarIcon: ({color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
              ),
          }}
          />
      </Tabs>
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'black',
    borderBlockColor: 'black'

  }
})

