import React, { Component } from 'react'
import styled from 'styled-components';

const TopHeader = styled.div`
    background-color: white;
    border-bottom: solid 1px #dbe4ed;
`;

class TopHeaderClass extends Component {
    render() {
        return(
            <TopHeader className="top-header">

                <div className="section-container">
                    <div className="left-part float-left">
                        <div className="login uppercase border-left border-right float-left nav-item">
                            login
                            <i className="fa fa-lock margin-left-6"></i>
                        </div>
                        
                        <div className="signup uppercase border-right float-left nav-item">
                            sign up
                            <i className="fa fa-user"></i>
                        </div>
                    </div>
                    <div className="right-part float-right">
                        <div className="country-region border-left border-right nav-item">
                            <img src="/flag.png" alt="Egypt Flag" className="flag" />
                            <span>Egypt</span>
                            <i className="fa fa-angle-down"></i>
                        </div>

                        <div className="social-login wikipedia border-left nav-item">
                            <img src="/icons/wikipedia.png" alt="wikipedia" />
                        </div>

                        <div className="social-login twitter border-left nav-item">
                            <img src="/icons/twitter.png" alt="twitter" />
                        </div>

                        <div className="social-login facebook border-left nav-item">
                            <img src="/icons/facebook.png" alt="facebook" />
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>

                <style>{`
                .top-header {
                    background-color: white;
                }

                .chatboxIcon {
                    position: fixed;
                    right: 20px;
                    bottom: 26px;
                    background: #b3c746;
                    padding: 6px;
                    border-radius: 30px;
                    letter-spacing: 0px;
                    z-index: 20;
                    color: #fff;
                    cursor: pointer;
                }
                
                .top-header .nav-item {
                    font-size: 17px;
                    line-height: 60px;
                    color: #2d2d2d;
                    font-weight: 600;
                    text-align: center;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .top-header .nav-item.login {
                    letter-spacing: 1px;
                    padding: 0px 26px;
                }
                .top-header .nav-item.signup {
                    padding: 0px 18px;
                }
                .top-header .nav-item.signup i {
                    margin-left: 9px;
                    margin-right: 2px;
                }
                .top-header .section-container .left-part, .top-header .section-container .right-part {
                    transition: all linear .3s;
                }
                .top-header .section-container .right-part > .nav-item {
                    float: right;
                }
                .top-header .nav-item.country-region {
                    padding: 0 27px;
                }
                .top-header .nav-item.country-region span {
                    margin-right: 9px;
                }
                .top-header .nav-item.country-region img {
                    margin-right: 28px;
                    margin-left: 1px;
                    top: 2px;
                    position: relative;
                }
                .top-header .nav-item.social-login {
                    padding: 0px 27px;
                }
                .top-header .nav-item.social-login img {
                    position: relative;
                    top: 6px;
                }
                .top-header .nav-item.social-login.wikipedia img {
                    margin-left: 1px;
                }
                .top-header .nav-item.social-login.twitter img {
                    margin-left: -1px;
                }
                .top-header .nav-item.social-login.facebook img {
                    margin-left: -3px;
                    position: relative;
                    margin-right: -5px;
                    top: 4px;
                }
                
                @media screen and (max-width: 768px) {
                    .top-header .section-container .left-part {
                        border-bottom: solid 1px #dbe4ed;
                    }
                    .top-header .section-container .left-part, .top-header .section-container .right-part {
                        width: 100%;
                        border-right: solid 1px #dbe4ed;
                    }
                    .top-header .section-container .right-part > .nav-item {
                        float: left;
                    }
                }
                `}</style>
            </TopHeader>
        );
    }
}

export default TopHeaderClass;