import React from 'react';
import Avatar from 'antd/es/avatar/avatar';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Navigate(props) {
  return (
    <ul className={'Nav'}>
      <li>
        <Button type="primary">Contact us </Button>{' '}
      </li>
      <li>
        <Button type="primary">Donate </Button>{' '}
      </li>
      <li>
        <Button type="primary" icon={<GithubOutlined />}>
          Sing in
        </Button>
      </li>
      <li>
        <Avatar size={45} icon={<UserOutlined />} />
      </li>
    </ul>
  );
}

export default Navigate;
