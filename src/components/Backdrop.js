import React from 'react';
import styles from '../sass/components/Backdrop.module.scss';

const Backdrop = props =>
  props.modalShow ? (
    <div className={styles.backdrop} onClick={props.modalHide} />
  ) : null;

export default Backdrop;
