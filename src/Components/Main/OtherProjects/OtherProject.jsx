import React from 'react';
import { Card } from 'antd';
import PropTypes, { number } from 'prop-types';
import { StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function OtherProject(props) {
  return (
    <Link to={`/${props.repo.id}`}>
      <Card
        title={props.repo.full_name}
        bordered={true}
        style={{ width: 280, margin: 10 }}
      >
        <div>
          <StarOutlined /> : {props.repo.stargazers_count}{' '}
        </div>
        <div> {props.repo.description} </div>
        <div> Forks: {props.repo.forks_count} </div>
      </Card>
    </Link>
  );
}
OtherProject.propTypes = {
  repo: PropTypes.object,
  full_name: PropTypes.string,
  html_url: PropTypes.string,
  stargazers_count: PropTypes.number,
  description: PropTypes.string,
  forks_count: number,
};
export default OtherProject;
