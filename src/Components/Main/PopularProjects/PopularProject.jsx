import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { ForkOutlined, StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function PopularProject(props) {
  return (
    <Link to={`/${props.repo.id}`}>
      <Card
        hoverable
        title={props.repo.name}
        bordered={false}
        style={{
          width: 280,
          marginBottom: 20,
          background: 'white',
          height: 250,
          boxSizing: 'border-box',
        }}
      >
        <div className="card-stars">
          <StarFilled style={{ color: '#f1b667' }} />:{' '}
          {props.repo.stargazers_count}
        </div>
        <div className="card-forks">
          <ForkOutlined />: {props.repo.forks_count}
        </div>
        <div className="card-description"> {props.repo.description} </div>
      </Card>
    </Link>
  );
}
PopularProject.propTypes = {
  repo: PropTypes.object,
  name: PropTypes.string,
  html_url: PropTypes.string,
  stargazers_count: PropTypes.number,
  description: PropTypes.string,
  forks_count: PropTypes.number,
};
export default PopularProject;
