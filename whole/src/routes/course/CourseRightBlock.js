import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class CourseLeftBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSkill: '',
        }
    }

    changeSkill = (skill) => {
        this.setState({
            activeSkill: skill
        });
    }

    render() {
        return(
            <div className="right-block light-border">
                <div className="take-course-block light-border-bottom">
                    <div className="price-block no-margin float-left">
                        <span>PRICE&nbsp;: </span>

                        <span className="price">
                            {this.props.data.leftBlock.content.price}
                            <span className="dollar">$</span>
                        </span>&nbsp;&nbsp;

                        <span className="price">
                            {this.props.data.leftBlock.content.discountedPrice}
                            <span className="dollar">$</span>
                        </span>
                    </div>

                    {/* <Link to="/course24" className="button float-right">Take This Course</Link> */}
                    <Button color="primary" className="button float-right">
                        Take This Course
                    </Button>
                    <div className="clearfix"></div>
                </div>

                <div className="text-block light-border-top">
                    <h2 className="title first">{this.props.data.rightBlock.heading.title}</h2>

                    <p className="content">
                      {this.props.data.rightBlock.heading.text}
                    </p>

                    <ul className="skill-list">
                      {this.props.data.rightBlock.heading.skillsList.map((skill, index) => (
                        <li key={index}>
                            <i className="fa fa-arrow-circle-right"></i>
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <h2 className="title second">{this.props.data.rightBlock.content.title}</h2>

                    <p className="content">
                      {this.props.data.rightBlock.content.text}
                        <span className="more-link font-italic">More..</span>
                    </p>

                    <ul className="experience-list">
                        {this.props.data.rightBlock.content.skillsList.map((item, i) => {
                            return(
                                <li key={i} className={this.state.activeSkill === item.title ? 'active' : undefined}>
                                    <div className="header" onClick={this.changeSkill.bind(this, item.title)}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                        <i className={`${this.state.activeSkill === item.title ? 'fa fa-angle-down' : 'fa fa-angle-up'} float-right`}></i>
                                    </div>

                                    <div className="list-content">
                                        {item.content}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CourseLeftBlock;