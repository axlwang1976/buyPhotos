import React from 'react';
import CartSummary from '../components/CartSummary';

const Cart = props => {
  const onCancel = () => props.history.push('/');

  return (
    <CartSummary
      cartItems={props.cartItems}
      onCancel={onCancel}
      onContinue={props.onContinue}
      totalPrice={props.totalPrice}
      onDelete={props.onDelete}
    />
  );
};

export default Cart;
