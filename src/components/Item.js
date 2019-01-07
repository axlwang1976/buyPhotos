import React from 'react';
import styles from '../sass/components/Items.module.scss';

const Item = props => {
  return (
    <div className={styles.item}>
      <img src={props.item.urls.regular} alt={props.item.description} />
      <h4>{props.item.description}</h4>
      <p>
        價格：<span>{props.item.width}</span>
      </p>
      <button onClick={() => props.onAddToCart(props.item)}>加入購物車</button>
    </div>
  );
};

export default Item;
