import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class CourseLeftBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSkill: 'Clean Modern Code',
            skillList: []
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('/json/courseskilllist.json')
            .then(response => {
                self.setState({
                    skillList: response.data
                })
            });
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
                            <span className="first-letter">1</span>
                            <span className="second-letter">9</span>
                            <span className="third-letter">0</span>
                            <span className="dollar">$</span>
                        </span>&nbsp;&nbsp;
                        
                        <span className="price">
                            <span className="first-letter">2</span>
                            <span className="second-letter">9</span>
                            <span className="third-letter">0</span>
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
                    <h2 className="title first">Learn Everything You Need to Know About Web Development Even If You've Never Programmed Before!</h2>

                    <p className="content">
                        in more than 45 hours of content, this comprehensive programming course will teach youll you need to know about becoming a web developer. "Web Development" is the term usedto define all the work involved in the creation of a web site or web application. Web developme can range from creating a simple and static website, to the most complex web-based applications such as Facebook, Ebay, or Google Maps.
                    </p>

                    <ul className="skill-list">
                        <li>
                            <i className="fa fa-arrow-circle-right"></i>
                            The Basics: HTML, XHTML, CSS and JavaScript
                        </li>
                        <li>
                            <i className="fa fa-arrow-circle-right"></i>
                            BackEnd Development: PHP, MySQL, XML and jSON
                        </li>
                        <li>
                            <i className="fa fa-arrow-circle-right"></i>
                            FrontEnd Development: AJAX, jQuery, HTML5 and CSS3
                        </li>
                    </ul>

                    <h2 className="title second">Join Over 36,000 Students, and Build a Variety of Functional Websites from Scratch .</h2>

                    <p className="content">
                        This course is regularly updated and along with video tutorials it also contains exercises manuals and resources to help you succeed. Anyone looking to get into web development should sign up today--no prior experience necessary
                        <span className="more-link font-italic">More..</span>
                    </p>

                    <ul className="experience-list">
                        {this.state.skillList.map((item, i) => {
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