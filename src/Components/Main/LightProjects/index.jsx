import React from 'react';
import Title from 'antd/es/typography/Title';
import LightProject from './LightProject';
import { useSelector } from 'react-redux';

function LightProjectsContainer() {
  const repositories = useSelector((state) =>
    state.userReducer.Repositories.sort((a, b) => b.difficulty - a.difficulty),
  );

  return (
    <div className={'lightProjectsContainer'}>
      <Title level={3} className={'ProjectTypeTitle'}>
        Light projects
      </Title>
      <div className="cards-container">
        {repositories.map((repo) => {
          return <LightProject key={repo.id + 'light'} repo={repo} />;
        })}
      </div>
    </div>
  );
}

export default LightProjectsContainer;
