import React from 'react';
import { Dropdown, Menu, Skeleton } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserSettings() {
  const userName = null;
  const avatarUrl = null;
  console.log(avatarUrl);

  const loading = useSelector((state) => state.auth.loading);

  const menu = (
    <Menu>
      <Menu.Item key={1}>{`${userName}`}</Menu.Item>
      <Menu.Item key={2}>
        <Link to="/my-projects">Your projects</Link>
      </Menu.Item>
      <Menu.Item key={3}>
        <Link to="/new-project">Add new project</Link>
      </Menu.Item>
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
