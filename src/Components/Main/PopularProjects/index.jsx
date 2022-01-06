import React from 'react';
import Title from 'antd/es/typography/Title';
import PopularProject from './PopularProject';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';

function PopularProjects(props) {
  const repositories = useSelector(
    (state) => state.repositories.allRepositories,
  );
  const loading = useSelector((state) => state.repositories.loading);
  if (loading) {
    return <Skeleton active />;
  }
  return (
    <div className={'lightProjectsContainer'}>
      <Title level={3} className={'ProjectTypeTitle'}>
        Popular projects
      </Title>
      <div className="cards-container">
        {repositories.map((repo, index) => {
          if (index > 29) {
            return false;
          }
          return <PopularProject repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}

export default PopularProjects;
