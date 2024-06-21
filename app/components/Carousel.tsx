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
                showsHorizontalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').width}
                decelerationRate="fast"
                contentContainerStyle={[styles.container, tailwind.style("flex-grow-0")]}>
                    <Box title=''></Box>
                    <Box title=''></Box>
                    <Box title=''></Box>
                    <Box title=''></Box>
                    <Box title=''></Box>
                    <Box title=''></Box>
                    <Box title=''></Box>
                </Animated.ScrollView>
            </Animated.View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        direction: 'ltr',
        overflow: 'scroll',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 100,
        paddingRight: 100,
    }
})
