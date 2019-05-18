// base
import React from 'react';
import './Layout.scss';

import { Header} from '../index.js';

const Layout = (props) => {
    return (
        <div className={"Layout"}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout