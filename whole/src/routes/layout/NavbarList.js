import React, { Component } from 'react'

const navbarList = [
    'Home', 'Events', 'Pages', 'Shortcodes', 'Buddypress', 'Plans', 'News', 'About Us', 'Support', 'WordPress'
];

class NavbarList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNav: 'Home'
        }
    }

    changeNav = (nav) => {
        this.setState({
            activeNav: nav
        });
    }
    
    render() {
        return(
            <div className="navbar-list">
                <div className="section-container">
                    {navbarList.map((nav, i) => {
                        return(
                            <div className={`navbar-item ${this.state.activeNav === nav ? 'active': ''}`} onClick={this.changeNav.bind(this, nav)} key={i}>
                                {nav}
                            </div>
                        );
                    })}
                    <div className="clearfix"></div>
                </div>

                <style>{`
                    .navbar-list {
                        box-shadow: 0px 2px 2.5px rgba(139,151,183,0.35);
                        padding-bottom: 6px;
                        position: relative;
                    }
                    .navbar-list .section-container {
                        line-height: 46px;
                        padding: 36px 0px;
                        font-size: 21px;
                        font-weight: 600;
                        letter-spacing: -.3px;
                    }
                    .navbar-list .navbar-item {
                        float: left;
                        padding: 0px 1.68vw 0px 0px;
                        cursor: pointer;
                    }
                    .navbar-list .navbar-item.active {
                        color: #82b540;
                    }
                `}</style>
            </div>
        );
    }
}

export default NavbarList;