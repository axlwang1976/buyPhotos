import React from 'react';
import CartItem from './CartItem';
import styles from '../sass/components/CartSummary.module.scss';

const CartSummary = props => {
  const cartItems = props.cartItems.map(item => {
    return (
      <CartItem
        key={item.id}
        index={item.id}
        item={item}
        onDelete={props.onDelete}
      />
    );
  });

  let cartSummary = (
    <div className={styles.cart_summary}>
      <h1>訂單明細</h1>
      {cartItems}
      <h2>總金額：{props.totalPrice}</h2>
      <button onClick={props.onCancel}>取消</button>
      <button onClick={props.onContinue}>送出</button>
    </div>
  );

  if (props.cartItems.length === 0) {
    cartSummary = (
      <div className={styles.cart_summary}>
        <h1>未選擇任何照片</h1>
      </div>
    );
  }

  return cartSummary;
};

export default CartSummary;
