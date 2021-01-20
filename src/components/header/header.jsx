import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutRequestAction } from '../../reducers/user';
import styles from './header.module.css';

const Header = () => {
  const { user, loginDone, loginError } = useSelector((state) => state.user);

  useEffect(() => {
    if (!loginDone) {
      history.replace('/');
    }
    if (loginError) {
      alert(loginError);
    }
  }, [loginDone, loginError]);

  let history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutRequestAction());
    history.replace('/');
  };

  return (
    <header className={loginDone ? styles.header1 : styles.header2}>
      <div className={styles.logo}>
        <img src="./imgs/logo.png" alt="Logo" />
      </div>
      {/* 로그인 후 user버튼, 로그아웃 버튼 보여줌 */}
      {loginDone && (
        <div className={styles.buttons}>
          <button className={styles.memberBtn}>{user && user.name.slice(0, 1).toUpperCase()}</button>
          <button className={styles.logoutBtn} onClick={onLogout}>
            <img src="./imgs/logout.png" alt="Logout image" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
