import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleMsgClick();
  }

  render() {
    return(
      <footer>
        <div className="footer-top">
                <div className="icons-wrapper fixed-width overflow-hidden">
                <div className="item-image"><img alt="icon" src="/footer/1.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/2.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/3.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/4.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/5.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/6.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/7.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/8.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/9.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/10.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/11.png" /></div>
                <div className="item-image"><img alt="icon" src="/footer/12.png" /></div>
                </div>
            </div>
          <div className="footer-middle">
            <div className="fixed-width overflow-hidden">
                <div className="item-wrapper">
                    <div className="item-title">
                    OTHER LINKS
                    </div>
                    <div className="item-lists">
                    <ul>
                        <li><i className="fa fa-link" /> <a href="/"> Courses</a> </li>
                        <li><i className="fa fa-link" /><a href="/"> Events</a> </li>
                        <li><i className="fa fa-link" /><a href="/"> Showcase</a> </li>
                        <li className="active"><i className="fa fa-unlink" /><a href="/"> Thoughts</a> </li>
                        <li><i className="fa fa-link" /><a href="/"> Uncategorized</a> </li>
                        <li><i className="fa fa-link" /><a href="/"> Full Width Template</a></li>
                        <li><i className="fa fa-link" /><a href="/"> Contact</a> </li>
                    </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <div className="item-title">
                    EDUCATION
                    </div>
                    <div className="item-lists">
                    <ul>
                        <li><i className="fa fa-angle-right" /><a href="/"> Membership Levels</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Reasons to join</a> </li>
                        <li className="active"><i className="fa fa-angle-right" /><a href="/"> Shop</a> </li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Cart</a> </li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Members</a> </li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Shortcodes</a> </li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Full  Width Template</a> </li>
                    </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <div className="item-title">
                    ENGINEERING
                    </div>
                    <div className="item-lists">
                    <ul>
                        <li><i className="fa fa-angle-right" /><a href="/"> Specials</a> </li>
                        <li><i className="fa fa-angle-right" /><a href="/"> New Products</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Best Sellers</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Our Stores</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Contact Us</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Shop</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> Cart</a></li>
                    </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <div className="item-title">
                    LAW &amp; BUSINESS
                    </div>
                    <div className="item-lists">
                    <ul>
                        <li><i className="fa fa-angle-right" /><a href="/"> My Orders</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> My Credit Slips</a> </li>
                        <li><i className="fa fa-angle-right" /><a href="/"> My Addresses</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> My Personal Info</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> My Specials</a></li>
                        <li><i className="fa fa-angle-right" /><a href="/"> My New Products</a></li>
                    </ul>
                    </div>
                </div>
                </div>
          </div>
          <div className="footer-bottom">
            <div className="fixed-width overflow-hidden">
              <div className="copyright-letter footer-bottom-item">
                  <div>Copyright 2014 The Legend <span className="green-separator">|</span> Designed By Mohamed Said</div> 
              </div>
              <div className="footer-bottom-list footer-bottom-item">
                <ul>
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/">Page</a></li>
                  <li><a href="/">Portfolio</a></li>
                  <li><a href="/">Blog</a></li>
                  <li className="padding-right-0"><a href="/">Shop</a></li>
                </ul>
              </div>
              <div className="chatboxIcon" onClick={this.handleClick}>
                <Avatar alt="ChatBox" />
              </div>
          </div>
        </div>
            <style>{`
            
                *{
                    box-sizing: border-box;
                }

                .fixed-width{
                    width: 1170px;
                    margin: 0px auto;
                }
                .overflow-hidden{
                    overflow: hidden;
                }
                a{
                    color: white;
                }
                a:hover{
                    color: #82b540;
                }
                li.active a{
                    color: #82b540;
                }
                .padding-right-0{
                    padding-right: 0px !important;
                }


                .footer-top{
                    border-bottom: 1px solid #424242;
                    border-top: 1px solid #424242;
                    background-color: #2d2d2d;
                }
                .footer-top div.item-image{
                    width: 100px;
                    display: inline-block;
                    float: left;
                    height: 124px;
                    text-align: center;
                }
                .footer-top div.item-image:last-child{
                    width: 70px;
                }
                .footer-top div.item-image > img{ 
                    width: 33px;
                    height: 33px;
                    margin-top: 50px;
                    margin-right: 30px;
                }
                .footer-top div.item-image:last-child > img{
                    margin-right: 0px;
                }


                .footer-middle{
                    background-color: #2d2d2d;
                }
                .footer-middle > div.fixed-width{
                    padding-bottom: 68px;
                    padding-top: 96px;
                }
                .item-wrapper {
                    width: 25%;
                    float: left;
                }
                .item-title {
                    font-size: 24px;
                    line-height: 33px;
                    color: #ffffff;
                    font-family: sans-serif;
                    font-weight: 600;
                    letter-spacing: .4px;
                }
                .item-wrapper:nth-child(2) .item-title {
                    padding-left: 5px;
                }
                .item-wrapper:nth-child(3) .item-title {
                    padding-left: 13px;
                }
                .item-wrapper:nth-child(4) .item-title {
                    padding-left: 20px;
                }

                .item-wrapper:nth-child(1) ul {
                    padding-left: 12px;
                }
                .item-wrapper:nth-child(2) ul {
                    padding-left: 9px;
                }
                .item-wrapper:nth-child(3) ul {
                    padding-left: 14px;
                }
                .item-wrapper:nth-child(4) ul {
                    padding-left: 21px;
                }
                .item-wrapper:nth-child(4) ul li a {
                    padding-left: 10px;
                }

                .item-lists {
                    PADDING-TOP: 24px;
                    font-size: 17px;
                    line-height: 29px;
                    color: white;
                    font-family: "Font Awesome";
                }
                .item-lists li.active {
                    color: #82b540;
                }
                .item-lists ul {
                    list-style: none;
                    padding-left: 14px;
                }
                .item-lists ul li a {
                    font-family: sans-serif;
                    padding-left: 5px;
                    text-decoration: none;
                }
                .item-lists ul li i {
                    color: #82b540;
                }
                .item-lists span {
                    color: #82b540;
                }



                .footer-bottom{
                    background-color: #191919;
                }
                .footer-bottom-item{
                    width: 50%;
                    float: left;
                }
                .copyright-letter{
                    font-size: 21px;
                    color: #cfcfcf;
                    font-weight: 250;
                    letter-spacing: .8px;
                }
                .copyright-letter div{
                    line-height: 125px;
                    font-size: 21.7px;
                    letter-spacing: 0.5px;
                } 
                .copyright-letter div span.green-separator{
                    color: #82b540;
                    padding-left: 5px;
                } 
                .footer-bottom-list.footer-bottom-item li {
                    display: inline;
                    padding-right: 40px;
                    font-size: 17px;
                    line-height: 125px;
                    color: #ffffff;
                    font-weight: 300;
                }
                .footer-bottom-list.footer-bottom-item li.active {
                    color: #82b540;
                }
                .footer-bottom-list ul{
                    margin-top: 0px !important;
                    margin-bottom: 0px !important;
                    text-align: right;
                }


                @media (max-width: 539px) {
                    .item-wrapper {
                        width: 100% !important;
                        padding-left: 0px !important;
                    }
                }
                @media (max-width: 990px) {
                    .footer-bottom-item {
                        width: 100%;
                        height: auto !important;
                        text-align: center;
                    }
                    .footer-bottom-list ul {
                        text-align: center;
                    }
                    .footer-bottom-list.footer-bottom-item li {
                        float: none !important;
                        padding-right: 0px;
                        line-height: 62px;
                    }
                    .copyright-letter div {
                        line-height: 45px;
                    }
                }
                @media (max-width: 600px) {
                    .footer-top {
                        height: 80px;
                    }
                    .footer-top div.item-image > img {
                        width: 22px !important;
                        height: 22px !important;
                        margin-top: 28px !important;
                    }
                }
                @media (min-width: 539px) and (max-width: 980px) {
                    .item-wrapper {
                        width: 50% !important;
                        padding-left: 64px !important;
                    }
                }
                @media (max-width: 1170px) {
                    .fixed-width{
                        width: 95% !important;
                    }
                    .footer-top div.item-image {
                        width: 8.2% !important;
                    }
                    .footer-top div.item-image:last-child {
                        width: 8.2% !important;
                    }
                    .footer-top div.item-image > img{
                        padding-right: 0px;
                    }

                    .footer-middle div.item-lists{
                        padding-top: 0px !important;
                    }

                    .copyright-letter {
                        font-size: 18px;
                    }
                    .footer-bottom-list.footer-bottom-item li {
                        padding-right: 13px;
                    }
                }
            `}</style>
        </footer>
    );
  }
}

export default Footer;