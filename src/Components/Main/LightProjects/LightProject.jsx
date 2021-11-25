import React from 'react';
import { Card } from 'antd';

function LightProject(props) {
  return (
    <Card
      title="Card title"
      bordered={false}
      style={{ width: 300, margin: 20 }}
    >
      <div> name </div>
      <div> id </div>
      <div> stars </div>
      {/*<div> Forks: {props.repo.forks_count} </div>*/}
    </Card>
  );
}

export default LightProject;
