import React from 'react';
import { Button } from 'antd';
import UserSettings from '../UserSettings';
import SingIn from './SingIn';
import { useSelector } from 'react-redux';

function Navigation() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <ul className={'Nav'}>
      <li>
        <Button type="default">Contact us </Button>
      </li>
      <li>
        <Button type="default"> Upgrade </Button>
      </li>
      <li>{!isAuth ? <SingIn /> : <UserSettings />}</li>
    </ul>
  );
}

export default Navigation;
