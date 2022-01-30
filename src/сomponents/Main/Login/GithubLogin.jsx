import React from 'react';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

function GithubLogin(props) {
  const handleGithubAuth = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };
  return (
    <div>
      <Button
        icon={<GithubOutlined />}
        className="authBtn"
        onClick={handleGithubAuth}
      >
        {' '}
        Sing in with Github{' '}
      </Button>
    </div>
  );
}

export default GithubLogin;
