import { Stack } from "expo-router";
import { setStatusBarHidden } from "expo-status-bar";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      
    </Stack>
  );
}