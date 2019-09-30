import Navbar from "../Components/NavbarComponent/Navbar";

import React from 'react';
const layoutStyle = {
    margin: 0,
    padding: 0,
};

const Layout = (props: any) => {
    return (
        <div style={layoutStyle}>
            <Navbar/>
            {props.children}
        </div>
    );
};

export default Layout;
