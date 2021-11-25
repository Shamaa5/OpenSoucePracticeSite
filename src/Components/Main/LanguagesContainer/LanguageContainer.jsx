import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { StarOutlined } from '@ant-design/icons';

function LanguageContainer(props) {
  return (
    <Card
      title={props.repo.full_name}
      bordered={true}
      style={{ width: 280, margin: 10 }}
    >
      <div>
        <StarOutlined /> : {props.repo.stargazers_count}
      </div>
      <div> {props.repo.description} </div>
      <div> Forks: {props.repo.forks_count} </div>
    </Card>
  );
}
LanguageContainer.propTypes = {
  repo: PropTypes.object,
  full_name: PropTypes.string,
  html_url: PropTypes.string,
  stargazers_count: PropTypes.number,
  description: PropTypes.string,
  forks_count: PropTypes.number,
};
export default LanguageContainer;
