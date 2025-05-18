import React from 'react';
import AppNavigator from './AppNavigator';
import { CartProvider } from './context/CartContext.js';

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}