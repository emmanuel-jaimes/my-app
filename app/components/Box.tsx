import React, { PropsWithChildren, useState } from "react";
import { View, StyleSheet, Image, Animated, Text, Pressable } from 'react-native';

export default function Box({ children, title }: PropsWithChildren<{ title: string }>) {
  const [isOpen, setIsOpen] = useState(false);
  const animation = new Animated.Value(0);

  const handlePress = () => {
    setIsOpen(true);
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      tension: 10,
      friction: 5,
    }).start();
  };

  const handleClose = () => {
    setIsOpen(false);
    Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        tension: 25,
        friction: 150,
        }).start();
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      {
        rotateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
      {
        perspective: 1000,
      },
    ],
    opacity: animation,
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable onPress={handlePress}>
            <Image source={require('/Users/ejaimes/my-app/assets/images/mm-cover2.png')} style={styles.cover} />
        </Pressable>
       
      </View>
      {isOpen && (
        <Animated.View style={[styles.window, animatedStyle]}>
            <Pressable style={styles.coverInfoWindow} onPress={handleClose}>
                <Text style={styles.coverInfoText}>Album Title</Text>
                <Text style={styles.coverInfoText}>Song Name</Text>
                <Text style={styles.coverInfoText}>Artist</Text>
            </Pressable>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    padding: 20,
    backgroundColor: 'pink',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'gray'
  },
  cover: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  window: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
  },
  coverInfoWindow: {
    flex: 1, 
    backgroundColor: 'plum', 
    borderRadius: 10, 
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});