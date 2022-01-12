import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const { SubMenu } = Menu;
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" defaultOpenKeys={['none']}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Projects">
          <Menu.Item key="10">Я</Menu.Item>
          <Menu.Item key="11">Не </Menu.Item>
          <Menu.Item key="12">Знаю</Menu.Item>
          <Menu.Item key="13">Что добавить</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<SettingOutlined />} title="Languages">
          <Menu.Item key="1">
            <NavLink to="/language/JavaScript">JavaScript</NavLink>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLink to="/language/Python">Python</NavLink>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/language/Java">Java</NavLink>
          </Menu.Item>

          <Menu.Item key="4">
            <NavLink to="/language/C">C</NavLink>
          </Menu.Item>

          <Menu.Item key="5">
            <NavLink to="/language/C++">C++</NavLink>
          </Menu.Item>

          <Menu.Item key="6">
            <NavLink to="/language/Go">Go</NavLink>
          </Menu.Item>

          <Menu.Item key="7">
            <NavLink to="/language/Ruby">Ruby</NavLink>
          </Menu.Item>

          <Menu.Item key="8">
            <NavLink to="/language/Rust">Rust</NavLink>
          </Menu.Item>

          <Menu.Item key="9">
            <NavLink to="/language/PHP">PHP</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
