import React, { useEffect, useState } from 'react'

import InfoSystemFirst from './information-system/InfoSystemFirst';

import CourseLeftBlock from './CourseLeftBlock';
import CourseRightBlock from './CourseRightBlock';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import axios from 'axios';


export default () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/json/courses-whole/"+id+".json")
         .then(({data}) => setData(data));
  }, [id]);

  return(
    <React.Fragment>
      <InfoSystemFirst />

      <div className="course-info">
        <div className="section-container">
          {!isEmpty(data) && (
            <>
            <CourseLeftBlock data={data} />
            <CourseRightBlock data={data} />
            </>
          )}
        </div>
        <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
};