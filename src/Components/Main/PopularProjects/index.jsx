import React from 'react';
import Title from 'antd/es/typography/Title';
import PopularProject from './PopularProject';


function PopularProjects(props) {
  return (
    <div className={'lightProjectsContainer'}>
      <Title level={5} className={'ProjectTypeTitle'}>
        Popular projects
      </Title>
      <div className="site-card-border-less-wrapper">
        <PopularProject />
      </div>
    </div>
  );
}

export default PopularProjects;