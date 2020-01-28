import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const InputGroup = styled.div`
    display: table;
    width: 100%;
    box-sizing: border-box;

    .form-control {
        width: 100%;
    }
    .form-control .MuiInputBase-root{
        height: 100%;
        font-size: 18px;
    }
`;

class BlogSidebarBlock extends Component {
    render() {
        return(
            <div className="right_side">
                <span className="title">SEARCH</span>
                <hr />
                <InputGroup className="input-group">
                    <TextField label="Start searching.." variant="outlined" className="form-control" color="primary" />
                    <span className="input-group-addon">
                        <i className="fa fa-search" />
                    </span>
                </InputGroup>
                <div className="category">
                <span className="title"> CATEGORIES</span>
                <hr />
                <ul>
                    <li><i className="fa fa-angle-right" />  <span>Creative (2)</span></li>
                    <li><i className="fa fa-angle-right" />  <span>Design (19)</span></li>
                    <li><i className="fa fa-angle-right" />  <span>Photography (25)</span></li>
                    <li><i className="fa fa-angle-right" />  <span>Image (37)</span></li>
                    <li><i className="fa fa-angle-right" />  <span>Wordpress (82)</span></li>
                </ul>
                </div>
                <div className="post margin-top-30 margin-bottom-64">
                <span className="title">POPULAR POST</span>
                <hr />
                <div className="post-part">
                    <div className="width-15">
                    <img alt="avatar" src="/avatar0.png" width="96px" className="float-left" />
                    </div>
                    <div className="post-right float-right">
                    <b className="post-title">But I must explain.</b>
                    <p className="post-content">Lorem ipsum dolor sit amet, consectectuer dolor. Anean massa.</p>
                    <p className="post-date"> Jul 29 2013</p>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="post-part">
                    <img alt="avatar" src="/avatar0.png" width="96px" className="float-left" />
                    <div className="post-right float-right">
                    <b className="post-title">Lorem ipsum dolor sit amet.</b>
                    <p className="post-content">Lorem ipsum dolor sit amet, consectectuer dolor. Anean massa.</p>
                    <p className="post-date"> Jul 29 2013</p>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="post-part">
                    <img alt="avatar" src="/avatar0.png" width="96px" className="float-left" />
                    <div className="post-right float-right">
                    <b className="post-title">Donec quam felis, ultricies.</b>
                    <p className="post-content">Lorem ipsum dolor sit amet, consectectuer dolor. Anean massa.</p>
                    <p className="post-date"> Jul 29 2013</p>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="post-part margin-bottom-64">
                    <img alt="avatar" src="/avatar0.png" width="96px" className="float-left" />
                    <div className="post-right float-right">
                    <b className="post-title">These sweet mornings.</b>
                    <p className="post-content">Lorem ipsum dolor sit amet, consectectuer dolor. Anean massa.</p>
                    <p className="post-date"> Jul 29 2013</p>
                    </div>
                    <div className="clearfix" />
                </div>
                <span className="title">PHOTOS FLICKR</span>
                <hr />
                <div className="float-left photos">
                    <img alt="avatar" src="/avatar0.png" width="108px" className="float-left" />
                    <img alt="avatar" src="/avatar0.png" width="108px" className="float-left" />
                    <img alt="avatar" src="/avatar0.png" width="108px" className="float-left" />
                </div>
                <div className="float-left photos margin-bottom-81">
                    <img alt="avatar" src="/avatar0.png" width="108px" className="float-left" />
                    <img alt="avatar" src="/avatar0.png" width="108px" className="float-left" />
                    <img alt="avatar" src="/avatar0.png" width="108px" className="float-left" />
                </div>
                <div className="tweets">
                    <span className="title">LATEST TWEETS</span>
                    <hr />
                    <div className="post-part">
                    <img alt="avatar" src="/bird.png" className="float-left" />
                    <div className="post-right float-right">
                        <span className="post-content margin"><span className="specify_color">@envato:</span> Neque porro quisquam est, qui dolorem ipsum quia <u className="specify_color">goo.gi/5GlsEZ</u> dolor sit amet</span>
                        <p className="post-date margin-top-26">14 hours ago</p>
                    </div>
                    <div className="clearfix" />
                    </div>
                    <div className="post-part">
                    <img alt="avatar" src="/bird.png" className="float-left" />
                    <div className="post-right float-right">
                        <span className="post-content margin"><span className="specify_color">@envato:</span> Neque porro quisquam est, qui dolorem ipsum quia <u className="specify_color">goo.gi/5GlsEZ</u> dolor sit amet</span>
                        <p className="post-date margin-top-26">14 hours ago</p>
                    </div>
                    <div className="clearfix" />
                    </div>
                </div>
                <div className="tags">
                    <span className="title">TAGS</span>
                    <hr />
                    <div className="btn-group">
                        <Button aria-controls="simple-menu" className="browse-courses float-left specify_button" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            Porfolio
                        </Button>
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            Theme
                        </Button>
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            HTML
                        </Button>
                    </div>
                    <div className="btn-group">
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            Porfolio
                        </Button>
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            Theme
                        </Button>
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            HTML
                        </Button>
                    </div>
                    <div className="btn-group">
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            Porfolio
                        </Button>
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            Theme
                        </Button>
                        <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                            HTML
                        </Button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default BlogSidebarBlock;