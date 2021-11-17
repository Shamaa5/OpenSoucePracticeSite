import React from 'react';
import Title from 'antd/es/typography/Title';

function TitleContainer(props) {
  return (
    <div className={'titleContainer'}>
      <Title>Welcome</Title>
      <Title level={4}>
        This is the place where you can find popular Open Source projects, for
        various programming languages, for practice, or to supplement your
        resume.
      </Title>
    </div>
  );
}

export default TitleContainer;
