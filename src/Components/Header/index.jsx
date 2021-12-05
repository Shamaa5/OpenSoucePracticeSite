import Navigate from './Navigate/Navigate';
import React from 'react';
import Logo from './Logo/index';
import { Col, Row } from 'antd';

function HeaderContainer() {
  return (
    <Row>
      <Col span={24}>
        <header>
          <Logo />
          <Navigate />
        </header>
      </Col>
    </Row>
  );
}

export default HeaderContainer;
