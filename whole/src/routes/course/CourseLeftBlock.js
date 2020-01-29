import React, { Component } from 'react';
import CourseLeftBlockContainer from './CourseLeftBlockContainer';
import Stars from './Stars';
import Button from '@material-ui/core/Button';
import { isEmpty } from 'lodash';

class CourseLeftBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLeftSidebarListItem: 'Curriculum'
    }
  }

  changeActiveLeftSidebarListItem = (title) => {
    this.setState({
      activeLeftSidebarListItem: title
    });
  }


  render() {
    return isEmpty(this.props.data) ? null : (
      <React.Fragment>
        <div className="light-border-top light-border-bottom other-info">
          <Stars rating={this.props.data.leftBlock.content.rating} />

          <div className="budget light-border-left light-border-right">
            <span className="new-budget">{this.props.data.leftBlock.content.price}$</span>&nbsp;&nbsp;
            <span className="old-budget">{this.props.data.leftBlock.content.discountedPrice}$</span>
          </div>

          <div className="student-number">
            {this.props.data.leftBlock.content.studentsNumber} Student
            <i className="fa fa-user"></i>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="author-info padding-sm light-border-bottom">
          <img src={this.props.data.leftBlock.content.img} className="author-logo" alt="author-logo" />
          <span className="name">{this.props.data.leftBlock.content.author}</span> <br />
          <span className="author-job">{this.props.data.leftBlock.content.authorJob}</span>
          <div className="clearfix"></div>
        </div>

        <div className="padding-sm author-description">
          {this.props.data.leftBlock.content.authorDescription}

          <span className="more-link">More..</span>
        </div>

        <div className="left-sidebar-list">
          {this.props.data.leftBlock.sidebar.map((item, i) => {
            return(
              <Button key={i} aria-controls="simple-menu" aria-haspopup="true" className={`list-item light-border-top ${this.state.activeLeftSidebarListItem === item.title ? 'active' : undefined}`} onClick={this.changeActiveLeftSidebarListItem.bind(this, item.title)}>
                <i className={item.icon}></i> {item.title}
              </Button>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default CourseLeftBlockContainer(CourseLeftBlock);