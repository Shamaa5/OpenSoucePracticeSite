import React from 'react';
import { useSelector } from 'react-redux';
import { Input, Space } from 'antd';
const { Search } = Input;
function AddNewProject(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const onSearch = () => {};
  if (isAuth) {
    return (
      <div>
        <h1>new project</h1>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: '30%' }}
        />
      </div>
    );
  }
  return <div>You need authorize to add projects</div>;
}

export default AddNewProject;
