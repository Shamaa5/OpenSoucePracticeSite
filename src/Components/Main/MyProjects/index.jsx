import React from 'react';
import { useSelector } from 'react-redux';

function MyProjects(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <div>You need authorize to add projects</div>;
  }

  return;
  <div> Why are you gay?</div>;
}
export default MyProjects;
