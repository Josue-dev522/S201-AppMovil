import { useState } from 'react';
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const fondo1 = require('../assets/bg_1.jpg');
const fondo2 = require('../assets/bg_2.jpeg');

export function ImagenFondo() {
  const [fondo, setFondo] = useState(false);

  return (
    <ImageBackground
      source={fondo ? fondo1 : fondo2}
      style={styles.container}
      resizeMode="cover"
      blurRadius={6}
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={styles.vista}>
        <Pressable
          style={styles.boton}
          onPress={() => setFondo(!fondo)}
        >
          <Text>Cambiar Fondo</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  vista: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boton: {
    backgroundColor: '#6484b1',
    padding: 10,
    borderRadius: 10,
  },
});