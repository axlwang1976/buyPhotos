import React from 'react';
import Item from './Item';
import styles from '../sass/components/Items.module.scss';

const Items = props => {
  const itemsImg = props.items.map(item => {
    return <Item key={item.id} item={item} onAddToCart={props.onAddToCart} />;
  });

  return <div className={styles.items_container}>{itemsImg}</div>;
};

export default Items;
