import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import { Layout } from 'antd';

function FooterContainer(props) {
  return (
    <Layout>
      <Footer style={{ textAlign: 'center' }}>
        Created by ©ShamaInc in collaboration with Intocode 2021
      </Footer>
    </Layout>
  );
}

export default FooterContainer;
