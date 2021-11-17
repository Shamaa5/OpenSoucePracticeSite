import React from 'react';
import TitleContainer from './TitleContainer';
import LightProjectsContainer from './LightProjects';
import OtherProjectsContainer from './OtherProjects';
import PopularProjects from './PopularProjects';



function ContentMain() {
  return (
    <div className={'MainContainer'}>
      <TitleContainer />
      <LightProjectsContainer />
      <PopularProjects />
      <OtherProjectsContainer />
    </div>
  );
}

export default ContentMain;
