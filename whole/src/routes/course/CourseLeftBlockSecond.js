import React, { Component } from 'react';
import CourseLeftBlockContainer from './CourseLeftBlockContainer';
import axios from 'axios';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class CourseLeftBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activedItem: 'Introduction',
            listData: []
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('/json/course_left_block_second_listdata.json')
            .then(response => {
                self.setState({
                    listData: response.data
                })
            });
    }

    selectItem = (item) => {
        this.setState({
            activedItem: item
        });
    }

    renderList = () => {
        return this.state.listData.map((item, i) => {
            return(
                <List key={i}>
                    <ListItem dense button  className="list-item parent" onClick={this.selectItem.bind(this, item.name)}>
                        {item.name}
                        {item.name === this.state.activedItem &&
                            <i className="fa fa-angle-double-down"></i>
                        }
                        
                        {item.name !== this.state.activedItem &&
                            <i className="fa fa-angle-double-right"></i>
                        }
                    </ListItem>
                    {item.name === this.state.activedItem && item.childs && item.childs.map((child, index) => {
                        return(
                            <ListItem dense button className={`list-item ${child.completedFlag ? 'complete' : ''}`} key={index}>
                                {child.name}
                            </ListItem>
                        );
                    })}
                </List>
            );
        });
    }

    render() {
        return(
            <div className="course-left-block-second-bottom">
                {this.renderList()}
                <div className="clearfix"></div>

                <style>{`
                .course-left-block-second-bottom {
                    top: 2px;
                    position: relative;
                    padding: 30px 20px 43px 78px;
                    background-color: #2d2d2d;
                }
                .course-left-block-second-bottom .list-item {
                    margin-bottom: 0px !important;
                    font-size: 21px;
                    top: 14px;
                    position: relative;
                    font-style: italic;
                    margin-bottom: 9px;
                    line-height: 30px;
                    left: -2px;
                    letter-spacing: 1.5px;
                    color: white;
                }
                .course-left-block-second-bottom .list-item.complete {
                    color: #82B540;
                    text-decoration: line-through;
                }
                .course-left-block-second-bottom .list-item.parent {
                    cursor: pointer;
                }
                .course-left-block-second-bottom .list-item:before, .course-left-block-second-bottom .list-item:after {
                    content: " ";
                    border-radius: 100%;
                    position: absolute;
                }
                .course-left-block-second-bottom .list-item:before {
                    width: 14px;
                    height: 14px;
                    background-color: #82B540;
                    left: -43px;
                    top: 8px;
                }
                .course-left-block-second-bottom .list-item:after {
                    width: 8px;
                    height: 8px;
                    background-color: #2d2d2d;
                    left: -40px;
                    top: 10.5px;
                }
                .course-left-block-second-bottom .list-item.parent {
                    color: white;
                    font-style: unset;
                    text-decoration: none;
                    margin-bottom: 20px;
                    margin-top: 18px;
                    letter-spacing: 0.8px;
                    font-weight: 600;
                }
                .course-left-block-second-bottom .list-item.parent:before {
                    width: 25px;
                    height: 25px;
                    background-color: white;
                    left: -48px;
                    top: 4px;
                }
                .course-left-block-second-bottom .list-item.parent:after {
                    width: 15px;
                    height: 15px;
                    background-color: #2d2d2d;
                    left: -43px;
                    top: 9px;
                    z-index: 1;
                }
                .course-left-block-second-bottom .list-item i {
                    margin-left: 10px;
                }
                .course-left-block-second-bottom .list-item.parent:first-of-type {
                    margin-top: 0px;
                }
                .course-left-block-second-bottom:before {
                    content: " ";
                    background-color: white;
                    width: 2px;
                    left: 39px;
                    height: calc(100% - 60px);
                    position: absolute;
                    display: block;
                }
                `}</style>
            </div>
        );
    }
}

export default CourseLeftBlockContainer(CourseLeftBlock);