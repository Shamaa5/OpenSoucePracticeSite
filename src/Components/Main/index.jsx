import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import ContentRoutes from './ContentRoutes';

function Main() {
  const { Content } = Layout;

  return (
    <Layout style={{ minHeight: '85vh' }}>
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          <Sidebar />
          <Content
            style={{ padding: '0 30px', minHeight: 280, margin: '0 auto' }}
          >
            <ContentRoutes />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default Main;
