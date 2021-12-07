import React from 'react';
import { useDispatch } from 'react-redux';
import { GithubOutlined } from '@ant-design/icons';
import {
  authentication,
  signInWithPopup,
  GithubAuthProvider,
} from '../../../firebase config/firebase-config';
import { Button } from 'antd';
import { userLogIn } from '../../../redux/actions';

function SingIn() {
  const dispatch = useDispatch();

  const handleAuth = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        dispatch(userLogIn(res));
      })
      .catch((err) => console.log(err));
  };
  return (
    <Button onClick={handleAuth}>
      Sing in with <GithubOutlined />
    </Button>
  );
}

export default SingIn;
