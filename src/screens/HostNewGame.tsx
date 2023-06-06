import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export const HostNewGame = (props: any) => {


    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>
                hello this is Host Screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

