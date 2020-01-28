import React, { Component } from 'react';

import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import NavbarList from './NavbarList';

class Navbar extends Component {
    render() {
        return(
            <React.Fragment>
                <TopHeader />
                <MiddleHeader />
                <NavbarList />
            </React.Fragment>
        );
    }
}

export default Navbar;