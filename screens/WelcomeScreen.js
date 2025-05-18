import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Welcome.jpeg')} // asegurate de que la imagen exista en esa ruta
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>¡Bienvenido a HillsAppi!</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar sesión"
          onPress={() => navigation.navigate('Login')}
          color="#2563eb"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('Register')}
          color="#10b981"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});
enter


