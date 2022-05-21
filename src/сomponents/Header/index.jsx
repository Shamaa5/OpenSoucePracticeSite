import Navigation from './Navigation/index';
import React from 'react';
import Logo from './Logo/index';
import { Col, Row } from 'antd';

function HeaderContainer() {
  return (
    <Row>
      <Col span={24}>
        <header>
          <Logo />
          <Navigation />
        </header>
      </Col>
    </Row>
  );
}

export default HeaderContainer;
