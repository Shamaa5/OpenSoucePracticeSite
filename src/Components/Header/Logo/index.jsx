import React from 'react';
import logo from '../../../assets/logo.svg';
import Text from 'antd/es/typography/Text';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <div className={'logoWrapper'}>
        <div className={'logo'}>
          <img src={logo} alt="" />
        </div>
        <Text level={1} style={{ color: 'white' }}>
          ShamaInc
        </Text>
      </div>
    </Link>
  );
}

export default Logo;
