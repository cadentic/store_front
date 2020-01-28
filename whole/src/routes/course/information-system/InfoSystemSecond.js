import React, { Component } from 'react'

class InfoSystemSecond extends Component {
    render() {
        return(
            <div className="info-system-second">
                <div className="section-container">
                    <span>Information System</span>
                    <span>Home/Course</span>
                    <div className="clearfix" />
                </div>

                <style>{`
                    .info-system-second {
                        background-color: #2d2d2d;
                    }
                    .info-system-second .section-container {
                        color: white;
                        padding: 160px 0px 174px 335px;
                        box-sizing: border-box;
                        transition: all linear .3s;
                    }
                    .info-system-second .section-container span:first-of-type {
                        margin-bottom: 0px;
                        font-size: 57px;
                        letter-spacing: 0.5px;
                    }
                    .info-system-second .section-container  span:last-of-type {
                        display: block;
                        margin-top: 7px;
                        margin-left: 3px;
                        margin-bottom: 0px;
                        margin: 7px 0px 0px 3px;
                        font-family: inherit;
                        font-style: italic;
                        font-size: 25px;
                        letter-spacing: 0.4px;
                    }

                    @media screen and (max-width: 1280px) {
                        .info-system-second .section-container {
                            padding-left: 20%;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default InfoSystemSecond;