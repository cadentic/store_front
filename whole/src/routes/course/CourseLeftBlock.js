import React, { Component } from 'react';
import CourseLeftBlockContainer from './CourseLeftBlockContainer';
import Button from '@material-ui/core/Button';

const leftSidebarList = [
    {
        title: 'Home',
        icon: 'fa fa-send'
    },
    {
        title: 'Curriculum',
        icon: 'fa fa-laptop'
    },
    {
        title: 'Members',
        icon: 'fa fa-user'
    },
    {
        title: 'Events',
        icon: 'fa fa-stack-overflow'
    },
    {
        title: 'Forum',
        icon: 'fa fa-comments-o'
    }
];

class CourseLeftBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLeftSidebarListItem: 'Curriculum'
        }
    }

    changeActiveLeftSidebarListItem = (title) => {
        this.setState({
            activeLeftSidebarListItem: title
        });
    }

    render() {
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
                    <img src="/blank-background.png" className="author-logo" alt="author-logo" />
                    <span className="name">Mohamed Said</span> <br />
                    <span className="author-job">senior ui ux designer</span>
                    <div className="clearfix"></div>
                </div>

                <div className="padding-sm author-description">
                    In just 2 years Victor has become one of the most successful instructors on the web. Victor's incredble rising story has been covered on he Wall Street Journal, MIT Journal, Slate and the Sydney Morning Herald
                    
                    <span className="more-link">More..</span>
                </div>

                <div className="left-sidebar-list">
                    {leftSidebarList.map((item, i) => {
                        return(
                            <Button key={i} aria-controls="simple-menu" aria-haspopup="true" className={`list-item light-border-top ${this.state.activeLeftSidebarListItem === item.title ? 'active' : undefined}`} onClick={this.changeActiveLeftSidebarListItem.bind(this, item.title)}>
                                <i className={item.icon}></i> {item.title}
                            </Button>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default CourseLeftBlockContainer(CourseLeftBlock);