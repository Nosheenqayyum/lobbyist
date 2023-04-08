import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

const HomeScreen = (props: any) => {
    const handleNavigate = () => {
        console.log("Pressed")
        props.navigation.navigate('HostNewGame');
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>Hello, this is Home</Text>
            <Button onPress={handleNavigate} color={'#000'} title="Go to host screen" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
