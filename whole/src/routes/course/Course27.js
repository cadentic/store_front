import React, { Component } from 'react'

import InfoSystemThird from './information-system/InfoSystemThird';

import CourseLeftBlockSecond from './CourseLeftBlockSecond';
import CourseDetailBlock from './CourseDetailBlock';

class Course24 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemThird />

                <div className="course-info course-24">
                    <div className="section-container">
                        <CourseDetailBlock bigBlock={true} />
                        <CourseLeftBlockSecond />
                        <div className="clearfix"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course24;