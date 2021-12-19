import React from 'react';
import { useDispatch } from 'react-redux';
import LoginGithub from 'react-login-github';
import { userLogIn, test } from '../../../redux/actions';
import { GithubOutlined } from '@ant-design/icons';

function SingIn() {
  const dispatch = useDispatch();
  const onSuccess = (response) => dispatch(test(response.code));
  const onFailure = (response) => console.error(response);
  return (
    <LoginGithub
      clientId="94e7ef77a0fdf11674ae"
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText={null}
      className="LoginButton"
    >
      Login with <GithubOutlined />
    </LoginGithub>
  );
}

export default SingIn;
