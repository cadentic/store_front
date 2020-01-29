import React, { useState, useEffect } from 'react'

import InfoSystemThird from './information-system/InfoSystemThird';

import CourseLeftBlock from './CourseLeftBlock';
import CourseDetailBlock from './CourseDetailBlock';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default () => {
  const { id } = useParams();
  const [coursePreviewData, setCoursePreviewData] = useState({});
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    axios.get('/json/courses-whole/'+id+'.json')
         .then(({data}) => setCoursePreviewData(data));
    axios.get('/json/courses-whole/details/'+id+'.json')
         .then(({data}) => setCourseData(data));
  }, [id]);

  return(
    <React.Fragment>
      <InfoSystemThird />

      <div className="course-info">
        <div className="section-container">
            <CourseLeftBlock data={coursePreviewData} />
            <CourseDetailBlock bigBlock={true} data={courseData} />
          <div className="clearfix"></div>
        </div>
      </div>
    </React.Fragment>
  );
};