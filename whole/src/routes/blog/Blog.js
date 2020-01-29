import React, { useState, useEffect } from 'react'

import InfoSystemFirst from '../course/information-system/InfoSystemFirst';
import BlogContentBlock from './BlogContentBlock';
import BlogSidebarBlock from './BlogSidebarBlock';

import FooterBlog from '../layout/FooterBlog';
import BlogContainer from './BlogContainer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/json/blog/'+id+'.json')
         .then(({data}) => setData(data));
  }, [id]);

  return(
    <BlogContainer>
      <InfoSystemFirst />

      <div className="course-info course-24">
        <div className="section-container">
          <BlogContentBlock data={data} />
          <BlogSidebarBlock data={data} />

          <div className="clearfix"></div>
        </div>
      </div>
      <FooterBlog />

    </BlogContainer>
  );
};