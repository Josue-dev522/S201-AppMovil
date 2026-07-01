import { StyleSheet, Text, View } from 'react-native';

export function Estudiante({ nombre, carrera }) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Nombre: {nombre}</Text>
      <Text style={styles.texto}>Carrera: {carrera}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#6BCB77',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
  },
});