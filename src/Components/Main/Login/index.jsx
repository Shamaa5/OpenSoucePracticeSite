import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GithubLogin from './GithubLogin';
import GoogleLogin from './GoogleLogin';

function Login() {
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
        <GithubLogin />
        <GoogleLogin />
      </div>
    </div>
  );
}

export default Login;
