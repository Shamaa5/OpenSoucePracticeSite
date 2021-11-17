import React from 'react';
import { Card } from 'antd';

function OtherProject(props) {
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <div> name </div>
      <div> id </div>
      <div> stars </div>
      <div> commits </div>
    </Card>
  );
}

export default OtherProject;