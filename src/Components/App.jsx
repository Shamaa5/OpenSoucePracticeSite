import HeaderContainer from './Header';
import 'antd/dist/antd.css';
import React from "react";
import { Layout } from "antd";
import Main from './Main';
import FooterContainer from './FooterContainer';



function App() {

  return (
    <Layout>
      <HeaderContainer />
      <Main />
      <FooterContainer />
    </Layout>
  );
}

export default App;
