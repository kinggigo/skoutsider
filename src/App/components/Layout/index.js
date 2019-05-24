// base
import React from 'react';
import './Layout.scss';

import { Header} from '../index.js';

const Layout = (props) => {
    return (
        <div className={"Layout"}>
            <Header naeyoung={props.naeyoung}/>
            {props.children}
        </div>
    )
}

export default Layout