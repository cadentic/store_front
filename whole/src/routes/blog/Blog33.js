import React, { Component } from 'react'

import InfoSystemFirst from '../course/information-system/InfoSystemFirst';
import BlogContentBlock from './BlogContentBlock';
import BlogSidebarBlock from './BlogSidebarBlock';

import FooterBlog from '../layout/FooterBlog';
import BlogContainer from './BlogContainer';

class Blog33 extends Component {
    render() {
        return(
            <BlogContainer>
                <InfoSystemFirst />

                <div className="course-info course-24">
                    <div className="section-container">
                        <BlogContentBlock />
                        <BlogSidebarBlock />

                        <div className="clearfix"></div>
                    </div>
                </div>
                <FooterBlog />

            </BlogContainer>
        );
    }
}

export default Blog33;