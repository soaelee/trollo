import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {

  const { board } = useSelector((state) => state.board);
  const members = board.members;

  let history = useHistory();

  const onLogout = () => {
    history.replace('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="">
          <img src="./imgs/logo.png" alt="Logo" />
        </a>
      </div>
      <div className={styles.buttons}>
        <button className={styles.memberBtn}>{members[0].charAt(0)}</button>
        <button className={styles.logoutBtn} onClick={onLogout}>
          <img src="./imgs/logout.png" alt="logout" />
        </button>
      </div>
    </header>
  );
};

export default Header;
