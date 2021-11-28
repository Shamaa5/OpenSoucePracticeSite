import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageContainer from './HomePageContainer';
import LanguagesContainer from './LanguagesContainer';
import LanguageContainer from './LanguagesContainer/LanguageContainer';
import NotFound404 from './NotFound404';
import RepositoryCard from './RepositoryCard';

function ContentRoutes() {
  return (
    <div className={'MainContainer'}>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/language" element={<LanguagesContainer />}>
          <Route path=":id" element={<LanguageContainer />} />
        </Route>
        <Route path="/:id" element={<RepositoryCard />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default ContentRoutes;
