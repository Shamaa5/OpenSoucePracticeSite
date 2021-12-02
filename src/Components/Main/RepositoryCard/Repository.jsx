import React from 'react';
import { StarFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NotFound404 from '../NotFound404';

function Repository(props) {
  const params = useParams();
  if (params.id === props.repo.id.toString()) {
    return (
      <div className="RepoCardWrapper">
        <h2 className="RepoTitle"> {props.repo['full_name']}</h2>
        <div />
        <div>{props.repo.description}</div>
        <div className="RepoCardOwnerAvatar">
          <img src={props.repo['owner']['avatar_url']} alt="" />
        </div>
        <div>
          <StarFilled style={{ color: '#f1b667' }} />:{' '}
          {props.repo['stargazers_count']}
        </div>
        <div>
          <a href={props.repo['html_url']}>{props.repo['html_url']}</a>
        </div>
        <div>Created : {props.repo['created_at']}</div>
        <div>{props.repo['license'['name']]}</div>
        <div>Open Issues</div>
        <div>Most Recent Commit</div>
        <div>Site</div>
      </div>
    );
  }
  return <NotFound404 />;
}
Repository.propTypes = {
  repo: PropTypes.object,
  license: PropTypes.object,
  html_url: PropTypes.string,
  description: PropTypes.string,
};
export default Repository;
