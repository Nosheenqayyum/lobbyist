import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { splash } from '../assets/images';


const SplashScreen = ({ navigation }: any) => {
    async function HandlerUser() {
        setTimeout(async () => {
            navigation.navigate('Home');
        }, 5000);
    }

    useEffect(() => {
        HandlerUser();
    });

    return (
        <View style={styles.container}>
            <Image
                source={splash}
                style={styles.image}
                resizeMode="contain"
            />
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
    image: {

        flex: 1
    },
});

export default SplashScreen;
