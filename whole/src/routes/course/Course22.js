import React, { Component } from 'react'

import InfoSystemSecond from './information-system/InfoSystemSecond';

import CourseLeftBlock from './CourseLeftBlock';
import CourseRightBlock from './CourseRightBlock';

class Course22 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemSecond />

                <div className="course-info">
                    <div className="section-container">
                        <CourseLeftBlock />
                        <CourseRightBlock />
                        <div className="clearfix" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course22;