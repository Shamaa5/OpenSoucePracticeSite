import HeaderContainer from './Header';
import React from 'react';
import Main from './Main';
import FooterContainer from './FooterContainer';
import Layout from 'antd/es/layout/layout';

function App() {
  return (
    <Layout className="containerSection">
      <HeaderContainer />
      <Main />
      <FooterContainer />
    </Layout>
  );
}

export default App;
