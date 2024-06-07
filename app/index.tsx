import { useState } from "react";
import { Text, View, Button, Pressable, Image, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
const iconImg = require("/Users/ejaimes/my-app/assets/images/icon.png");


export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <StatusBar backgroundColor={'blue'} barStyle={'default'} hidden/>
      <ActivityIndicator animating={isLoading} size={'large'} color={'blue'}/>

      <Text>Hello world </Text>
      <Text></Text>

      <Button 
      title="Press" 
      onPress={() => setIsLoading(!isLoading)}
      color="pink"
      >
      </Button>
    
      <Pressable onPress={() => console.log("Image pressed")}>
        <Image source={iconImg} style={{width: 150, height: 150, backgroundColor: 'black',}} />
      </Pressable>

      <Pressable onPress={() => setIsModalVisible(true) } style={{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 15,
        margin: 10
      }}>
        <Text>Custom Button</Text>
      </Pressable>

      <Modal
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet">
        
        <View style={{flex:1, backgroundColor: "pink", padding: 60}}>
          <Text>More Scratch Paper</Text>
          <Button 
            title="close"
            color={'midnightBlue'}
            onPress={() => setIsModalVisible(false)}>
          </Button>
          <Button
            title="Alert"
            color={'green'}
            onPress={() => Alert.alert("you have been alerted!")}>
          </Button>
          <Pressable 
          onPress={() => Alert.alert("Ring the Alarm", "Break in case of emergency",
            [
              {
                text: "Understood",

              },
              {
                text: "Break anyway",
              },
            ])
          }
          style={{
            backgroundColor:'blue',
            padding: 10, 
            margin: 10,
            borderRadius: 15,
          }}>
            <Text 
            style={
              {
                color: 'white',
                textAlign: "center"
                }}>
              Custom Alert Button</Text>
          </Pressable>


        </View>
      </Modal>

    </View>

  
  );
}
