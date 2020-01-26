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
    backgroundColor: 'transparent',
    minHeight: 300,
    marginTop: 50,
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

  const [car1, setCar1] = React.useState("B3");
  const [car2, setCar2] = React.useState("N6");
  const [car3, setCar3] = React.useState("T4");

  const [carInfo1, setCarInfo1] = React.useState("2019 BMW i3 $44450 189.5km");
  const [carInfo2, setCarInfo2] = React.useState("2019 Nissan Leaf $29990 310.0km");
  const [carInfo3, setCarInfo3] = React.useState("2019 Tesla Model S $76000 362.5km");



  const API = "http://localhost:5000"
  
  const getFromFlask = () => {
    axios.get(API + '/ping')
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  };

  const getRecommendation1 = () => {
    // alert('hi');
    axios.post(API + '/getRecommendation', {
        "id": car1
        // "range": range,
        // "colour": colour,
        // "style": style,
        // "company": company,
        // "price": price,
    }).then((data) => {
      console.log(data);
      var c1 = data.data[1];
      setCar1(c1.substr(0,c1.indexOf(' ')));
      setCarInfo1(c1.substr(c1.indexOf(' ')+1));

      var c2 = data.data[2];
      setCar2(c2.substr(0,c2.indexOf(' ')));
      setCarInfo2(c2.substr(c2.indexOf(' ')+1));

      var c3 = data.data[3];
      setCar3(c3.substr(0,c3.indexOf(' ')));
      setCarInfo3(c3.substr(c3.indexOf(' ')+1));

    });
  }
  const getRecommendation2 = () => {
    // alert('hi');
    axios.post(API + '/getRecommendation', {
        "id": car2
        // "range": range,
        // "colour": colour,
        // "style": style,
        // "company": company,
        // "price": price,
    }).then((data) => {
      console.log(data);
      var c1 = data.data[1];
      setCar1(c1.substr(0,c1.indexOf(' ')));
      setCarInfo1(c1.substr(c1.indexOf(' ')+1));

      var c2 = data.data[2];
      setCar2(c2.substr(0,c2.indexOf(' ')));
      setCarInfo2(c2.substr(c2.indexOf(' ')+1));

      var c3 = data.data[3];
      setCar3(c3.substr(0,c3.indexOf(' ')));
      setCarInfo3(c3.substr(c3.indexOf(' ')+1));

    });
  }
  const getRecommendation3 = () => {
    // alert('hi');
    axios.post(API + '/getRecommendation', {
        "id": car3
        // "range": range,
        // "colour": colour,
        // "style": style,
        // "company": company,
        // "price": price,
    }).then((data) => {
      console.log(data);
      var c1 = data.data[1];
      setCar1(c1.substr(0,c1.indexOf(' ')));
      setCarInfo1(c1.substr(c1.indexOf(' ')+1));

      var c2 = data.data[2];
      setCar2(c2.substr(0,c2.indexOf(' ')));
      setCarInfo2(c2.substr(c2.indexOf(' ')+1));

      var c3 = data.data[3];
      setCar3(c3.substr(0,c3.indexOf(' ')));
      setCarInfo3(c3.substr(c3.indexOf(' ')+1));

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

        {data} 

        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>

              <Grid item xs={4}>
                {/* <Typography variant="h5">
                  {car1}
                </Typography> */}
                <Typography variant="h6">
                  {carInfo1}
                </Typography>
                {car1 == "B3" ? <a href="https://www.bmw.ca/en/all-models/bmw-i/i3/2017/at-a-glance.html" target="_blank"> <img src="B3.png" width="300"></img> </a> : "" }
                <Button variant="contained" onClick={getRecommendation1}>
                  Pick Car 1
                </Button>
              </Grid>
              <Grid item xs={4}>
                {/* <Typography variant="h5">
                  {car2}
                </Typography> */}
                <Typography variant="h6">
                  {carInfo2}
                </Typography>
                {car2 == "N6" ? <a href="https://www.nissan.ca/en/electric-cars/leaf/range-charging/" target="_blank"> <img src="T4.png" width="300"></img> </a> : "" }

                
                <Button variant="contained" onClick={getRecommendation2}>
                  Pick Car 2
                </Button>
              </Grid>
              <Grid item xs={4}>
                {/* <Typography variant="h5">
                  {car3}
                </Typography> */}
                <Typography variant="h6">
                  {carInfo3}
                </Typography>
                
                {car3 == "T4" ? <a href="https://www.tesla.com/en_ca/models" target="_blank"> <img src="N6.png" width="300"></img> </a> : "" }

                <Button variant="contained" onClick={getRecommendation3}>
                  Pick Car 3
                </Button>
              </Grid>
              {/* <Grid item xs={12}>
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
              <Grid item xs={1}></Grid> */}

              <Grid item xs={12}>
                {/* <Button variant="contained" onClick={getRecommendation("T3")}>
                  Get Recommendation
                </Button> */}
                {/* <Button variant="contained" onClick={generateMockData}>
                  Mock Data
                </Button> */}
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
