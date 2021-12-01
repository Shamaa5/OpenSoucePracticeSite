import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { loadRepository } from '../../../redux/actions';
import Repository from './Repository';

function RepositoryCard() {
  const repository = useSelector((state) => state.repositories.repository);
  const params = useParams();
  const loading = useSelector((state) => state.repositories.loadingRepository);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.id) {
      dispatch(loadRepository(params.id));
    }
  }, [dispatch, params.id]);

  if (loading || !repository) {
    return <Skeleton active />;
  }
  return (
    <div>
      {repository.map((repo) => {
        return <Repository repo={repo} key={repo.id} />;
      })}
    </div>
  );
}

export default RepositoryCard;
