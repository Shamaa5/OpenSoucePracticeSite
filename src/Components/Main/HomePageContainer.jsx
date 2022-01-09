import React from 'react';
import TitleContainer from './TitleContainer';
import LightProjectsContainer from './LightProjects';
import PopularProjects from './PopularProjects';
import OtherProjectsContainer from './OtherProjects';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import SortRepositories from '../SortRepositories';

function HomePageContainer() {
  const loading = useSelector((state) => state.repositories.loading);

  if (loading) {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </>
    );
  }
  return (
    <div>
      <TitleContainer />
      <SortRepositories />
      <LightProjectsContainer />
      <PopularProjects />
      <OtherProjectsContainer />
    </div>
  );
}

export default HomePageContainer;
