import React, { Component } from 'react'

class InfoSystemFirst extends Component {
    render() {
        return(
            <div className="info-system-first">
                <div className="section-container">
                    <span className="float-left">Information System</span>
                    <span className="float-right">Home/Course</span>
                    <div className="clearfix" />
                </div>

            <style>{`
                .info-system-first {
                    background-image: linear-gradient(90deg, #81b53f 0%, #c9cf49 100%);
                    padding-bottom: 6px;
                }
                .info-system-first .section-container {
                    line-height: 34px;
                    padding: 53px 0px;    color: white;
                }
                .info-system-first .section-container span.float-left {
                    font-size: 33px;
                }
                .info-system-first .section-container span.float-right {
                    font-family: inherit;
                    font-style: italic;
                    font-size: 25px;
                    margin-top: 4px;
                    letter-spacing: 0.4px;
                }
            `}</style>
            </div>
        );
    }
}

export default InfoSystemFirst;