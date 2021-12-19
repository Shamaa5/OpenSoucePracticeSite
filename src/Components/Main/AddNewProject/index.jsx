import React from 'react';
import { useSelector } from 'react-redux';

function AddNewProject(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return (
      <div>
        <h1>new project</h1>
        <label htmlFor="">
          <input type="search" />
        </label>
      </div>
    );
  }
  return <div>You need authorize to add projects</div>;
}

export default AddNewProject;
