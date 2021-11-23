import React from 'react';
import LanguageContainer from './LanguageContainer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function LanguagesContainer(props) {
  // const repositories = useSelector(state => state.repositories.languageRepositories);
  // const params = useParams();

  return (
    <div className="site-card-border-less-wrapper">
      {/*{repositories.map(repo => {*/}
      return <LanguageContainer />
      {/*})}*/}
    </div>
  );
}

export default LanguagesContainer;
