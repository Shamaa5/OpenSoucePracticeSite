import React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/actions';

function LogOut() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
    dispatch(logOut());
  };
  return (
    <Menu.Item danger onClick={handleLogOut}>
      Log out
    </Menu.Item>
  );
}

export default LogOut;
