import React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/actions';

function LogOut(props) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Menu.Item danger onClick={handleLogOut}>
      Log out
    </Menu.Item>
  );
}

export default LogOut;
