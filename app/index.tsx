import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Button, Pressable, Image, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, LogBox, ScrollView } from "react-native";
const iconImg = require("/Users/ejaimes/my-app/assets/images/icon.png");




export default function Index() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollview}>
    
      <View style={[{backgroundColor: 'pink'}, styles.box]}>
        <Text>Box 1</Text>
      </View>
      <View style={[{backgroundColor: 'lightyellow'}, styles.box]}>
        <Text>Box 2</Text>
      </View>
      <View style={[{backgroundColor: 'lightgreen'}, styles.box]}>
        <Text>Box 3</Text>
      </View>
      <View style={[{backgroundColor: 'lightblue'}, styles.box]}>
        <Text>Box 4</Text>
      </View>
      <View style={[{backgroundColor: 'plum'}, styles.box]}>
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Text>Mystery Box</Text>
        </Pressable>
        <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">
          <View style={styles.modalView}>
            <Button
            title="close"
            onPress={() => setIsModalVisible(false)}
            color={'midnightblue'}></Button>
          </View>
        </Modal>
      </View>

    </ScrollView>

  
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
    width: 300,
    alignItems: 'center',
    margin: 10,
  },
  scrollview : {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },
  contentContainer: {
    paddingTop: 64, 
    alignItems: 'center'
  }
})