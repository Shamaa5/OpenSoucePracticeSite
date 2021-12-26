import React from 'react';
import { Button } from 'antd';
import {
  ArrowLeftOutlined,
  GithubOutlined,
  GoogleOutlined,
} from '@ant-design/icons';

import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login(props) {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Navigate to="/" state={{ from: '/Login' }} />;
  }
  return (
    <div className="LoginWrapper">
      <div className="LoginField">
        <div className="LoginBack" onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
        </div>
        <div>
          <h2>Choose authentication</h2>
        </div>
        <div>
          <Button icon={<GithubOutlined />} className="authBtn">
            {' '}
            Sing in with Github{' '}
          </Button>
        </div>
        <div>
          <Button icon={<GoogleOutlined />} className="authBtn">
            {' '}
            Sing in with Google{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
