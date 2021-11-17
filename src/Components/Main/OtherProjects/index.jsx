import React from 'react';
import Title from 'antd/es/typography/Title';
import OtherProject from './OtherProject';


function OtherProjectsContainer(props) {
    return (
    <div className={'lightProjectsContainer'}>
      <Title level={5} className={'ProjectTypeTitle'}>
        Other projects
      </Title>
      <div className="site-card-border-less-wrapper">
        <OtherProject />
      </div>
    </div>
  );
}

export default OtherProjectsContainer;