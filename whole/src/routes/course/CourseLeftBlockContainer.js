import React, { Component } from 'react';

export default function(ComposedComponent) {
    class CourseLeftBlockContainer extends Component {
        render() {
            return(
                <div className="left-block light-border">
                    <img src="/blank-background.png" alt="img" className="course-img" />

                    <div className="text">
                        <h2 className="title no-margin padding-sm light-border-bottom">Et harum quidem rerum facili est et expedita distinctio.</h2>

                        <p className="no-margin padding-sm description">
                            Lorem ipsum dolor sit amet, consectetur adipiscelit. Cras consectetur, nisi et mollis vulputate, odmauris dapibus massa, vel facilisis erat neque sitamet augue. Mauris porttitor fringilla .
                        </p>
                        
                        <ComposedComponent />
                    </div>
                </div>
            );
        }
    }

    return CourseLeftBlockContainer;
}