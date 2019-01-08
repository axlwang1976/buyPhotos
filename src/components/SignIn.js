import React from 'react';
import styles from '../sass/components/SignIn.module.scss';

const SignIn = props => (
  <div className={styles.login}>
    <p>會員登入</p>
    <button className="github" onClick={() => props.auth('GitHub')}>
      Log In With GitHub
    </button>
  </div>
);

export default SignIn;
