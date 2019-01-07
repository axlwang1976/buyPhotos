import React from 'react';
import Backdrop from './Backdrop';
import styles from '../sass/components/Modal.module.scss';

const Modal = props => (
  <>
    <div
      className={styles.modal}
      style={{
        transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)'
      }}
    >
      {props.children}
    </div>
    <Backdrop modalShow={props.modalShow} modalHide={props.modalHide} />
  </>
);

export default Modal;
