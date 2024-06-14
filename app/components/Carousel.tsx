import { Image, ScrollView, View, Text, StyleSheet, Dimensions, NativeSyntheticEvent, NativeScrollEvent, Pressable, GestureResponderEvent } from 'react-native';
import Box from './Box'
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from "react-native-svg";
import { useSharedValue, AnimatedScrollViewProps, runOnJS, useAnimatedScrollHandler, withSpring, useAnimatedStyle, interpolate } from 'react-native-reanimated';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import tailwind from 'twrnc';
import Animated from 'react-native-reanimated';




export default function Carousel () {

    
    return (
        <SafeAreaView style={tailwind.style("flex-1 justify-center bg-white")}>
            <Animated.View >
            {/* style={tailwind.style("overflow-visible")} */}
                <Animated.ScrollView 
                horizontal={true} 
                contentContainerStyle={styles.container}>
                    <Box title='card'></Box>
                    <Box title='card'></Box>
                    <Box title='card'></Box>
                    <Box title='card'></Box>
                    <Box title='card'></Box>
                    <Box title='card'></Box>
                    <Box title='card'></Box>
                </Animated.ScrollView>
            </Animated.View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'pink',
        // height: 200,
        flexDirection: 'row',
        direction: 'ltr',
        overflow: 'scroll',
        
    }
})
