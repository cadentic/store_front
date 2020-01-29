import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";


class MiddleHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownShowFlag: false,
            links: [],
            searchText: ''
        }
        this.updateLinks = this.updateLinks.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    async updateLinks() {
        const { data } = await axios.get('/json/courses-list-middle-header.json');
        this.setState({ links: data});
    }

    changeDropdownShowState = () => {
        this.setState({
            dropdownShowFlag: !this.state.dropdownShowFlag
        });
    }

    componentDidMount() {
      this.updateLinks();
    }

    /**
     * Here you will handle text search.
     */
    handleSearchButtonClick(text) {
      alert('You will need to handle text search by yourself!\nText: '+text);
    }

    handleSearchTextChange({target}) {
      this.setState({searchText: target.value});
    }

    render() {
        return(
            <div className="middle-header border-bottom">
                <div className="section-container text-center">
                    <Button aria-controls="simple-menu" className="browse-courses float-left" aria-haspopup="true" onClick={this.changeDropdownShowState}>
                        <i className="fa fa-bars"></i>
                        Browse Courses
                    </Button>

                    {this.state.dropdownShowFlag &&
                        <ul className="link-block">
                          {this.state.links.map(link => (
                            <li> <Link to={link.to}>{link.label}</Link> </li>
                          ))}
                        </ul>
                    }

                    <div className="site-logo center-block">
                        <img src="/logo.png" alt="site logo" />
                    </div>

                    <div className="courses-search float-right">
                        <TextField id="standard-basic" placeholder="Search for Courses" value={this.state.searchText} onChange={this.handleSearchTextChange} />
                      <span className="input-group-addon border-left" onClick={() => this.handleSearchButtonClick(this.state.searchText)}>
                            <i className="fa fa-search"></i>
                        </span>
                    </div>

                    <div className="clearfix" />
                </div>

                <style>{`
                .middle-header .section-container {
                    padding: 49px 20px 45px;
                    box-sizing: border-box;
                }
                .middle-header .section-container .browse-courses {
                    font-size: 18px;
                    letter-spacing: -0.3px;
                    font-weight: 600;
                    top: 11px;
                    position: relative;
                    cursor: pointer;
                }
                .middle-header .section-container .browse-courses i {
                    margin-right: 9px;
                }
                .middle-header .section-container .site-logo {
                    transition: all linear .3s;
                }
                .middle-header .section-container .site-logo img {
                    margin-left: 118px;
                }
                .middle-header .section-container .courses-search {
                    right: -15px;
                    position: relative;
                    background-color: rgb(238, 238, 238);
                    border-radius: 3px;
                    transition: all linear .3s;
                }
                .middle-header .section-container .courses-search .input-group-addon {
                    font-size: 22px;
                    padding: 0px 15px;
                    display: inline-block;
                    margin-top: 6px;
                    transition: all linear .3s;
                }
                .middle-header .section-container .courses-search .input-group-addon i {
                    position: relative;
                    left: 2px;
                }
                .middle-header .section-container .courses-search input {
                    padding: 13px 15px;
                    border: none;
                    background-color: transparent;
                    font-size: 12px;
                    font-family: inherit;
                    font-style: italic;
                    width: 182px;
                    top: -4px;
                    position: relative;
                    letter-spacing: 0.7px;
                    transition: all linear .3s;
                }
                .middle-header .section-container .courses-search input:focus {
                    outline: none;
                }

                .link-block {
                    list-style: none;
                    text-align: left;
                    display: block;
                    margin: 45px 0px 0px 0px;
                    padding: 0px;
                    width: 150px;
                    border: solid 1px gray;
                    position: absolute;
                    background-color: white;
                    z-index: 10;
                }
                .link-block li {
                    width: 100%;
                    border-bottom: solid 1px gray;
                }
                .link-block li a {
                    display: inline-block;
                    color: #2d2d2d;
                    width: 100%;
                    padding: 10px 15px;
                    box-sizing: border-box;
                }
                .link-block li:hover {
                    background-color: #00000033;
                }
                .link-block li:last-of-type {
                    border-bottom: none;
                }
                .link-block li a {
                    text-decoration: none;
                }


                @media screen and (max-width: 900px) {
                    .middle-header .section-container .site-logo {
                        display: block;
                        width: 100%;
                        margin-top: 55px;
                        margin-left: -65px;
                    }
                    .middle-header .section-container .courses-search {
                        width: 100%;
                        right: 0px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .middle-header .section-container .courses-search .input-group-addon {
                        position: absolute;
                        right: 0px;
                        top: 0px;
                    }
                    .middle-header .section-container .courses-search input {
                        width: 100%;
                    }
                }
                `}</style>
            </div>
        );
    }
}

export default MiddleHeader;