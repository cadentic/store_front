import React, { Component } from 'react'

import InfoSystemFirst from '../course/information-system/InfoSystemFirst';
import BlogContentBlock from './BlogContentBlock';
import BlogSidebarBlock from './BlogSidebarBlock';
import BlogContainer from './BlogContainer';

import FooterBlog from '../layout/FooterBlog';

class Blog34 extends Component {
    render() {
        return(
            <BlogContainer>
                <InfoSystemFirst />

                <div className="course-info course-24">
                    <div className="section-container">
                        <BlogSidebarBlock />
                        <BlogContentBlock />

                        <div className="clearfix"></div>
                    </div>
                </div>
                <FooterBlog />
            </BlogContainer>
        );
    }
}

export default Blog34;