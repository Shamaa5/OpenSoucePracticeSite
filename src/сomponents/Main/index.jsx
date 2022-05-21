import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import ContentRoutes from './ContentRoutes';

function Main() {
  const { Content } = Layout;

  return (
    <Layout className={'Layout-main'}>
      <Content className={'Content-main'}>
        <Layout className="site-layout-background">
          <Sidebar />
          <Content className={'Content-daughter'}>
            <ContentRoutes />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default Main;
