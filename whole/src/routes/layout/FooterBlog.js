import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';


class FooterBlog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      };
    }

    async componentDidMount() {
      const { data } = await axios.get('/json/whole-blog-footer.json');
      this.setState({data});
    }

    render() {
      return isEmpty(this.state.data) ? null : (
            <div className="post-wrapper">
                <div className="col-wrapper overflow-hidden">
                    <div className="col-sub-wrapper overflow-hidden">
                    <div className="logo-col post-col">
                        <div className="logo-title title">
                        <img src="/footer/logo.png" alt="Logo" />
                        </div>
                        <div>
                        Far far away, behind the word mount ains, far from the countrie Vokalia
                        </div>
                        <div>
                        texts. Separated they live in Bookmarksgrove right at the coast of the control about the blind texts it is an.
                        </div>
                        <div>
                        <a href="/">LEARN MORE</a>
                        </div>
                    </div>
                    <div className="popular-post-col post-col">
                        <div className="popular-post-title title">
                        POPULAR POSTS
                        </div>
                      {this.state.data.popularPosts.map((post, index) => (
                        <div className="post-list-item" key={index}>{post.title} ({post.count})</div>
                      ))}
                    </div>
                    <div className="recent-post-col post-col">
                        <div className="recent-post-title title">
                        RECENT POST
                        </div>
                      {this.state.data.recentPosts.map((post, index) => (
                        <div className="row overflow-hidden" key={index}>
                        <div className="post-image">
                            <img src={post.img} alt={post.imgAlt} />
                        </div>
                        <div className="post-description">
                            <div className="content">
                              {post.content}
                            </div>
                            <div className="date">
                              {post.date}
                            </div>
                        </div>
                        </div>
                      ))}
                    </div>
                    <div className="flickr-col post-col">
                        <div className="flickr-title title">
                        FLICKR
                        </div>
                      {this.state.data.flickr.map((container, index) => (
                        <div className="row overflow-hidden" key={index}>
                          {container.map((item, index) => (
                          <div className="item" key={index}>
                            <img src={item.img} alt={item.imgAlt} />
                          </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    </div>
                </div>

                <style>{`
                .overflow-hidden{
                    overflow: hidden;
                }
                a{
                    color: white;
                }
                li.active a{
                    color: #82b540;
                }
                .padding-right-0{
                    padding-right: 0px !important;
                }
                .margin-left-low-30{
                    margin-left: -30px !important;
                }
                .margin-right-low-30{
                    margin-right: -30px !important;
                }

                .post-wrapper{
                    width: 100%;
                    background-color: #2D2D2D;
                    color: white;
                }
                .col-wrapper{
                    max-width: 1170px;
                    margin: 0 auto;
                    padding-top: 100px;
                    padding-bottom: 80px;
                }
                .col-sub-wrapper {
                    margin-left: -15px;
                    margin-right: -15px;
                }
                .post-wrapper .post-col{
                    width: 25%;
                    float: left;
                    display: inline-block;
                    padding: 0 15px;
                }

                .title {
                    font-size: 24px;
                    font-family: sans-serif;
                    font-weight: 700;
                }

                .post-wrapper .logo-col > div:nth-child(2) {
                    font-family: sans-serif;
                    color: white;
                    padding-top: 24px;
                    letter-spacing: -0.16px;
                    line-height: 22px;
                }
                .post-wrapper .logo-col > div:nth-child(3) {
                    padding-top: 29px;
                    font-family: sans-serif;
                    color: white;
                    letter-spacing: .3px;
                    line-height: 24px;
                    font-size: 16px;
                    word-break: break-all;
                }
                .post-wrapper .logo-col > div:nth-child(4) {
                    padding-top: 36px;
                }
                .post-wrapper .logo-col > div:nth-child(4) > a {
                    font-size: 12.5px;
                }

                .post-wrapper .popular-post-col > .popular-post-title {
                    padding-top: 6px;
                }
                .post-wrapper .popular-post-col > div:nth-child(2) {
                    padding-top: 49px;
                }
                .post-wrapper .popular-post-col > div:nth-child(3), .post-wrapper .popular-post-col > div:nth-child(4),
                .post-wrapper .popular-post-col > div:nth-child(5), .post-wrapper .popular-post-col > div:nth-child(7) {
                    padding-top: 12px;
                }
                .post-wrapper .popular-post-col > div:nth-child(6) {
                    padding-top: 16px;
                }

                .recent-post-col{
                    /* padding-left: 15px;
                    padding-top: 6px; */
                }
                .recent-post-col .recent-post-title{
                    font-size: 20px;
                    padding-top: 8px;
                }
                .recent-post-col > div.row > div{
                    float: left;
                }
                .recent-post-col > div.row > div.post-image{
                    width: 26%;
                }
                .recent-post-col > div.row > div.post-image.active > img{
                    border: 1px solid green;
                }
                .recent-post-col > div.row > div.post-image > img{
                    width: 100%;
                }
                .recent-post-col > div.row > div.post-description{
                    width: 74%;
                    padding-left: 17px;
                }
                .recent-post-col > div.row > div.post-description > div.content{
                    font-size: 15px;
                    letter-spacing: -1.0px;
                    font-size: 19px;
                    line-height: 24px;
                    margin-top: -4px;
                }
                .recent-post-col > div.row > div.post-description > div.date{
                    font-size: 12.5px;
                    color: grey;
                    padding-top: 6px;
                }

                .recent-post-col > div:nth-child(2) {
                    padding-top: 53px;
                }
                .recent-post-col > div:nth-child(3) {
                    padding-top: 18px;
                }
                .recent-post-col > div:nth-child(4) {
                    padding-top: 15px;
                }

                .flickr-col{
                    padding-left: 21px;
                    padding-top: 6px;
                }
                .flickr-col .flickr-title{
                    padding-top: 4px;
                }
                .flickr-col > div.row{
                    margin-left: -7.5px;
                    margin-right: -7.5px;
                }
                .flickr-col > div:nth-child(3), .flickr-col > div:nth-child(4){
                    padding-top: 16px;
                }
                .flickr-col > div:nth-child(2){
                    padding-top: 45px;
                }
                .flickr-col > div.row > .item{
                    width: 33.3333333333%;
                    float: left;
                    padding: 0 7.5px;
                }
                .flickr-col > div.row > .item > img{
                    width: 100%;
                }

                @media (max-width: 500px) {
                    .col-wrapper{
                        width: 60%;
                    }
                    .post-wrapper .post-col {
                        width: 100%;
                        min-height: 350px;
                    }
                    .post-wrapper .flickr-col {
                        padding-top: 20px;
                    }
                    .post-wrapper .flickr-col > div:nth-child(2) {
                        padding-top: 16px;
                    }
                    .recent-post-col > div:nth-child(2) {
                        padding-top: 25px;
                    }
                }
                @media (max-width: 1024px) and (min-width: 500px) {
                    .post-wrapper .post-col {
                        width: 50%;
                    }
                    .col-wrapper {
                        width: 70%;
                    }
                }
                @media (max-width: 1024px) {
                    .post-wrapper .post-col {
                        min-height: 350px;
                    }
                }
                @media (max-width: 1170px) {
                    .col-wrapper{
                        width: 90%;
                    }
                }
                `}</style>
            </div>
        );
    }
}

export default FooterBlog;