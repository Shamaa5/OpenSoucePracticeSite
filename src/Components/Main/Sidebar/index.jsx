import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Link, useParams } from 'react-router-dom';

function Sidebar(props) {
  const { SubMenu } = Menu;
  const id = useParams().id;
  console.log(id);
  const handleLoadLanguage = () => {};
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
        <SubMenu key="sub1" icon={<SettingOutlined />} title="Choose language">
          <Menu.Item key="1" onClick={() => handleLoadLanguage(id)}>
            <Link to="/language/JavaScript">JavaScript</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/language/Python">Python</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/language/Java">Java</Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/language/C">C</Link>
          </Menu.Item>

          <Menu.Item key="5">
            <Link to="/language/C++">C++</Link>
          </Menu.Item>

          <Menu.Item key="6">
            <Link to="/language/C#">C#</Link>
          </Menu.Item>

          <Menu.Item key="7">
            <Link to="/language/Go">Go</Link>
          </Menu.Item>

          <Menu.Item key="8">
            <Link to="/language/Ruby">Ruby</Link>
          </Menu.Item>

          <Menu.Item key="9">
            <Link to="/language/Rust">Rust</Link>
          </Menu.Item>

          <Menu.Item key="10">
            <Link to="/language/PHP">PHP</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
