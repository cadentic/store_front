import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import styled from 'styled-components';

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
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        const self = this;
        axios.get('/json/blog_comments.json')
            .then(response => {
                self.setState({
                    comments: response.data
                })
            });
    }

    render() {
        return(
            <div className="left_side">
                <div className="search_display" />
                <div className="note">
                <span className="note_title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit .</span>
                <p className="block margin-bottom-64">
                    <span><i className="fa fa-edit" /> by Mohamed</span>
                    <span><i className="fa fa-clock-o" /> May 23, 2014</span>
                    <span><i className="fa fa-comments-o" /> 29 Comments</span>
                </p>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sontesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretiu Integer tincidunt.
                </p>
                <p className="content style2">
                    <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quis, sem. </span><span className="specify_color">Nulla consequat massa quis enim. Donec pede justo, fringilla</span> <span>vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretiu Integer tincidunt.</span>
                </p>
                <p className="content style2 style3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretiu Integer tincidunt amet, consectetuer elit. Aenean commodo ligula eget dolor
                </p>
                <div className="pane">
                    <span className="content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretiu Integer tincidunt amet, consectetuer adipiscing .
                    <p className="specify_color margin-top-30 padding-top-0 margin-bottom-0">MOHAMED SAID</p>
                    </span>
                </div>
                </div>
                <div className="post">
                <span className="note_title font-size-16">Tincidunt amet, consectetuer adipiscing elit.</span>
                <p className="content style4 margin-top-8">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretiu Integer tincidunt amet, consectetuer elit. Aenean commodo ligula eget dolor
                </p>
                <div className="post_step margin-top-26">
                    <div className="blog-left" />
                    <p className="content style4 blog-right">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quisem. rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum velaliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet venenatis vitae, justo. Nullam dictum felis eu pede mollis pretiulnteger tincidunt amet, consectetuer Lorem ipsum dolor sit amet, consectetue modo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quitincidunt amet, consectetuers
                    </p>
                    <div className="clearfix" />
                </div>
                <p className="content style5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretiu Integer tincidunt amet, consectetuer penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </p>
                <div className="post_step margin-top-26">
                    <p className="content style4 blog-right float-left">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quisem. rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum velaliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet venenatis vitae, justo. Nullam dictum felis eu pede mollis pretiulnteger tincidunt amet, consectetuer Lorem ipsum dolor sit amet, consectetue modo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quitincidunt amet, consectetuers
                    </p>
                    <div className="blog-left float-right" />
                </div>
                <div className="post_step margin-top-0">
                    <p className="content style4 width-50 float-left">
                    Lorem ipsum dolor sit amet, consectetuer adipising elimodo ligula eget dolor. Aenean massa. Cum sontesquesem. rhoncus ut, imperdiet a, venenatis vitae, justo. Nulaiquet nec, vulputate eget, arcu. In enim justo, rhoncutincidut amet, consectetuer
                    </p>
                    <p className="content style4 width-50 float-right">
                    Lorem ipsum dolor sit amet, consectetuer adipising elimodo ligula eget dolor. Aenean massa. Cum sontesquesem. rhoncus ut, imperdiet a, venenatis vitae, justo. Nulaiquet nec, vulputate eget, arcu. In enim justo, rhoncutincidut amet, consectetuer
                    </p>
                    <div className="clearfix" />
                </div>
                <p className="content style4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sontesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretiu Integer tincidunt amet, consectetuer penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </p>
                <div className="post_step margin-top-0">
                    <div className="float-left width-50 margin-top-2">
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    </div>
                    <div className="float-right width-50 margin-top-2">
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    <span className="content style6"><i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit amet, onsectetuer adipiscing elit</span>
                    </div>
                    <div className="clearfix" />
                </div>
                <p className="content style5">
                    Lorem ipsum dolor sit amet, consectetuer adipising elit. Aenean commodo ligula eget dlor. Aenean massa. Cum soa vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </p>
                </div>
                <hr />
                <div className="said client">
                <div className="width-15">
                    <img src="/avatar0.png" width="92px" alt="" />
                </div>
                <div className="said_content">
                    <p className="title margin-top-0 margin-bottom-0">Mohamed said</p>
                    <p className="content margin-top-0 margin-bottom-0">
                    Lorem ipsum dolor sit amet, ocnsectetuer adipiscing elit. Aenean commodo ligula egetdo a vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imprediet a, venenatisit felis eu pede mollis pretium.
                    </p>
                </div>
                <div className="clearfix" />
                </div>
                <div><hr /></div>
                <div className="post_step margin-top-0">
                <h3>RELATED POSTS </h3>
                <div className="float-left width-50 ">
                    <div className="pane" />
                    <div className="note">
                    <span className="note_title margin-top-30">Lorem ipsum dolor sit amet, consectet.</span>
                    <p className="block margin-bottom-64">
                        <span><i className="fa fa-edit" /> by Mohamed</span>
                        <span><i className="fa fa-clock-o" /> May 23, 2014</span>
                        <span><i className="fa fa-comments-o" /> 29 Comments</span>
                    </p>
                    <p className="content">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elintesque eu, pretium quis, sem. Nulla consequat massawte eget, arcu. In enim justo, rhoncus ut, imperdiet a, ven Integer tincidunt.
                    </p>
                    </div>
                </div> 
                <div className="float-right width-50 margin-top-8">
                    <div className="pane" />
                    <div className="note">
                    <span className="note_title margin-top-30">Lorem ipsum dolor sit amet, consectet.</span>
                    <p className="block margin-bottom-64">
                        <span><i className="fa fa-edit" /> by Mohamed</span>
                        <span><i className="fa fa-clock-o" /> May 23, 2014</span>
                        <span><i className="fa fa-comments-o" /> 29 Comments</span>
                    </p>
                    <p className="content">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elintesque eu, pretium quis, sem. Nulla consequat massawte eget, arcu. In enim justo, rhoncus ut, imperdiet a, ven Integer tincidunt.
                    </p>
                    </div>
                </div>
                <div className="clearfix" />
                </div>
                <div><hr /></div>
                <h3 className="margin-top-40">(24) Comments</h3>
                <div className="said-group">
                    {this.state.comments.map((comment, i) => {
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