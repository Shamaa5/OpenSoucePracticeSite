import React from 'react';
import { Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';
import LogOut from './LogOut';

function UserSettings() {
  const userName = null;
  const menu = (
    <Menu>
      <Menu.Item key={1}>{`Singed as ${userName}`}</Menu.Item>
      <Menu.Item key={2}>Your projects</Menu.Item>
      <Menu.Item key={3}>Add new project</Menu.Item>
      <LogOut />
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Avatar size={40} icon={<UserOutlined />} />
    </Dropdown>
  );
}

export default UserSettings;
