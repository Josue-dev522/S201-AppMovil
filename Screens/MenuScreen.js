import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Componente1 from './Componente1';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'componente1':
            return <Componente1 />;

        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text style={styles.titulo}>Menú Prácticas</Text>

                    <Button
                        title="Modal & Bottom Sheet"
                        onPress={() => setScreen('componente1')}
                    />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});




