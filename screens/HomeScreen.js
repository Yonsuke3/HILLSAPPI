import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const negocios = [
  {
    id: '1',
    nombre: 'JARAMILLO',
    categoria: 'Panadería',
    imagen: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    nombre: 'GUSMAN',
    categoria: 'Frutas y Verduras',
    imagen: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    nombre: 'SOSA CARNICERIA',
    categoria: 'Carnes',
    imagen: 'https://via.placeholder.com/100',
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
       <TouchableOpacity
  style={styles.boton}
  onPress={() => navigation.navigate('ProductList', { businessId: item.id })}
>
  <Text style={styles.botonTexto}>Ver más</Text>
</TouchableOpacity>


      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Negocios disponibles</Text>
      <FlatList
        data={negocios}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  imagen: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoria: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#2563eb',
    padding: 6,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  botonTexto: {
    color: '#fff',
  },
});
