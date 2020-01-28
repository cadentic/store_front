import React, { Component } from 'react'

class InfoSystemThird extends Component {
    render() {
        return(
            <div className="info-system-second">
                <div className="cover-image"></div>
                <div className="cover-background"></div>
                <div className="section-container">
                    <span>Information System</span>
                    <span>Home/Course</span>
                    <div className="clearfix" />
                </div>

                <style>{`
                    .info-system-second {
                        position: relative;
                    }
                    .info-system-second .cover-background, .info-system-second .cover-image {
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                    }
                    .info-system-second .cover-background{
                        background-color: rgba(0,0,0,0.8);
                        height: 100%;
                    }
                    .info-system-second .cover-image {
                        height: 700px;
                        background-position: 0 -520px;
                        background-image: url('/info-background.jpg');
                        opacity: .5;
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

export default InfoSystemThird;