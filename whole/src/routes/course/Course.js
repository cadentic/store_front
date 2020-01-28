import React, { Component } from 'react'

import InfoSystemFirst from './information-system/InfoSystemFirst';

import CourseLeftBlock from './CourseLeftBlock';
import CourseRightBlock from './CourseRightBlock';


class Course extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemFirst />

                <div className="course-info">
                    <div className="section-container">
                        <CourseLeftBlock />
                        <CourseRightBlock />
                    </div>
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course;