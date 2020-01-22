import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  options as chartsOptions,
  animation as chartsAnimation,
  responsiveOptions as chartResponsiveOptions
} from "variables/charts-options.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import axios from "axios";

const useStyles = makeStyles(styles);

const getIcon = icon => {
  switch(icon) {
    case "store": return <Store />;
    case "warning": return <Warning />;
    case "date-range": return <DateRange />;
    case "local-offer": return <LocalOffer />;
    case "update": return <Update />;
    case "arrow-upward": return <ArrowUpward />;
    case "access-time": return <AccessTime />;
    case "accessibility": return <Accessibility />;
    case "bug-report": return <BugReport />;
    case "code": return <Code />;
    case "cloud": return <Cloud />;
  }

  return <Icon>{icon}</Icon>;
};

const colorizedIcon = (color, icon) => {
  let result;
  switch(color) {
    case "danger": return <Danger>{getIcon(icon)}</Danger>;
  }
  return getIcon(icon);
};

export default function Dashboard() {
  const classes = useStyles();
  const [informationalCards, setInformationalCards] = useState([]);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    axios.get("/json/dashboard-informational-cards.json")
         .then(({data}) => setInformationalCards(data));
    axios.get("/json/charts.json")
         .then(({data}) => setCharts(data));
  }, []);

  return (
    <div>
      <GridContainer>
        {informationalCards.map(item => (
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color={item.color} stats icon>
              <CardIcon color={item.color}>
                {getIcon(item.icon)}
              </CardIcon>
              <p className={classes.cardCategory}>{item.textLabel}</p>
              <h3 className={classes.cardTitle}>
                {item.text}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                {colorizedIcon(item.footerIconColor, item.footerIcon)}
                {item.footerLink && (
                  <a href={item.footerLink} onClick={e => e.preventDefault()}>
                    {item.footerText}
                  </a>
                 ) || item.footerText}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        {charts.map(chart => (
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color={chart.color}>
              <ChartistGraph
                className="ct-chart"
                data={chart.data}
                type={chart.type}
                options={{...chartsOptions, high: chart.data.high}}
                responsiveOptions={chartResponsiveOptions}
                listener={chartsAnimation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>{chart.title}</h4>
              <p className={classes.cardCategory}>
                {chart.text}
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                {colorizedIcon(chart.footerIconColor, chart.footerIcon)}
                {chart.footerText}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
