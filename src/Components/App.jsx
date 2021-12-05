import HeaderContainer from './Header';
import React, { useEffect } from 'react';
import Main from './Main';
import FooterContainer from './FooterContainer';
import Layout from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { loadRepositories } from '../redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRepositories());
  }, [dispatch]);
  return (
    <Layout className="containerSection">
      <HeaderContainer />
      <Main />
      <FooterContainer />
    </Layout>
  );
}

export default App;
