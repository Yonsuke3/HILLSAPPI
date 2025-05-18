import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const productosPorNegocio = {
  1: [
    { id: "a", nombre: "Pan francés", precio: "$1.00" },
    { id: "b", nombre: "Pan dulce", precio: "$1.50" },
  ],
  2: [
    { id: "c", nombre: "Lechuga", precio: "$0.80" },
    { id: "d", nombre: "Tomate", precio: "$1.20" },
  ],
  3: [
    { id: "e", nombre: "Carne picada", precio: "$5.00" },
    { id: "f", nombre: "Milanesas", precio: "$4.50" },
  ],
};

export default function ProductListScreen({ route, navigation }) {
    const { addToCart } = useContext(CartContext);
  const { businessId } = route.params;
  const productos = productosPorNegocio[businessId] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos del negocio {businessId}</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
            <TouchableOpacity
              style={styles.botonCarrito}
              onPress={() => navigation.navigate("Cart")}
            >
              <Text style={styles.botonTexto}>Ir al carrito</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  nombre: { fontSize: 18 },
  precio: { fontSize: 16, color: 'gray' },
  
  botonCarrito: {
    marginTop: 20,
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
