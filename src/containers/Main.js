import React from 'react';
import SearchBar from '../components/SearchBar';
import Items from '../components/Items';
import Spinner from '../components/Spinner';
import styles from '../sass/containers/Main.module.scss';

const Main = props => {
  let items = <Items items={props.items} onAddToCart={props.onAddToCart} />;

  if (props.loading) {
    items = <Spinner message="搜尋中..." />;
  }

  return (
    <div className={styles.main}>
      <SearchBar onSearchSubmit={props.onSearchSubmit} />
      {items}
    </div>
  );
};

export default Main;
