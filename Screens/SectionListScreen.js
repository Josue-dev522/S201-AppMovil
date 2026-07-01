import { SectionList, StyleSheet, Text, View } from 'react-native';

export default function SectionListScreen() {

  const datos = [
    {
      title: 'Ingeniería en Sistemas',
      data: [
        { id: '1', nombre: 'Erick' },
        { id: '2', nombre: 'Javi' }
      ]
    },
    {
      title: 'Tecnologías de Información',
      data: [
        { id: '3', nombre: 'Ana' },
        { id: '4', nombre: 'Pedro' }
      ]
    }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Estudiantes por carrera
      </Text>

      <SectionList
        sections={datos}

        keyExtractor={(item) => item.id}

        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {section.title}
          </Text>
        )}

        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>
              {item.nombre}
            </Text>
          </View>
        )}

      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#90caf9',
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },

  card: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8
  },

  item: {
    fontSize: 16
  }

});