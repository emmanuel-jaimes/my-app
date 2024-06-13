import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native';


export default function Box({ children, title }: PropsWithChildren & { title: string } ) {

    return (
        <View style={styles.container}>
            <Text>Box 1</Text>
            <View style={styles.box}>
                <Text style={[styles.boxtext, {backgroundColor: 'plum'}]}>Box 2</Text>
                <Text style={styles.boxtext}>the quick brown fox jumped over the bridge</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    box: {
        padding: 20,
        backgroundColor: 'white',
        width: 220,
        height: 300,
        alignItems: 'center',
        margin: 20,
        borderRadius: 10,
        shadowColor: 'white',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

    },
    boxtext: {
        margin: 5,
        fontSize: 16,
    }

})