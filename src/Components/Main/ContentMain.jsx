import React from "react";
import TitleContainer from "./TitleContainer";
import LightProjectsContainer from "./LightProjects";


function ContentMain(props) {
  return (
    <div className={"MainContainer"}>
      <TitleContainer/>
      <LightProjectsContainer/>
    </div>
  );
}

export default ContentMain;
