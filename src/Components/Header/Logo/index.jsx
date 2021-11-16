import React from "react"
import logo from "./logo.svg"
import Text from "antd/es/typography/Text";

function Logo() {
  return (
    <div className={"logoWrapper"}>
        <div className={'logo'}>
            <img src={logo} alt="" style={{margineRight: 20}}/>
        </div>
        <Text level={1}>ShamaInc</Text>
    </div>
  );
}

export default Logo;
