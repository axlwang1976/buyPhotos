import React from 'react';
import Nav from './Nav';
import styles from '../sass/containers/Header.module.scss';

const Header = props => {
  const logoClass = `shopping bag icon`;
  return (
    <div className={styles.header}>
      <h1>
        <i className={logoClass} />
        BUY PHOTOS
      </h1>
      <Nav
        cartCount={props.cartCount}
        onSignInClicked={props.onSignInClicked}
      />
    </div>
  );
};

export default Header;
