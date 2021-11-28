import React from 'react';
import TitleContainer from './TitleContainer';
import LightProjectsContainer from './LightProjects';
import PopularProjects from './PopularProjects';
import OtherProjectsContainer from './OtherProjects';
import { useSelector } from 'react-redux';

import { Skeleton } from 'antd';

function HomePageContainer(props) {
  const loading = useSelector((state) => state.repositories.loading);

  if (loading) {
    return <Skeleton active />;
  }
  return (
    <div>
      <TitleContainer />
      <LightProjectsContainer />
      <PopularProjects />
      <OtherProjectsContainer />
    </div>
  );
}

export default HomePageContainer;
