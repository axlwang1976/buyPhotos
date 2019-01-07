import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavItem from './NavItem';
import styles from '../sass/components/NavItems.module.scss';

const NavItems = props => {
  let cartCount = <span>({props.cartCount})</span>;

  if (props.cartCount === 0) {
    cartCount = '';
  }

  return (
    <ul className={styles.navItems}>
      {/* <NavItem link="/" itemName="首頁" />
      <NavItem link="/cart" itemName="購物車" />
      <NavItem itemName="登入" /> */}
      <li>
        <NavLink to="/" exact activeClassName={styles.active}>
          首頁
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" activeClassName={styles.active}>
          購物車{cartCount}
        </NavLink>
      </li>
      <li>
        <a href="javascript:;" onClick={props.onSignInClicked}>
          登入
        </a>
      </li>
    </ul>
  );
};

export default NavItems;
