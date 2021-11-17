import React from 'react';
import GitHubLogin from 'react-github-login';

function SingIn() {
  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.error(response);

  return <GitHubLogin onSuccess={onSuccess} onFailure={onFailure} />;
}

export default SingIn;
