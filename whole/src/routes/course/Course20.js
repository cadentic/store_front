import React, { Component } from 'react'

import InfoSystemFirst from './information-system/InfoSystemFirst';

import CourseLeftBlock from './CourseLeftBlock';
import CourseRightBlock from './CourseRightBlock';

class Course20 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemFirst />

                <div className="course-info">
                    <div className="section-container">
                        <CourseRightBlock />
                        <CourseLeftBlock />
                        <div className="clearfix" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course20;