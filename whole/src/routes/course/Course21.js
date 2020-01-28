import React, { Component } from 'react'

import InfoSystemSecond from './information-system/InfoSystemSecond';

import CourseLeftBlock from './CourseLeftBlock';
import CourseRightBlock from './CourseRightBlock';

class Course21 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemSecond />

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

export default Course21;