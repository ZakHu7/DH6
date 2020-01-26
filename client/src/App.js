import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import 'typeface-roboto';
import axios from 'axios'
import car from './tesla.jpg'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';






// import SingleSelect from './inputs/SingleSelect';
// import MultiSelect from './inputs/MultiSelect';
// import Search from './inputs/Search';
// import Slider from './inputs/Slider';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: 120,
    backgroundImage: "url(" + car + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100vh",
    width: "100vw",
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "black",
    backgroundColor: "rgba(255,255,255,0.5)",
    // minWidth: 120,
  },
  title: {
    textAlign: 'center',
    backgroundColor: 'transparent'
    // backgroundColor: theme.palette.secondary,

  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [range, setRange] = React.useState('');
  const [colour, setColour] = React.useState('');
  const [style, setStyle] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [price, setPrice] = React.useState(0);

  const [data, setData] = React.useState("");


  const API = "http://localhost:5000"
  
  const getFromFlask = () => {
    axios.get(API + '/ping')
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  };

  const getRecommendation = () => {
    // alert('hi');
    axios.post(API + '/getRecommendation', {
        "range": range,
        "colour": colour,
        "style": style,
        "company": company,
        "price": price,
    }).then((data) => {
      console.log(data);
      setData(data.data);
    });
  }

  const generateMockData = () => {
    setRange("1000");
    setColour("Red");
    setStyle("Sedan");
    setCompany("Tesla");
    setPrice(1500);
    console.log("change")
  }



  const handleRangeChange = event => {
    setRange(event.target.value);
  };

  const handleColourChange = event => {
    setColour(event.target.value);
  };

  const handleStyleChange = event => {
    setStyle(event.target.value);
  };

  const handleCompanyChange = event => {
    setCompany(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.paper, classes.title}>
            <Typography variant="h2">
              CAR PICKER
            </Typography>
          </div>
        </Grid>
{/* 
        {range}
        {colour}
        {style}
        {company}
        {price}
        {data} */}

        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Personal Info
                </Typography>
              </Grid>
              
              <Grid item xs={4}>
                <TextField id="age" label="Age" onChange={handleRangeChange}/>
              </Grid>
              <Grid item xs={4}>
                <TextField id="gender" label="Gender" onChange={handleColourChange}/>
              </Grid>
              <Grid item xs={4}>
                <TextField id="something" label="Something" onChange={handleColourChange}/>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h5">
                  Vehicle Info
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <TextField id="range" label="Range" onChange={handleRangeChange}/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="colour" label="Colour" onChange={handleColourChange}/>
              </Grid>

              <Grid item xs={6}>
                <TextField id="style" label="Style" onChange={handleStyleChange}/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="company" label="Company" onChange={handleCompanyChange}/>
              </Grid>

              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
              <Typography id="discrete-slider" gutterBottom>
                Price
              </Typography>
              <Slider
                defaultValue={30}
                // getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={handlePriceChange}
                step={1000}
                marks
                min={1000}
                max={10000}
              />
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={12}>
                <Button variant="contained" onClick={getRecommendation}>
                  Get Recommendation
                </Button>
                <Button variant="contained" onClick={generateMockData}>
                  Mock Data
                </Button>
              </Grid>

            </Grid>

          </Paper>
        </Grid>

        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>

        


      </Grid>
    </div>
  );
}
