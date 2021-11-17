import HeaderContainer from './Header';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Main from './Main';
import FooterContainer from './FooterContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadRepo } from '../redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRepo());
  }, [dispatch]);
  return (
    <Layout>
      <HeaderContainer />
      <Main />
      <FooterContainer />
    </Layout>
  );
}

export default App;
