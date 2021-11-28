import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { loadRepository } from '../../../redux/actions';
import { StarFilled } from '@ant-design/icons';

function RepositoryCard() {
  const repository = useSelector((state) => state.repositories.repository);
  const params = useParams();
  const loading = useSelector((state) => state.repositories.loadingRerository);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadRepository(params.id));
    }
  }, [dispatch, params.id]);

  if (loading || !repository) {
    return <Skeleton active />;
  }
  return (
    <div>
      <h2> {repository['full_name']}</h2>
      <div />
      <div>{repository.description}</div>
      <div>
        <StarFilled style={{ color: '#f1b667' }} />:{' '}
        {repository['stargazers_count']}
      </div>
      <div>
        <a href={repository['html_url']}>{repository['html_url']}</a>
      </div>
      <div>Created : {repository['created_at']}</div>
      {/*<div>{repository.license['name']}</div>*/}
      <div>Open Issues</div>
      <div>Most Recent Commit</div>
      <div>Site</div>
    </div>
  );
}

export default RepositoryCard;
