import React from 'react';

import TopBar from '../TopBar';
import BottomBar from '../BottomBar'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => <React.Fragment>
    <TopBar/>
    {props.children}
    <BottomBar/>
</React.Fragment>;

export default Layout;