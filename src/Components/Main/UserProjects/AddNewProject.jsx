import React, { useState } from 'react';
import Search from 'antd/es/input/Search';
import { postUserProject } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function AddNewProject() {
  const userId = useSelector((state) => state.auth.user.id);
  const loading = useSelector((state) => state.userReducer.loading);
  const Error = useSelector((state) => state.userReducer.Error);
  const dispatch = useDispatch();

  const [link, setLink] = useState('');

  const onSearch = () => {
    dispatch(postUserProject(link, userId));
    setLink('');
  };
  return (
    <div>
      <h2>Add github repository owner name/project name</h2>
      <Search
        placeholder="intocode/pre-bootcamp"
        allowClear
        enterButton="Add"
        size="large"
        onSearch={onSearch}
        style={{ width: '30%' }}
        onChange={(e) => setLink(e.target.value)}
        disabled={loading}
      />
      {Error && (
        <div className="Error">Something went wrong. Kill yourself</div>
      )}
    </div>
  );
}

export default AddNewProject;
