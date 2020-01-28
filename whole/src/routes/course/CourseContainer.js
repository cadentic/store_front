import React, { Component } from 'react';

class CourseContainer extends Component {
    render() {
        return(
            <React.Fragment>
                {this.props.children}

                <style>{`
                    .course-info {
                        padding-top: 100px;
                        background-color: white;
                        padding-bottom: 100px;
                        position: relative;
                    }
                    .course-info .left-block, .course-info .right-block {
                        transition: all linear .3s;
                    }
                    .course-info .section-container > div:first-child {
                        margin-right: 30px;
                    }
                    .course-info .section-container > div:last-child {
                        margin-right: 0px;
                    }
                    .course-info .left-block {
                        width: 370px;
                        box-sizing: border-box;
                        float: left;
                    }
                    .course-info .left-block .course-img {
                        width: 100%;
                        height: 350px;
                    }
                    .course-info .left-block .text .title {
                        font-size: 21px;
                        line-height: 33px;
                        font-family: monospace;
                        font-weight: 700;
                        font-style: italic;
                        letter-spacing: -3.2px;
                        padding-bottom: 19px;
                    }
                    .course-info .left-block .text .description {
                        padding: 15px 21px;
                        letter-spacing: -0.9px;
                        line-height: 26px;
                        font-style: italic;
                    }
                    .course-info .left-block .text .other-info > div {
                        box-sizing: border-box;
                    }
                    .course-info .left-block .text .other-info .star {
                        width: 35%;
                        float: left;
                        padding: 21px 0px 21px 23px;
                        font-size: 13px;
                        letter-spacing: 5.7px;
                    }
                    .course-info .left-block .text .other-info .budget {
                        width: 30%;
                        float: left;
                        padding: 22px 0px;
                        text-align: center;
                        font-size: 12px;
                        font-weight: 600;
                    }
                    .course-info .left-block .text .other-info .budget .new-budget {
                        color: #82b540;
                    }
                    .course-info .left-block .text .other-info .budget .old-budget {
                        text-decoration: line-through;
                    }
                    .course-info .left-block .text .other-info .student-number {
                        float: left;
                        width: 35%;
                        font-size: 12px;
                        font-weight: 600;
                        padding: 23px 0px 21px 27px;
                        letter-spacing: 0.5px;
                    }
                    .course-info .left-block .text .other-info .student-number i {
                        margin-left: 5px;
                    }

                    .course-info .left-block .text .author-info {
                        padding: 23px 0px 23px 23px;
                    }

                    .course-info .left-block .text .author-info img {
                        width: 100px;
                        height: 100px;
                        border-radius: 50px;
                        margin-right: 25px;
                        float: left;
                    }
                    .course-info .left-block .text .author-info .name {
                        font-size: 25px;
                        line-height: 58px;
                        font-weight: 700;
                        font-style: italic;
                        letter-spacing: -1.7px;
                    }
                    .course-info .left-block .text .author-info .author-job {
                        font-style: italic;
                        letter-spacing: -0.4px;
                        color: #bec9b1;
                    }
                    .course-info .left-block .text .author-description {
                        letter-spacing: -0.3px;
                        padding: 20px 23px;
                        font-style: italic;
                        word-break: break-all;
                        line-height: 25px;
                    }
                    .course-info .left-block .text .left-sidebar-list .list-item {
                        width: 100%;
                        font-size: 17px;
                        line-height: 66px;
                        padding: 0px 23px;
                        font-style: italic;
                        letter-spacing: 2.3px;
                        font-weight: 600;
                        cursor: pointer;
                    }
                    .course-info .left-block .text .left-sidebar-list .list-item .MuiButton-label {
                        justify-content: left;
                    }
                    .course-info .left-block .text .left-sidebar-list .list-item.active {
                        background-color: #e7eddf;
                    }

                    .course-info .right-block {
                        width: calc(100% - 400px);
                        float: left;
                        box-sizing: border-box;
                    }
                    .course-info .right-block .take-course-block {
                        padding: 28px 29px 25px 45px;
                    }
                    .course-info .right-block .price-block {
                        font-size: 21px;
                        line-height: 25px;
                        font-weight: 600;
                        letter-spacing: 0.4px;
                        line-height: 50px;
                    }
                    .course-info .right-block .price-block .price {
                        color: #82b540;
                    }
                    .course-info .right-block .price-block .price:last-child {
                        text-decoration: line-through;
                    }
                    .course-info .right-block .price-block .price .first-letter {
                        font-size: 21px;
                    }
                    .course-info .right-block .price-block .price .second-letter {
                        font-size: 17px;
                    }
                    .course-info .right-block .price-block .price .third-letter {
                        font-size: 12px;
                    }
                    .course-info .right-block .price-block .price .dollar {
                        font-size: 12px;
                    }
                    .course-info .right-block .button {
                        text-decoration: none;
                        padding: 13px 25px;
                        font-size: 19px;
                        border-radius: 5px;
                        background-color: #82b540;
                        border: 1px solid #77a73a;
                        text-align: center;
                        color: white;
                        box-sizing: border-box;
                        cursor: pointer;
                        text-transform: inherit;
                    }
                    .course-info .right-block .button:focus {
                        outline: none;
                    }

                    .course-info .right-block .text-block {
                        margin-top: 30px;
                        padding: 0 20px 0px 34px;
                    }
                    .course-info .right-block .text-block .title {
                        font-weight: 600;
                        font-size: 21px;
                        line-height: 33px;
                        margin-top: 22px;
                        margin-bottom: 30px;
                        letter-spacing: 0.57px;
                    }
                    .course-info .right-block .text-block .title.second {
                        margin-left: -2px;
                        letter-spacing: 0.45px;
                    }
                    .course-info .right-block .text-block .content {
                        margin-top: 27px;
                        letter-spacing: 0.75px;
                        line-height: 29px;
                    }
                    .course-info .right-block .text-block .skill-list {
                        list-style: none;
                        padding-left: 0px;
                        margin-top: 35px;
                        margin-bottom: 32px;
                        font-style: italic;
                        letter-spacing: 0.56px;
                    }
                    .course-info .right-block .text-block .skill-list li {
                        margin-bottom: 14px;
                    }
                    .course-info .right-block .text-block .skill-list i {
                        margin-right: 18px;
                    }

                    .course-info .right-block .text-block .experience-list {
                        padding-left: 18px;
                        margin-top: 57px;
                        list-style: none;
                        letter-spacing: 0.75px;
                    }
                    .course-info .right-block .text-block .experience-list li {
                        margin-bottom: 41px;
                    }
                    .course-info .right-block .text-block .experience-list li .header {
                        cursor: pointer;
                    }
                    .course-info .right-block .text-block .experience-list li .list-content {
                        color: #2d2d2d;
                        color: #2d2d2d;
                        line-height: 24px;
                        letter-spacing: -0.3px;
                        
                        margin-top: 0px;
                        height: 0px;
                        overflow: hidden;
                        transition: all linear .3s;
                    }
                    .course-info .right-block .text-block .experience-list li.active .list-content {
                        margin-top: 34px;
                        height: inherit;
                    }
                    .course-info .right-block .text-block .experience-list li i {
                        margin-right: 38px;
                        margin-top: 3px;
                    }
                    .course-info .right-block .text-block .experience-list li i:first-child {
                        margin-right: 15px;
                    }
                    .course-info .right-block .text-block .experience-list li.active {
                        color: #82b540;
                    }

                    .light-border {
                        border: solid 1px #e7eddf;
                    }
                    .light-border-left {
                        border-left: solid 1px #e7eddf;
                    }
                    .light-border-right {
                        border-right: solid 1px #e7eddf;
                    }
                    .light-border-top {
                        border-top: solid 1px #e7eddf;
                    }
                    .light-border-bottom {
                        border-bottom: solid 1px #e7eddf;
                    }


                    .padding-sm {
                        padding: 13px 21px;
                    }

                    .more-link {
                        display: inline-block;
                        margin-left: 5px;
                        color: #82b540;
                        cursor: pointer;
                    }
                    .font-italic {
                        font-style: italic;
                    }

                    @media screen and (max-width: 768px) {
                        .course-info .left-block, .course-info .right-block {
                            width: 100%;
                        }
                    }
                    @media screen and (max-width: 900px) {
                        .course-24 .left-block {
                            width: 100% !important;
                        }
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

export default CourseContainer;