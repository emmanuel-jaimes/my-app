import React, { PropsWithChildren } from "react";
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native';

export default function Box({ children, title }: PropsWithChildren<{ title: string }>) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <Image source={require('/Users/ejaimes/my-app/assets/images/mm-cover2.png')} style={styles.cover}/>
                {children}
            </View>
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
        backgroundColor: 'white',
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
        marginBottom: 10,
    },
    cover: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

