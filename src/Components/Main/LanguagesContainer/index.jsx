import React, { useEffect } from 'react';
import LanguageContainer from './LanguageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadLanguages } from '../../../redux/actions';
import { Skeleton } from 'antd';
import Title from 'antd/es/typography/Title';
import SortRepositories from '../SortRepositories';

function LanguagesContainer() {
  const repositories = useSelector(
    (state) => state.repositories.allRepositories,
  );
  const loading = useSelector((state) => state.repositories.loading);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadLanguages(params.id));
    }
  }, [dispatch, params.id]);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div className={'lightProjectsContainer'}>
      <Title level={3} className={'ProjectTypeTitle'}>
        Most popular {params.id} projects
      </Title>
      <SortRepositories />
      <div className="cards-container">
        {repositories.map((repo) => {
          return <LanguageContainer repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}

export default LanguagesContainer;
