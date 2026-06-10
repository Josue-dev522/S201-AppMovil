import { Image, Text, View } from 'react-native';

export const Saludo_2 = () => {
  return (
    <View>
      <Text>Hola RN: Componente Propio 2</Text>

      <Image
        source={require('../assets/mano.png')}
        style={{
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};
