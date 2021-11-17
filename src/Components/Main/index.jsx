import React from 'react';
import { Layout } from 'antd';
import ContentMain from './ContentMain';
import Sidebar from './Sidebar';

function Main() {
  const { Content } = Layout;
  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          <Sidebar />
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ContentMain />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default Main;
