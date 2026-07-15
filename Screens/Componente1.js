import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BottomSheet } from '../components/BottomSheet';
import { MiModal } from '../components/MiModal';

export default function Componente1() {
    const [modalVisible, setModalVisible] = useState(false);
    const [sheetVisible, setSheetVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Práctica: Modal y Bottom Sheet
            </Text>

            <Pressable
                style={[styles.boton, { backgroundColor: '#2a7e01' }]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.botonTexto}>
                    Mostrar Modal
                </Text>
            </Pressable>

            <Pressable
                style={[styles.boton, { backgroundColor: 'red' }]}
                onPress={() => setSheetVisible(true)}
            >
                <Text style={styles.botonTexto}>
                    Abrir Bottom Sheet
                </Text>
            </Pressable>

            <MiModal
                visible={modalVisible}
                onCerrar={() => setModalVisible(false)}
                titulo="Modal"
            >
                <Text>Nombre: Saul</Text>
                <Text>Carrera: Ing. Sistemas</Text>
                <Text>Cuatrimestre: 9°</Text>
            </MiModal>

            <BottomSheet
                visible={sheetVisible}
                onCerrar={() => setSheetVisible(false)}
                titulo="Bottom Sheet"
            >
                <Text>Este sale desde abajo.</Text>
                <Text>Se puede cerrar tocando el área oscura.</Text>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    boton: {
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
        marginBottom: 15,
        width: 220,
        alignItems: 'center',
    },
    botonTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});