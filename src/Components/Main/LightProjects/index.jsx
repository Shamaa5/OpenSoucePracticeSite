import React from 'react';
import Title from 'antd/es/typography/Title';
import LightProject from './LightProject';
import { useSelector } from 'react-redux';

function LightProjectsContainer() {
  const repositories = useSelector((state) =>
    state.repositories.allRepositories.sort(
      (a, b) => b.forks_count - a.forks_count,
    ),
  );

  return (
    <div className={'lightProjectsContainer'}>
      <Title level={3} className={'ProjectTypeTitle'}>
        Light projects
      </Title>
      <div className="cards-container">
        {repositories.map((repo, index) => {
          if (index > 9) {
            return false;
          }
          return <LightProject key={repo.id + 'light'} repo={repo} />;
        })}
      </div>
    </div>
  );
}

export default LightProjectsContainer;
