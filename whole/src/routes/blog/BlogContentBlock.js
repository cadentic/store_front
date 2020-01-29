import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { isEmpty, isArray } from 'lodash';

const FooterInput = styled(TextField)`
    border-color: #d1d6da !important;
    border-radius: 3px !important;
    background-color: white !important;
    color: #FBFAFF !important;
    font-style: italic;
    height: 58px !important;

    &.textarea {
        height: 160px !important;
    }

    &.form-control {
        box-sizing: border-box;
        float: left;
        outline: 0!important;
        box-shadow: none!important;
        font-size: 17px;
        line-height: 46px;
        color: #b3bdd0 !important;
        font-weight: 300;
    }
`;

class BlogContentBlock extends Component {

    render() {
      return isEmpty(this.props.data) ? null : (
            <div className="left_side">
                <div className="search_display" />
                <div className="note">
                <span className="note_title">{this.props.data.note.title}</span>
                <p className="block margin-bottom-64">
                    <span><i className="fa fa-edit" /> by {this.props.data.note.author}</span>
                    <span><i className="fa fa-clock-o" /> {this.props.data.note.creationDate}</span>
                    <span><i className="fa fa-comments-o" /> {this.props.data.note.commentsNumber} Comments</span>
                </p>
                {this.props.data.note.contents.map((content, index) => (
                <p className={content.class} dangerouslySetInnerHTML={{__html: content.html}} key={index}></p>
                ))}
                <div className="pane">
                    <span className="content">
                      {this.props.data.note.pane.content}
                    <p className="specify_color margin-top-30 padding-top-0 margin-bottom-0">{this.props.data.note.pane.caption}</p>
                    </span>
                </div>
                </div>
                <div className="post">
                <span className="note_title font-size-16">{this.props.data.post.title}</span>
                {this.props.data.post.contents.map((content, i) => content.postStep ? (
                <div className={content.class} key={i}>
                  {content.contents.map((content, i) => isArray(content) ? (
                    <div className="float-left width-50 margin-top-2" key={i} >
                      {content.map((item, key) => (
                      <span className="content style6" key={key}><i className="fa fa-arrow-circle-right" />{item}</span>
                      ))}
                    </div>
                  ) : (
                    <p className={content.class} key={i}>
                      {content.text}
                    </p>
                  ))}
                    <div className={content.clearFixClass} />
                </div>
                ) : (
                <p className={content.class} key={i}>
                  {content.text}
                </p>
                ))}
                </div>
                <hr />
                <div className="said client">
                <div className="width-15">
                    <img src={this.props.data.quote.avatar} width="92px" alt="" />
                </div>
                <div className="said_content">
                    <p className="title margin-top-0 margin-bottom-0">{this.props.data.quote.title}</p>
                    <p className="content margin-top-0 margin-bottom-0">
                      {this.props.data.quote.text}
                    </p>
                </div>
                <div className="clearfix" />
                </div>
                <div><hr /></div>
                <div className="post_step margin-top-0">
                <h3>RELATED POSTS </h3>
                {this.props.data.relatedPosts.map((item, index) => (
                <div className={item.class} key={index} >
                    <div className="pane" />
                    <div className="note">
                    <span className="note_title margin-top-30">{item.title}</span>
                    <p className="block margin-bottom-64">
                        <span><i className="fa fa-edit" /> by {item.author}</span>
                        <span><i className="fa fa-clock-o" /> {item.creationDate}</span>
                        <span><i className="fa fa-comments-o" /> {item.commentsNumber } Comments</span>
                    </p>
                    <p className="content">
                      {item.text}
                    </p>
                    </div>
                </div>
                ))}
                <div className="clearfix" />
                </div>
                <div><hr /></div>
                <h3 className="margin-top-40">({this.props.data.comments.length}) Comments</h3>
                <div className="said-group">
                    {this.props.data.comments.map((comment, i) => {
                        return(
                            <div className="said employ" key={i}>
                                <div className="width-15">
                                <img src={comment.icon} width="92px" alt="" />
                                </div>
                                <div className="said_content">
                                <p className="title margin-top-0 margin-bottom-0">{comment.name} <span className="margin-left-30">{comment.time}</span></p>
                                <p className="content margin-top-0 margin-bottom-0">{comment.content}</p>
                                </div>
                                <div className="clearfix" />
                            </div>
                        );
                    })}
                </div>
                <hr className="margin-top-30" />
                <h3 className="leave">LEAVE A REPLY</h3>
                <div className="post_step margin-top-78">
                <div className="width-50 float-left">
                    <FooterInput label="Name" variant="outlined" className="form-control footer_input" color="primary" />
                </div>
                <div className="width-50 float-right">
                    <FooterInput label="Email" variant="outlined" className="form-control footer_input" color="primary" />
                </div>
                <div className="clearfix" />
                </div>
                <div className="post_step margin-top-27">
                    <FooterInput label="Website" variant="outlined" className="form-control footer_input" color="primary" />
                    <div className="clearfix" />
                </div>
                <div className="post_step margin-top-27">
                    <FooterInput label="Tags" variant="outlined" className="form-control footer_input" />
                    <div className="clearfix" />
                </div>
                <div className="post_step margin-top-27">
                    <FooterInput label="Add your Comments" variant="outlined" className="form-control footer_input textarea" color="primary" multiline rows="4" rowsMax="4" />
                    <div className="clearfix" />
                </div>
                <div className="clearfix" />

                <Button aria-controls="simple-menu" className="button margin-top-30 margin-bottom-64 specify_button" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                    Post a Comments
                </Button>


                <style>{`
                    @media only screen and (max-width: 1460px){
                        body .main_area{
                            width: 41.39%;
                        }
                        .left_side{
                            width: 100% !important;
                        }
                        .right_side{
                            width: 100% !important;
                        }
                        .post .post-part .post-right{
                            width: 50% !important;
                        }
                    }
                    @media only screen and (max-width: 1460px) and (min-width: 1080px) {
                        .post .post-part .post-right{
                            width: 80% !important;
                        }
                    }
                    @media only screen and (max-width: 1080px){
                        .said .said_content{
                            width: 100% !important;
                        }
                        .post .post-part .post-right{
                            width: 100% !important;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default BlogContentBlock;