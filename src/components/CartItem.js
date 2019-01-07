import React from 'react';
import styles from '../sass/components/CartItem.module.scss';

const CartItem = props => {
  return (
    <div className={styles.cartItem}>
      <img src={props.item.urls.regular} alt={props.item.description} />
      <div className={styles.text_container}>
        <h4>{props.item.description}</h4>
        <p>
          價格：<span>{props.item.width}</span>
        </p>
        <button
          className={styles.btn_delete}
          onClick={() => props.onDelete(props.index)}
        >
          刪除
        </button>
      </div>
    </div>
  );
};

export default CartItem;
