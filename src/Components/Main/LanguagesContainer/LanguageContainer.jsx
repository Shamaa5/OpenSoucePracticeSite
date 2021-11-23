import React from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function LanguageContainer(props) {
  const params = useParams().id;
  console.log(params);
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <div> name </div>
      <div> id </div>
      <div> stars </div>
      <div> Forks: {props?.repo.forks_count} </div>
    </Card>
  );
}
LanguageContainer.propTypes = {
  repo: PropTypes.object,
  forks_counts: PropTypes.number,
};
export default LanguageContainer;
