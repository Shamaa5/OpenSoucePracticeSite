import React from 'react';
import logo from './logo.svg';
import Text from 'antd/es/typography/Text';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <div className={'logoWrapper'}>
        <div className={'logo'}>
          <img src={logo} alt="" style={{ margineRight: 20 }} />
        </div>
        <Text level={1}>ShamaInc</Text>
      </div>
    </Link>
  );
}

export default Logo;
