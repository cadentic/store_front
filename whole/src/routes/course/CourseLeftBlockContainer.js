import React, { Component } from 'react';
import { isEmpty } from 'lodash';

export default function(ComposedComponent) {
    class CourseLeftBlockContainer extends Component {
        render() {
          return isEmpty(this.props.data) ? null : (
                <div className="left-block light-border">
                    <img src={this.props.data.leftBlock.heading.img} alt="img" className="course-img" />

                    <div className="text">
                        <h2 className="title no-margin padding-sm light-border-bottom">{this.props.data.leftBlock.heading.title}</h2>

                        <p className="no-margin padding-sm description">
                          {this.props.data.leftBlock.heading.text}
                        </p>

                        <ComposedComponent {...this.props} />
                    </div>
                </div>
            );
        }
    }

    return CourseLeftBlockContainer;
}