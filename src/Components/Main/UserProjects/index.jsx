import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Skeleton } from 'antd';
import Title from 'antd/es/typography/Title';
import { loadUserProjects } from '../../../redux/actions';
import UserProject from './UserProject';
import AddNewProject from './AddNewProject';

function UserProjects() {
  const userId = useSelector((state) => state.auth.user.id);

  const repository = useSelector((state) =>
    state.userReducer.Repositories.filter(
      (value) => value.Added_user_id === userId,
    ),
  );

  const isAuth = useSelector((state) => state.auth.isAuth);

  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(loadUserProjects());
    }
  }, [isAuth, dispatch]);

  if (!isAuth) {
    return <div>You need authorize to add projects</div>;
  }
  if (loading) {
    return <Skeleton active card />;
  }
  return (
    <div>
      <div className="UserActionsButtons">
        <div className="AddNewProjectWrapper">
          <Button icon={<PlusOutlined className={'AddNewProjectBtn'} />}>
            <div className="description">
              <i>Add new project</i>
            </div>
          </Button>
        </div>
        <AddNewProject />
      </div>
      <div className="lightProjectsContainer">
        <Title level={2} className={'ProjectTypeTitle'}>
          Your projects
        </Title>
        {repository.length < 1 ? (
          <div style={{ fontSize: 17, fontWeight: 500 }}>
            You have no added projects yet
          </div>
        ) : (
          repository.map((repo) => {
            return <UserProject repo={repo} key={repo.id} />;
          })
        )}
      </div>
    </div>
  );
}
export default UserProjects;
