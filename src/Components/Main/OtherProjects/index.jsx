import React from 'react';
import Title from 'antd/es/typography/Title';
import OtherProject from './OtherProject';
import { useSelector } from 'react-redux';

function OtherProjectsContainer(props) {
  const repositories = useSelector(
    (state) => state.repositories.allRepositories,
  );
  return (
    <div className={'lightProjectsContainer'}>
      <Title level={2} className={'ProjectTypeTitle'}>
        Other projects
      </Title>
      <div className="cards-container">
        {repositories.map((repo, index) => {
          if (index < 19) {
            return false;
          }
          return <OtherProject repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}

export default OtherProjectsContainer;
