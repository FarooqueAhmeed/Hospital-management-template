import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import DashboardIcon from "@material-ui/icons/Dashboard";
import Paper from "@material-ui/core/Paper";
import GroupIcon from "@material-ui/icons/Group";
import Button from "@material-ui/core/Button";
import { Divider, Icon } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import RateReviewIcon from "@material-ui/icons/RateReview";

import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Footer from "../Footer";
import Reviews from "../Reviews";
import Staff from "../Admin/Staff";
import Tests from "../Admin/Tests";
import Payments from "../Admin/Payments";
import AllAppointments from "../AllAppointments";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //width: '100%',
    backgroundColor: theme.palette.background.paper,
    margin: 25,
    paddingTop: 101,
  },

  paperroot: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    textAlign: "center",
    //position: 'absolute',
    color: theme.palette.text.secondary,
    "& > *": {
      margin: theme.spacing(4),
      width: theme.spacing(20),
      height: theme.spacing(18),
    },
  },
}));

export default function AdminDashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="Staffs" {...a11yProps(1)} />
            <Tab label="Appointments " {...a11yProps(2)} />
            <Tab label="Patients " {...a11yProps(3)} />
            <Tab label="Tests " {...a11yProps(4)} />
            <Tab label="Reviews" {...a11yProps(5)} />
            <Tab label="Payments" {...a11yProps(6)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <h3> Welcome Admin </h3>
          <div className={classes.paperroot}>
            <Paper>
              <GroupIcon color="primary" style={{ fontSize: 70 }} />
              <h3 style={{ color: "#28a745" }}>Doctors 144</h3>
            </Paper>

            <Paper>
              <GroupIcon color="primary" style={{ fontSize: 70 }} />
              <h3 style={{ color: "#28a745" }}>Total Patient 344</h3>
            </Paper>

            <Paper>
              {" "}
              <EventNoteIcon color="primary" style={{ fontSize: 70 }} />
              <h3
                style={{
                  color: "#28a745",
                }}
              >
                Today App 55{" "}
              </h3>
            </Paper>

            <Paper>
              <MonetizationOnIcon
                color="primary"
                style={{
                  fontSize: 70,
                }}
              />
              <h3
                style={{
                  color: "#28a745",
                }}
              >
                Last month $5K{" "}
              </h3>
            </Paper>

            <Paper>
              <RateReviewIcon
                color="primary"
                style={{
                  fontSize: 70,
                }}
              />
              <h3
                style={{
                  color: "#28a745",
                }}
              >
                Reviews 190{" "}
              </h3>
            </Paper>
          </div>

          <h3> Last month revenue by all departments - Pie Chart </h3>

          <PieChart />
          <Divider />
          <h3> This Year Apointments by all doctors - Line chart </h3>

          <LineChart />
          <Divider />

          <h3> Top rated doctors - Bar chart </h3>
          <Divider />
          <BarChart />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            style={{
              paddingBottom: 21,
            }}
          >
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#71C61D",
              }}
            >
              Add Staff
            </Button>
          </div>
          <Staff />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AllAppointments/>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <AllAppointments/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Tests/>
        </TabPanel>
        <TabPanel value={value} index={5}>
         <Reviews/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Payments/>
        </TabPanel>
      </div>

      <Footer />
    </div>
  );
}
