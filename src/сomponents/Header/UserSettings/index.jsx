import React from 'react';
import { Dropdown, Menu, Skeleton } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserSettings() {
  const userName = useSelector((state) => state.auth.user.username);
  const avatarUrl = useSelector((state) => state.auth.user.photos[0].value);

  const loading = useSelector((state) => state.auth.loading);

  const menu = (
    <Menu>
      <Menu.Item key={1} style={{ cursor: 'default' }}>
        Signed as <b>{`${userName}`}</b>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to="/my-projects">Your projects</Link>
      </Menu.Item>
      <Menu.Item key={3}>Delete account</Menu.Item>
      <LogOut />
    </Menu>
  );

  if (loading) {
    return <Skeleton avatar active />;
  }
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Avatar
        size={40}
        style={{
          backgroundImage: `url(${avatarUrl}`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
    </Dropdown>
  );
}

export default UserSettings;
