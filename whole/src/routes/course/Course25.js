import React, { Component } from 'react'

import InfoSystemThird from './information-system/InfoSystemThird';

import CourseLeftBlock from './CourseLeftBlock';
import CourseDetailBlock from './CourseDetailBlock';

class Course24 extends Component {
    render() {
        return(
            <React.Fragment>
                <InfoSystemThird />

                <div className="course-info course-24">
                    <div className="section-container">
                        <CourseLeftBlock />
                        <CourseDetailBlock bigBlock={true} />
                        <div className="clearfix"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course24;