import React from 'react';
import Logo from "./Logo";
import Navigate from "./Navigate";
import SingIn from "./SingIn";

function Header(props) {
    return (
        <header>
            <Logo/>
            <Navigate/>
            <SingIn/>
        </header>
    );
}



export default Header;