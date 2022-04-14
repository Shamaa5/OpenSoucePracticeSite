import React from 'react';
import { Card } from 'antd';
import { ForkOutlined, StarFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserProject(props) {
  return (
    <NavLink to={`/repository/${props.repo.id}`}>
      <Card
        hoverable
        title={props.repo.name}
        bordered={false}
        className={'Card'}
      >
        <div className="card-stars">
          <StarFilled className={'Button_star_orange'} />:{' '}
          {props.repo.stargazers_count}
        </div>
        <div className="card-forks">
          <ForkOutlined />: {props.repo.forks_count}
        </div>
        <div className="card-difficulty">
          difficulty: {props.repo.difficulty}{' '}
        </div>
        <div className="card-description"> {props.repo.description} </div>
      </Card>
    </NavLink>
  );
}
UserProject.propTypes = {
  repo: PropTypes.object,
  name: PropTypes.string,
  html_url: PropTypes.string,
  stargazers_count: PropTypes.number,
  description: PropTypes.string,
  forks_count: PropTypes.number,
};
export default UserProject;
