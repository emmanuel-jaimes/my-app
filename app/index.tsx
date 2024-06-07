import { useState } from "react";
import { Text, View, Button, Pressable, Image, Modal } from "react-native";
const iconImg = require("/Users/ejaimes/my-app/assets/images/react-logo.png");


export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world </Text>
      <Text>This is my first app</Text>

      <Button 
      title="Press" 
      onPress={console.log("Button pressed")}
      color="pink"
      >
      </Button>
    
      <Pressable onPress={() => console.log("Image pressed")}>
        <Image source={iconImg} style={{width: 300, height: 300, backgroundColor: 'black',}} />
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
          <Text>Hello Content</Text>
          <Button 
            title="close"
            color={'midnightBlue'}
            onPress={() => setIsModalVisible(false)}></Button>

        </View>

      </Modal>

    </View>

  
  );
}
