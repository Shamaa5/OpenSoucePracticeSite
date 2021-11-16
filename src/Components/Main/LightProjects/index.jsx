import React from 'react';
import Title from "antd/es/typography/Title";
import LightProject from "./LightProject";


function LightProjectsContainer(props) {
    return (
        <div className={'lightProjectsContainer'}>
            <Title level={5}> Most popular projects </Title>
            <ul>
                <LightProject/>
            </ul>
        </div>
    );
}

export default LightProjectsContainer;