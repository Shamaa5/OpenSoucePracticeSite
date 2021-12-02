import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageContainer from './HomePageContainer';
import LanguagesContainer from './LanguagesContainer';
import NotFound404 from './NotFound404';
import RepositoryCard from './RepositoryCard';
import MyProjects from './MyProjects';
import AddNewProject from './AddNewProject';

function ContentRoutes() {
  return (
    <div className={'MainContainer'}>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/language/:id" element={<LanguagesContainer />} />
        <Route path="/repository/:id" element={<RepositoryCard />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/new-project" element={<AddNewProject />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default ContentRoutes;
