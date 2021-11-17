import React from 'react';
import Title from 'antd/es/typography/Title';
import LightProject from './LightProject';

function LightProjectsContainer() {
  return (
    <div className={'lightProjectsContainer'}>
      <Title level={5} className={'ProjectTypeTitle'}>
        Most popular projects
      </Title>
      <div className="site-card-border-less-wrapper">
        <LightProject />
      </div>
    </div>
  );
}

export default LightProjectsContainer;
