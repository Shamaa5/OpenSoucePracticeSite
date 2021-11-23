import React, { useEffect } from "react";
import TitleContainer from './TitleContainer';
import LightProjectsContainer from './LightProjects';
import PopularProjects from './PopularProjects';
import OtherProjectsContainer from './OtherProjects';
import { useDispatch, useSelector } from "react-redux";
import { loadRepo } from "../../redux/actions";
import { Skeleton } from "antd";

function HomePageContainer(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRepo());
  }, [dispatch]);
  const loading = useSelector(state => state.repositories.loading)

  if (loading) {
    return <Skeleton active />
  }
  return (
    <div>
      <TitleContainer />
      <LightProjectsContainer />
      <PopularProjects />
      <OtherProjectsContainer />
    </div>
  );
}

export default HomePageContainer;
