// src/components/CartWidget.jsx
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Asegúrate de que esta línea no tiene errores

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
      <ShoppingCartIcon />
      <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>7</span>
    </div>
  );
};

export default CartWidget;
