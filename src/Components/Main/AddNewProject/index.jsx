import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { postUserProject } from '../../../redux/actions';
const { Search } = Input;

function AddNewProject() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const [link, setLink] = useState('');

  const onSearch = () => {
    dispatch(postUserProject(link));
  };

  if (isAuth) {
    return (
      <div>
        <h1>New project</h1>
        <h2>Add github repository owner name/project name</h2>
        <Search
          placeholder="intocode/pre-bootcamp"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: '30%' }}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
    );
  }
  return <div>You need authorize to add projects</div>;
}

export default AddNewProject;
