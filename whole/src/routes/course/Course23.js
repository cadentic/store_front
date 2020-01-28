import React, { Component } from 'react'

import InfoSystemSecond from './information-system/InfoSystemSecond';

import CourseDetailBlock from './CourseDetailBlock';

class Course23 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemSecond />

                <div className="course-info">
                    <div className="section-container">
                        <CourseDetailBlock />
                        <div className="clearfix" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course23;