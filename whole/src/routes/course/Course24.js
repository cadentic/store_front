import React, { Component } from 'react'

import InfoSystemThird from './information-system/InfoSystemThird';

import CourseLeftBlock from './CourseLeftBlock';
import CourseDetailBlock from './CourseDetailBlock';

class Course24 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemThird />

                <div className="course-info">
                    <div className="section-container">
                        <CourseDetailBlock bigBlock={true} />
                        <CourseLeftBlock />
                        <div className="clearfix"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course24;