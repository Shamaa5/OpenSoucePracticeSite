import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';

function Sidebar(props) {
  const { SubMenu } = Menu;
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
        <SubMenu key="sub1" icon={<SettingOutlined />} title="Choose language">
          <Menu.Item key="1">JavaScript</Menu.Item>
          <Menu.Item key="2">Python</Menu.Item>
          <Menu.Item key="3">Java</Menu.Item>
          <Menu.Item key="4">C</Menu.Item>
          <Menu.Item key="5">C++</Menu.Item>
          <Menu.Item key="6">C#</Menu.Item>
          <Menu.Item key="7">Go</Menu.Item>
          <Menu.Item key="8">Ruby</Menu.Item>
          <Menu.Item key="9">Rust</Menu.Item>
          <Menu.Item key="10">PHP</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
