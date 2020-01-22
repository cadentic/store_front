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

import {
  options as chartsOptions,
  animation as chartsAnimation,
  responsiveOptions as chartResponsiveOptions
} from "variables/charts-options.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import axios from "axios";

const useStyles = makeStyles(styles);

const getIcon = (icon, component = false) => {
  switch(icon) {
    case "store": return component ? Store : <Store />;
    case "warning": return component ? Warning : <Warning />;
    case "date-range": return component ? DateRange : <DateRange />;
    case "local-offer": return component ? LocalOffer : <LocalOffer />;
    case "update": return component ? Update : <Update />;
    case "arrow-upward": return component ? ArrowUpward : <ArrowUpward />;
    case "access-time": return component ? AccessTime : <AccessTime />;
    case "accessibility": return component ? Accessibility : <Accessibility />;
    case "bug-report": return component ? BugReport : <BugReport />;
    case "code": return component ? Code : <Code />;
    case "cloud": return component ? Cloud : <Cloud />;
    default: return component ? Icon : <Icon>{icon}</Icon>;
  }
};

const colorizedIcon = (color, icon) => {
  switch(color) {
    case "danger": return <Danger>{getIcon(icon)}</Danger>;
    default: return getIcon(icon);
  }
};

const getTableContent = content => {
  const result = [];
  content.forEach(item => {
    result.push({
      tabName: item.name,
      tabIcon: getIcon(item.icon, true),
      tabContent: (
        <Tasks
          checkedIndexes={item.checkedIndexes}
          tasksIndexes={item.tasksIndexes}
          tasks={item.tasks}
        />
      )
    });
  });
  return result;
};

export default function Dashboard() {
  const classes = useStyles();
  const [informationalCards, setInformationalCards] = useState([]);
  const [charts, setCharts] = useState([]);
  const [tables, setTables] = useState([]);

  const handleError = error => {
    console.log(error);
  };

  useEffect(() => {
    axios.get("/json/dashboard-informational-cards.json")
         .then(({data}) => setInformationalCards(data))
         .catch(handleError);
    axios.get("/json/charts.json")
         .then(({data}) => setCharts(data))
         .catch(handleError);
    axios.get("/json/dashboard-tables.json")
         .then(({data}) => setTables(data))
         .catch(handleError);
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
                options={{...chartsOptions, low: chart.data.low, high: chart.data.high}}
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
        {tables.map(table => (
        <GridItem xs={12} sm={12} md={6} key={table.id}>
          {table.type === "tabs" && (
          <CustomTabs
            title={table.title+":"}
            headerColor={table.color}
            tabs={getTableContent(table.content)}
          />)}
          {table.type === "card" && (
            <Card>
            <CardHeader color={table.color}>
              <h4 className={classes.cardTitleWhite}>{table.title}</h4>
              <p className={classes.cardCategoryWhite}>
                {table.text}
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor={table.color}
                tableHead={table.head}
                tableData={table.data}
              />
            </CardBody>
          </Card>)}
        </GridItem>))}
      </GridContainer>
    </div>
  );
}
