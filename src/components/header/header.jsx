import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutRequestAction } from '../../reducers/user';
import styles from './header.module.css';

const Header = () => {

  const { board } = useSelector((state) => state.board);
  const members = board.members;
  const { loginDone, loginError } = useSelector( state => state.user)
  
  useEffect(() => {
    if(!loginDone) {
      history.replace('/')
    }
    if(loginError) {
      alert(loginError)
    }
  }, [loginDone, loginError]);
  
  
  let history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutRequestAction())
    history.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <img src="./imgs/logo.png" alt="Logo" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.memberBtn}>{members[0].charAt(0)}</button>
        <button className={styles.logoutBtn} onClick={onLogout}>
          <img src="./imgs/logout.png" alt="Logout image" />
        </button>
      </div>
    </header>
  );
};

export default Header;
