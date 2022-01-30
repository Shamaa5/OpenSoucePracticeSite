import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

function GoogleLogin(props) {
  return (
    <div>
      <Button icon={<GoogleOutlined />} className="authBtn" disabled>
        {' '}
        Sing in with Google{' '}
      </Button>
    </div>
  );
}

export default GoogleLogin;
