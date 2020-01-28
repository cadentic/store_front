import React, { Component } from 'react';

class BlogContainer extends Component {
    render() {
        return(
            <React.Fragment>
                {this.props.children}

                <style>{`
                    .width-50 input{
                        width: 370px !important;
                    }
                    .footer_input{
                        width: 100% !important;
                    }
                    .left_side {
                        /* width: 65.7%; */
                        width: calc(100% - 400px);
                        margin: 0px 0px 30px 0;
                        position: relative;
                        float: left;
                    }
                    .input-group ::placeholder{
                        color: #bed0a6 !important;
                    }
                    .left_side .search_display{
                        height: 350px;
                        border-radius: 5px;
                        background-color: #d7d7d7;
                    }
                    .left_side .note{
                        margin-top: 29px;
                    }
                    .note_title{
                        margin-left: -1px;
                        font-size: 21px;
                        line-height: 24px;
                        color: #2d2d2d;
                        font-family: sans-serif;
                        font-weight: 700;
                    }
                    .note>p:nth-child(2){
                        margin-top: 17px;
                    }
                    .note>p:nth-child(3){
                        top: -6px;
                        margin-left: -1px;
                        position: relative;
                        letter-spacing: -0.52px;
                        word-break: break-all;
                        line-height: 25px;
                    }
                    .note>p:nth-child(4){
                        margin-top: 33px !important;
                        margin-left: -1px;
                        letter-spacing: -0.55px;
                        word-break: break-all;
                    }
                    .said_content>p:last-child{
                        letter-spacing: -0.55px;
                    }
                    .note>p:nth-child(5){
                        margin-left: -1px;
                        margin-top: 17px;
                        letter-spacing: -0.37px;
                        word-break: break-all;
                    }
                    .post>div:nth-child(4)>.width-50{
                        margin-top: 7px !important;
                    }
                    .margin-bottom-64{
                        margin-bottom: 64px;
                    }
                    .post-part{
                        margin-bottom: 13px !important;
                    }
                    .margin-top-2{
                        margin-top: -2px !important;
                    }
                    .post .photos{
                        width: 100%;
                    }
                    .post > photos:last-child{
                        margin-bottom: 81px !important;
                    }
                    .post .float-left img{
                        margin-bottom: 4.7% !important;
                    }
                    .post .float-left img:nth-child(1), .post .float-left img:nth-child(2){
                        margin-right: 4.7% !important;
                    }
                    .right_side .post > div.post-part:nth-child(6){
                        margin-bottom: 80px !important;
                    }
                    .post hr:nth-child(2){
                        margin-bottom: 31px !important;
                    }
                    .post hr:nth-child(3){
                        margin-top: 23px !important;
                    }
                    h3{
                        font-family: monospace;
                        font-size: 21pt;
                        color: #2E2E2E !important;
                    }
                    .post_step .pane{
                        background-color: #d7d7d7;
                        height: 351px;
                        border-radius: 5px;
                    }
                    .left_side .note p.block span{
                        float: left;
                        line-height: 28px;
                    }
                    .margin-left-30{
                        margin-left: 30px !important;
                    }
                    .left_side .note p.block span, .said .said_content p span{
                        font-size: 14px;
                        color: #d7d7d7;
                        font-family: monospace;
                        letter-spacing: -1px;
                        margin-right: 9px;
                    }
                    .left_side .note p.block span:nth-child(2){
                        margin-left:  9px;
                    }
                    p.content, span.content{
                        font-size: 15px;
                        line-height: 23px;
                        color: #3b4045;
                        font-family: sans-serif;
                        font-weight: 700;
                    }
                    p.style2, p.style3, p.style4, p.style5{
                        line-height: 25px !important;
                        color: #7d8185 !important;  
                    }
                    .content.style6{
                        font-size: 10pt;
                        color: #7d8185;
                        letter-spacing: -0.25px !important;
                        line-height: 25.2px !important;
                    }
                    .left_side>hr:nth-child(2){
                        margin-top: 20px !important;
                    }
                    .content.style6 i{
                        margin-right: 10px;
                    }
                    .float-left{
                        float: left !important;
                    }
                    .float-right{
                        float: right !important;
                    }
                    .width-50{
                        width: 48%;
                        margin-top: 16px;
                    }
                    .width-50:nth-child(2){
                        left: -2px;
                        position: relative;
                    }
                    .width-50>span{
                        display: block;
                    }
                    .said{
                        padding: 35px;
                    }
                    .said.client{
                        margin: 42px 0px 25px 0px;
                        background-color: #FAFBFD;
                    }
                    .said>img {
                        margin-left: -5px;
                    }
                    .employ{
                        background: white !important;
                        border: solid 1px #e2e2e2;
                        margin-bottom: 29px;
                        border-radius: 5px;
                    }
                    .left_side > .said-group > div:nth-child(2){
                        margin-left: 9% !important;
                    }
                    .left_side > .said-group > div:nth-child(2) .said_content{
                        width: 82% !important;
                    }
                    .left_side > .said-group > div:nth-child(3){
                        margin-left: 18% !important;
                    }
                    .left_side > .said-group > div:nth-child(3) .said_content{
                        width: 80% !important;
                    }
                    .leave{
                        margin-top: 41px;
                        word-break: break-all;
                        letter-spacing: -1.6px; 
                    }
                    .margin-top-78{
                        margin-top: 78px !important;
                    }
                    
                    .said .said_img{
                        border-radius: 5px;
                        float: left;
                    }
                    .said .width-15{
                        width: 15% !important;
                        float: left;
                    }
                    .said .said_content{
                        margin-top: -10px;
                        margin-right: -10px;
                        width: 85%;
                        float: right;
                    }
                    .said .said_content .content{
                        color: #7d8185;
                        line-height: 22.5px !important;
                        margin-top: 0 !important;
                    }
                    .said .said_content .title{
                        font-size: 20px;
                        font-family: sans-serif !important;
                    }
                    .left_side .post{
                        margin-top: 61px;
                        margin-left: 1px;
                    }
                    .blog-left{
                        width: 35.3%;
                        height: 202px;
                        background-color: #D8D8D8;
                        float: left;
                        border-radius: 5px;
                    }
                    .clearfix::after{
                        display: block;
                        clear: both;
                        content: "";
                    }
                    
                    .blog-right{
                        width: 60.9%;
                        float: right;
                        line-height: 23px !important;
                        margin-top: -6px !important;
                    }
                    
                    .specify_color{
                        color: #82b540 !important;
                    }
                    .margin-top-30{
                        margin-left: 1px;
                        margin-top: 16px !important;
                    }
                    .margin-top-26{
                        margin-top: 25px !important;
                    }
                    .margin-top-27{
                        margin-top: 27px !important;
                    }
                    .margin-top-8{
                        margin-top: 8px !important;
                    }
                    .margin-top-0{
                        position: relative;
                        top: -11px !important;
                    }
                    .margin-top-0>p{
                        letter-spacing: -0.48px !important;
                        word-break: break-all;
                        margin-left: -1px;
                    }
                    .padding-top-0{
                        padding-top: 0 !important;
                    }
                    .margin-bottom-0{
                        margin-bottom: 0 !important;
                    }
                    .margin-bottom-81{
                        margin-bottom: 81 !important;
                    }
                    .left_side .note .pane{
                        border-radius: 5px;
                        background-color: #f9fafc;
                        padding: 30px;
                    }
                    .left_side .note .pane span {
                        font-size: 15px;
                        word-break: break-all;
                        letter-spacing: -0.5px;
                        line-height: 25px;
                        color: #2d2d2d;
                        font-family: sans-serif;
                        font-style: italic;
                        font-weight: 500;
                        top: 24px;
                        left: 0px;
                        position: relative;
                    }
                    .font-size-16{
                        font-size: 16px !important;
                        letter-spacing: 0.13px;
                    }
                    .post>p:nth-child(2) {
                        margin-left: -2px;
                        word-break: break-all;
                    }
                    .post>div:nth-child(3)>p:nth-child(2) {
                        left: -1px;
                        top: -2px;
                        position: relative;
                        word-break: break-all;
                        letter-spacing: -0.6px;
                    }
                    .post>p:nth-child(4) {
                        margin-top: 14px;
                        margin-left: -2px;
                        word-break: break-all;
                        letter-spacing: 0.13px;
                    }
                    .post>div:nth-child(5)>p:first-child {
                        margin-left: -1px;
                        margin-top: -4px !important;
                        word-break: break-all;
                        letter-spacing: -0.6px;
                    }
                    .post>div:nth-child(8) {
                        top: -2px !important;
                        left: -1px;
                    }
                    .post>div:nth-child(8)>div:first-child>span:first-child{
                        margin-left: 1px;
                    }
                    .left_side div:nth-child(6)>hr{
                        margin-top: 26px !important;
                    }
                    .left_side div:nth-child(8)>hr{
                        margin-top: 13px !important;
                    }
                    .left_side h3:first-child{
                        margin-top: 55px !important;
                    }
                    .margin-top-40{
                        margin-top: 40px !important;
                        margin-bottom: 88px !important;
                    }
                    .right_side {
                        width: 370px !important;
                        /* width: 30.7%; */
                        float: left;
                        position: relative;
                    }
                    .right_side .title{
                        font-size: 18pt;
                        color: #2d2d2d;
                        font-family: sans-serif;
                        font-weight: 700;
                    }
                    .right_side hr {
                        border-color: rgba(172,172,172,0.5019607843137255) !important;
                        border-width: 0.5px !important;
                        margin: 20px 0 26px 0;
                    }
                    .left_side > button{
                        margin-top: 0px !important;
                        background: #82B540;
                        box-sizing: 0 !important;
                        height: 66px !important;
                        border-radius: 7px !important;
                        color: #FBFAFF !important;
                        font-size: 18pt;
                        outline: 0!important;
                        box-shadow: none!important;
                        padding: 6px 35px;
                        border: none !important;
                        float: right;
                    }
                    .left_side hr{
                        border-color: #e3e3e3 !important;
                        margin-top: 47px !important;
                        border-width: .5px !important;
                    }
                    .right_side .input-group-addon {
                        right: 0px;
                        box-sizing: border-box;
                        font-size: 14px;
                        width: 70px;
                        height: 50px;
                        background-color: #82b540;
                        border: 1px solid #649721;
                    }
                    .right_side .input-group-addon{
                        white-space: nowrap;
                        vertical-align: middle;
                        display: table-cell;
                    }
                    
                    .input-group i {
                        font-size: 21px;
                        color: #ffffff;
                        text-align: center;
                        padding-left: 35%;
                    }
                    
                    .category{
                        margin-top: 100px;
                        margin-bottom: 103px !important;
                    }
                    .category title {
                        font-size: 25px;
                        line-height: 1px;
                        color: #2d2d2d;
                        font-family: Open Sans;
                        font-weight: 700;
                    }
                    .category ul li{
                        font-size: 17px;
                        color: #2d2d2d;
                        font-family: monospace;
                        list-style: none;
                        padding: 9px;
                        padding-left: 0 !important;
                        border-bottom: solid 1px rgba(214, 214, 214, 1);
                    }
                    .category ul li:nth-child(3n){
                        color: #82b540 !important;
                    }
                    .category ul{
                        padding-left: 0 !important;
                    }
                    .category ul li span {
                        margin-left: 11px;
                    }
                    .post{
                        color: #A6A6A6 !important;
                    }
                    .post .post-part .post-right b{
                        font-family: sans-serif;
                        color: #262626;
                        letter-spacing: -0.3px !important;
                    }
                    .post-right{
                        width: 63%;
                    }
                    .post-part{
                        width: 100% !important;
                    }
                    .post .post-part .post-right p{
                        color: #A6A6A6 !important;
                    }
                    .post-date{
                        font-size: 9pt;
                        margin-top: 0 !important;
                    }
                    .post-part p{
                        font-size: 10pt;
                        font-family: sans-serif;
                    }
                    .right_side .tweets .post-part .post-right{
                        width: 80% !important;
                    }
                    .tweets{
                        margin-bottom: 90px !important;
                    }
                    .tweets .post-part .post-right .post-content{
                        font-size: 16pt !important;
                        color: #2d2d2d !important;
                        font-family: sans-serif !important;
                        word-break: break-all !important;
                        letter-spacing: -1px !important;
                        line-height: 32px;
                    }
                    .tweets .post-part .post-right .post-date{
                        color: #d5d5d5 !important;
                        font-style: italic;
                        font-family: initial;
                        font-size: 12pt;
                    }
                    
                    .right_side .tags .btn-group button{
                        border: none;
                        padding: 9px 20px;
                        font-size: 16pt;
                        color: white;
                        border-radius: 6px;
                        background-color: #2d2d2d;
                        margin-bottom: 16px;
                        line-height: normal;
                        text-transform: inherit;
                    }
                    .right_side .tags .btn-group button:first-child, .right_side .tags .btn-group button:nth-child(2){
                        margin-right: 16px;
                    }
                    .specify_button{
                        background-color: #82B540 !important;
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

export default BlogContainer;