import React from 'react';

const Layout = props => {
    return(
        <div className="AppLayout">
            {props.children}
        </div>
    );
}

export default Layout;