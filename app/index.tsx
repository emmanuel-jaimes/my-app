import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Button, Pressable, Image, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, LogBox, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from './components/Box';

const iconImg = require("/Users/ejaimes/my-app/assets/images/icon.png");




export default function Index() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (

    <SafeAreaView style={{flex:1, backgroundColor: 'gray'}}>
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollview}>
      
        <View style={[styles.box, {backgroundColor: 'white'}]}>
          <Text>View1</Text>
        </View>

        <View>
          <Box title="cardTitle"></Box>
        </View>

      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'lightblue',
    padding: 60, 
    justifyContent: 'center',
    borderRadius: 15,
    flex: 1
  },
  box: {
    padding: 60,
    justifyContent: 'center',
    borderRadius: 15,
    width: 225,
    height: 300,
    alignItems: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderBlockColor: 'black',
    borderWidth: 5,
  },
  scrollview : {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },
  contentContainer: {
    // paddingTop: 64, 
    alignItems: 'center'
  }
})