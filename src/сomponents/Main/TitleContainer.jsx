import React from 'react';
import Title from 'antd/es/typography/Title';

function TitleContainer() {
  return (
    <div className={'titleContainer'}>
      <Title>Welcome</Title>
      <Title level={3}>
        This is the place where you can find popular Open Source projects, for
        various programming languages, for practice, or to supplement your
        resume.
      </Title>
    </div>
  );
}

export default TitleContainer;
