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
        <ul className="cardItems">
          <li>
            <h2 className="RepoTitle"> {props.repo['full_name']}</h2>
          </li>

          <li>
            <div className="RepoDescription">{props.repo.description}</div>
          </li>

          <li>
            <div>
              <StarFilled style={{ color: '#f1b667' }} />:{' '}
              {props.repo['stargazers_count']}
            </div>
          </li>

          <li>
            <div>
              <ForkOutlined />: {''}
              {props.repo.forks_count}
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">Difficulty </span>:
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">Open Issues </span>: {''}
              {props.repo.open_issues}
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">GitHub </span>: {''}
              <a href={props.repo.html_url}>{props.repo.html_url}</a>
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">Created </span> :{' '}
              {moment(props.repo.created_at).format('DD.MM.YYYY')}
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">
                Most recent commit{' '}
              </span>
              : {moment(props.repo.pushed_at).startOf('hours').fromNow()}
            </div>
          </li>

          <li>
            <div>
              {' '}
              <span className="card-description-title">Watchers </span>:{' '}
              {props.repo.watchers}
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">Site </span> :{' '}
              {props.repo.homepage ? (
                <a href={props.repo.homepage}>{props.repo.homepage}</a>
              ) : (
                'Site is not specified'
              )}
            </div>
          </li>

          <li>
            <div>
              <span className="card-description-title">License </span>: {''}
              {props.repo.license ? props.repo.license.key : 'not specified'}
            </div>
          </li>

          <li>
            <div className="RepoCardOwnerAvatar">
              <img src={props.repo.owner.avatar_url} alt="" />
            </div>
          </li>
        </ul>
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
