import React from 'react';
import { ForkOutlined, StarFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NotFound404 from '../NotFound404';
import moment from 'moment';

function Repository(props) {
  const params = useParams();
  if (params.id === props.repo.id.toString()) {
    return (
      <div className="RepoCardWrapper">
        <h2 className="RepoTitle"> {props.repo['full_name']}</h2>

        <div className="RepoDescription">{props.repo.description}</div>

        <div>
          <StarFilled style={{ color: '#f1b667' }} />:{' '}
          {props.repo['stargazers_count']}
        </div>

        <div>
          <ForkOutlined />: {''}
          {props.repo.forks_count}
        </div>

        <div>Difficulty:</div>

        <div>
          Open Issues: {''}
          {props.repo.open_issues}
        </div>

        <div>
          GitHub: {''}
          <a href={props.repo.html_url}>{props.repo.html_url}</a>
        </div>

        <div>
          Created : {moment(props.repo.created_at).format('DD.MM.YYYY')}
        </div>

        <div>
          Most recent commit:{' '}
          {moment(props.repo.pushed_at).startOf('day').fromNow()}
        </div>

        <div>Watchers: {props.repo.watchers}</div>
        <div>
          Site :{' '}
          {props.repo.homepage ? (
            <a href={props.repo.homepage}>{props.repo.homepage}</a>
          ) : (
            'Site is not specified'
          )}
        </div>

        <div>
          License: {''}
          {props.repo.license.key}
        </div>

        <div className="RepoCardOwnerAvatar">
          <img src={props.repo.owner.avatar_url} alt="" />
        </div>
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
