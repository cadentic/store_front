import React from 'react'

function CourseLeftBlockBottom (props) {
    return(
        <React.Fragment>
            <div className="light-border-top light-border-bottom other-info">
                <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-empty"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                <div className="budget light-border-left light-border-right">
                    <span className="new-budget">190$</span>&nbsp;&nbsp;
                    <span className="old-budget">290$</span>
                </div>

                <div className="student-number">
                    83 Student
                    <i className="fa fa-user"></i>
                </div>
                <div className="clearfix"></div>
            </div>

            <div className="author-info padding-sm light-border-bottom">
                <img src="/blank-background.png" className="author-logo" />
                <span className="name">Mohamed Said</span> <br />
                <span className="author-job">senior ui ux designer</span>
                <div className="clearfix"></div>
            </div>

            <div className="padding-sm author-description">
                In just 2 years Victor has become one of the most successful instructors on the web. Victor's incredble rising story has been covered on he Wall Street Journal, MIT Journal, Slate and the Sydney Morning Herald
                
                <span className="more-link">More..</span>
            </div>

            <div className="left-sidebar-list">
                <div className="list-item light-border-top">
                    <i className="fa fa-send"></i> Home
                </div>
                <div className="list-item light-border-top active">
                    <i className="fa fa-laptop"></i> Curriculum
                </div>
                <div className="list-item light-border-top">
                    <i className="fa fa-user"></i> Members
                </div>
                <div className="list-item light-border-top">
                    <i className="fa fa-stack-overflow"></i> Events
                </div>
                <div className="list-item light-border-top">
                    <i className="fa fa-comments-o"></i> Forum
                </div>
            </div>
        </React.Fragment>
    );
}

export default CourseLeftBlockBottom;