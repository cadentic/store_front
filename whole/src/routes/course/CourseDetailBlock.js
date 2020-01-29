import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { isEmpty } from 'lodash';
import Stars from './Stars';

export default ({bigBlock, data}) => {

  return isEmpty(data) ? null : (
    <div className={`course-detail-block ${bigBlock ? 'big-block' : ''}`}>
      <List className="skill-list">
        {data.skillsList.map((list, i) => {
          return (
            <React.Fragment key={i}>
              <ListItem dense button className="list-item header">
                <span className="float-left">{list.header}</span>
                <span className="float-right">{list.lessonsCount} lessons, {list.time}</span>
                <div className="clearfix"></div>
              </ListItem>
              {list.skills.map((item, index) => {
                return(
                  <ListItem dense button className="list-item" key={`item_${index}`}>
                    <span className="float-left">
                      <i className={item.icon}></i>
                      {item.text}
                    </span>
                    {item.previewFlag &&
                    <ListItemSecondaryAction>
                      <span className="float-right">
                        Free Preview
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </ListItemSecondaryAction>
                    }
                  </ListItem>
                );
              })}
            </React.Fragment>
          );
        })}
      </List>

      <div className="rating">
        <h1 className="rating-header">RATING</h1>
        {data.comments.map((data, i) => {
          return(
            <div className="rating-item" key={i}>
              <img src={data.logoUrl} alt="user-logo" className="float-left" />

              <div className="detail">
                <p className="name">{data.name}</p>

                <Stars rating={data.rate} />

                <p className="description">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
                .course-detail-block {
                    transition: width linear .3s;
                }
                .course-detail-block.big-block {
                    width: calc(100% - 400px);
                    float: left;
                }
                .course-detail-block .skill-list .list-item {
                    width: 100%;
                    padding: 15px 25px 20px 23px;
                    box-sizing: border-box;
                    color: #82b540;
                    font-size: 23px;
                    line-height: 32px;
                    margin-top: 0px;
                    letter-spacing: -0.4px;
                }
                .course-detail-block .skill-list .MuiListItemSecondaryAction-root {
                    font-size: 23px;
                    line-height: 32px;
                    color: #82b540;
                    letter-spacing: -0.4px;
                }
                .course-detail-block .skill-list .float-right i {
                    margin-left: 13px;
                    letter-spacing: -1.1px;
                }
                .course-detail-block .skill-list .float-left i {
                    margin-right: 13px;
                }
                .course-detail-block .skill-list .list-item.header {
                    color: white;
                    background-color: #82b540;
                    letter-spacing: 0;
                    padding-bottom: 19px;
                }

                .course-detail-block .rating {
                    margin-top: 85px;
                    margin-left: -2px;
                }
                .course-detail-block .rating .rating-header {
                    font-size: 33px;
                    font-weight: 600;
                    letter-spacing: 2.5px;
                    color: #82b540;
                    margin-bottom: 39px;
                }
                .course-detail-block .rating .rating-item {
                    padding: 30px 0px 20px;
                    border-top: solid 1px #d6e4c3;
                }
                .course-detail-block .rating .rating-item img {
                    border-radius: 100%;
                    width: 170px;
                    height: 170px;
                    margin-top: 18px;
                    margin-right: 30px;
                }
                .course-detail-block .rating .rating-item .detail .name {
                    font-size: 25px;
                    position: relative;
                    margin-top: 10px;
                    font-weight: 600;
                    letter-spacing: 0.7px;
                    margin-bottom: 0px;
                }
                .course-detail-block .rating .rating-item .detail .rating-stars {
                    margin-top: 14px;
                    margin-bottom: 0px;
                    letter-spacing: 6.1px;
                }
                .course-detail-block .rating .rating-item .detail .description {
                    margin-top: 17px;
                    font-size: 17px;
                    font-weight: 600;
                    letter-spacing: 0.47px;
                    line-height: 34px;
                    display: flex;
                }

                @media screen and (max-width: 900px) {
                    .course-detail-block {
                        width: 100% !important;
                        margin-right: 0px;
                        margin-top: 20px;
                    }
                }
                `}</style>
    </div>
  );
}