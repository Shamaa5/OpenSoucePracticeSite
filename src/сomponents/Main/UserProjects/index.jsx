import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Skeleton } from 'antd';
import Title from 'antd/es/typography/Title';
import UserProject from './UserProject';
import AddNewProject from './AddNewProject';

function UserProjects() {
  const userId = useSelector((state) => state.auth.user.id);

  const repository = useSelector((state) =>
    state.userReducer.Repositories?.filter(
      (value) => value.Added_user_id === userId,
    ),
  );

  const isAuth = useSelector((state) => state.auth.isAuth);

  const loading = useSelector((state) => state.userReducer.loading);

  const [visible, setVisible] = useState(false);

  if (!isAuth) {
    return <div>You need authorize to add projects</div>;
  }
  if (loading) {
    return <Skeleton active />;
  }
  return (
    <div>
      <div className="UserActionsButtons">
        <div className="AddNewProjectWrapper">
          <Button
            icon={
              <PlusOutlined className={!visible ? '' : 'rotate'} id="foo" />
            }
            onClick={() => setVisible(!visible)}
          >
            <div className="description">
              <i>Add new project</i>
            </div>
          </Button>
        </div>
        <AddNewProject visible={visible} />
      </div>
      <div className="lightProjectsContainer">
        <Title level={2} className={'ProjectTypeTitle'}>
          Your projects
        </Title>
        <div className="cards-container">
          {repository.length < 1 ? (
            <h2>You have no added projects yet :(</h2>
          ) : (
            repository.map((repo) => {
              return <UserProject repo={repo} key={repo.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
export default UserProjects;
