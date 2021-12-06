import React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/actions';
import { getAuth, signOut } from 'firebase/auth';

function LogOut() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOut());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Menu.Item danger onClick={handleLogOut}>
      Log out
    </Menu.Item>
  );
}

export default LogOut;
