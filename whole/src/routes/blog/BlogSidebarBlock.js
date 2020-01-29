import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

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
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchTextButtonClick = this.handleSearchTextButtonClick.bind(this);
  }

  /**
   * Here you will handle text search.
   */
  handleSearchTextButtonClick(text) {
    alert('You need to handle text search by yourself!\nText: '+text);
  }

  handleSearchTextChange({target}) {
    this.setState({searchText: target.value});
  }

  render() {
    return isEmpty(this.props.data) ? null : (
      <div className="right_side">
        <span className="title">SEARCH</span>
        <hr />
        <InputGroup className="input-group">
          <TextField value={this.state.searchText} onChange={this.handleSearchTextChange} label="Start searching.." variant="outlined" className="form-control" color="primary" />
          <span className="input-group-addon" onClick={() => this.handleSearchTextButtonClick(this.state.searchText)}>
            <i className="fa fa-search" />
          </span>
        </InputGroup>
        <div className="category">
          <span className="title"> CATEGORIES</span>
          <hr />
          <ul>
            {this.props.data.sidebar.categories.map((category, index) => (
              <li key={index}><i className="fa fa-angle-right" />  <span>{category.name} ({category.count})</span></li>
            ))}
          </ul>
        </div>
        <div className="post margin-top-30 margin-bottom-64">
          <span className="title">POPULAR POST</span>
          <hr />
          {this.props.data.sidebar.postParts.map((post, index) => (
            <div className={post.class} key={index}>
              <div className="width-15">
                <img alt="avatar" src={post.avatar} width="96px" className="float-left" />
              </div>
              <div className="post-right float-right">
                <b className="post-title">{post.title}</b>
                <p className="post-content">{post.content}</p>
                <p className="post-date">{post.date}</p>
              </div>
              <div className="clearfix" />
            </div>
          ))}
          <span className="title">PHOTOS FLICKR</span>
          <hr />
          {this.props.data.sidebar.flickr.map((group, index) => (
            <div className={'float-left photos '+(this.props.data.sidebar.flickr.length === index+1 ? 'margin-bottom-81' : '')} key={index}>
              {group.map((item, index) => (
                <img alt="avatar" src={item} width="108px" className="float-left" key={index} />
              ))}
            </div>
          ))}
          <div className="tweets">
            <span className="title">LATEST TWEETS</span>
            <hr />
            {this.props.data.sidebar.tweets.map((tweet, index) => (
              <div className="post-part" key={index}>
                <img alt="avatar" src="/bird.png" className="float-left" />
                <div className="post-right float-right">
                  <span className="specify_color">@{tweet.author}:</span>
                  <span className="post-content margin" dangerouslySetInnerHTML={{__html: tweet.content}}></span>
                  <p className="post-date margin-top-26">{tweet.creation}</p>
                </div>
                <div className="clearfix" />
              </div>
            ))}
          </div>
          <div className="tags">
            <span className="title">TAGS</span>
            <hr />
            {this.props.data.sidebar.tags.map((group, index) => (
              <div className="btn-group" key={index}>
                {group.map((tag, index) => (
                  <Button aria-controls="simple-menu" className="browse-courses float-left specify_button" aria-haspopup="true" key={index}>
                    {tag}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogSidebarBlock;