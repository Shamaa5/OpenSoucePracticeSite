import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import LoginGithub from 'react-login-github';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../../redux/actions';

function SingIn(props) {
  const dispatch = useDispatch();
  const onSuccess = (response) => dispatch(userLogIn(response));
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
