import React from 'react';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Skeleton } from 'antd';
import Title from 'antd/es/typography/Title';

function UserProjects() {
  const repository = useSelector((state) => state.repositories.userRepository);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loading = useSelector(
    (state) => state.repositories.loadingUserRepository,
  );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(loadUserProjects());
  //   }
  // }, [isAuth, dispatch]);

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
          <Link to="/new-project">
            <Button icon={<PlusOutlined className={'AddNewProjectBtn'} />}>
              <div className="description">
                {' '}
                <i>Add new project</i>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="lightProjectsContainer">
        <Title level={2} className={'ProjectTypeTitle'}>
          Your projects
        </Title>
        {repository.length < 1 ? (
          <div style={{ fontSize: 17, fontWeight: 500 }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            it's quiet here for now
          </div>
        ) : (
          repository.map((repo) => {
            return <UserProjects repo={repo} key={repo.id} />;
          })
        )}
      </div>
    </div>
  );
}
export default UserProjects;
