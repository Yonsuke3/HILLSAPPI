import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../context/CartContext.js";
export default function CartScreen() {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrito de compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>
              {item.nombre} (x{item.cantidad})
            </Text>
            <Text style={styles.precio}>{item.precio}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botonVaciar} onPress={clearCart}>
        <Text style={styles.botonTexto}>Vaciar carrito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#eee" },
  nombre: { fontSize: 18 },
  precio: { fontSize: 16, color: "gray" },
  botonVaciar: {
    marginTop: 20,
    backgroundColor: "#ef4444",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
