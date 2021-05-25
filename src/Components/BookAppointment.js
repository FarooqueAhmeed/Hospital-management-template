import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import doctors from "../ClinicData"

import Grid from '@material-ui/core/Grid';

import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';



import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Container } from '@material-ui/core';






const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);



const useStyles = makeStyles ((theme) => ({

    root2: {
        '& > *': {
          margin: theme.spacing(2),
          width: '25ch',
         
          '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'red',
            },
            '&:hover fieldset': {
              borderColor: 'primary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
        }
        


          
        },

        
        margin: theme.spacing(1),
        minWidth: 120,



        
      },


  root: {
    paddingTop:'20px',
    textAlign: 'center',
    color: '#71C61D', 
  },

  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },


  heroButtons: {
    marginTop: theme.spacing(4),
  },

  root2: {
    paddingTop:'20px',
    textAlign: 'center',
    color: '#71C61D', 
  },
  
 

}));


function BookAppointment() {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  const [selectedValueClinic, setSelectedValueClinic] = React.useState('1');

  const handleChangeClinic = (event) => {
    setSelectedValueClinic(event.target.value);
  };




    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [SPECIALIST, setSPECIALIST] = React.useState('');
    const [Dr, setDr] = React.useState('');

    
    const [openAge, setOpenAge] = React.useState(false);

    const [openSPECIALIST, setOpenSPECIALIST] = React.useState(false);

    const [openDr, setOpenDr] = React.useState(false);




    const handleChangeAge = (event) => {
      setAge(event.target.value);
    };
  
    const handleCloseAge = () => {
      setOpenAge(false);
    };
  
    const handleOpenAge = () => {
      setOpenAge(true);
    };


    const handleChangeSPECIALIST = (event) => {
      setSPECIALIST(event.target.value);
    };
  
    const handleCloseSPECIALIST = () => {
      setOpenSPECIALIST(false);
    };
  
    const handleOpenSPECIALIST = () => {
      setOpenSPECIALIST(true);
    };


    const handleChangeDr = (event) => {
      setDr(event.target.value);
    };
  
    const handleCloseDr = () => {
      setOpenDr(false);
    };
  
    const handleOpenDr = () => {
      setOpenDr(true);
    };
  
 

  return (
<div>

  <Container>  
<div className={classes.root2}>
        
<Typography variant="h3" gutterBottom style={{}}>
BOOk YOUR APPOINTMENT NOW
      </Typography>
        
</div>


{/* <Grid
  container
  spacing={2}
  //flexGrow={1}
 // direction="row"
  // alignItems="center"
  // justify="center"
  //style={{ minHeight: '100vh' }}
>

<Grid item xs>
<form className={classes.root2} noValidate autoComplete="off" >


      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Your Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          openAge={openAge}
          onClose={handleCloseAge}
          onOpen={handleOpenAge}
          
          onChange={handleChangeAge}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={40}>Fourity</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
          <MenuItem value={60}>Sixty +</MenuItem>

        </Select>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label"> SPECIALIST IN </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          openSPECIALIST={openSPECIALIST}
          onClose={handleCloseSPECIALIST}
          onOpen={handleOpenSPECIALIST}
          value={age}
          onChange={handleChangeSPECIALIST}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Podiatrist</MenuItem>
          <MenuItem value={10}>General Practitioner</MenuItem>
          <MenuItem value={20}>Pediatrician</MenuItem>
          <MenuItem value={30}>Endocrinologist</MenuItem>
          <MenuItem value={40}>Neurologist</MenuItem>
          <MenuItem value={50}>Rheumatologist</MenuItem>
          <MenuItem value={60}>Psychiatrist</MenuItem>

        </Select>
      </FormControl>



      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Dr.</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          openDr={openDr}
          onClose={handleCloseDr}
          onOpen={handleOpenDr}
          value={age}
          onChange={handleChangeDr}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {doctors.map(doctors => {
        return(
         <>

          <MenuItem value={5}>{doctors.name}</MenuItem>
    
          </>
          
          )})}  
        </Select>
      </FormControl>



     
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  






      <TextField  id="outlined-basic" label="Doctor" variant="outlined" />
      <TextField  id="outlined-basic" label="Doctor" variant="outlined" />
      <TextField  id="outlined-basic" label="Doctor" variant="outlined" />
      
      <TextField  id="outlined-basic" label="Doctor" variant="outlined" />
      

</form>

</Grid>   

</Grid>
 */}


<form className={classes.heroButtons}>



              <Grid container spacing={6} justify="center">
                <Grid item>
                  

                <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Your Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          openAge={openAge}
          onClose={handleCloseAge}
          onOpen={handleOpenAge}
          
          onChange={handleChangeAge}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={40}>Fourity</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
          <MenuItem value={60}>Sixty +</MenuItem>

        </Select>
      </FormControl>




      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label"> SPECIALIST </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          openSPECIALIST={openSPECIALIST}
          onClose={handleCloseSPECIALIST}
          onOpen={handleOpenSPECIALIST}
          value={age}
          onChange={handleChangeSPECIALIST}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Podiatrist</MenuItem>
          <MenuItem value={10}>General Practitioner</MenuItem>
          <MenuItem value={20}>Pediatrician</MenuItem>
          <MenuItem value={30}>Endocrinologist</MenuItem>
          <MenuItem value={40}>Neurologist</MenuItem>
          <MenuItem value={50}>Rheumatologist</MenuItem>
          <MenuItem value={60}>Psychiatrist</MenuItem>

        </Select>
      </FormControl>





      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Dr.</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          openDr={openDr}
          onClose={handleCloseDr}
          onOpen={handleOpenDr}
          value={age}
          onChange={handleChangeDr}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {doctors.map(doctors => {
        return(
         <>

          <MenuItem value={5}>{doctors.name}</MenuItem>
    
          </>
          
          )})}  
        </Select>
      </FormControl>




      <FormControl className={classes.formControl}> 
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </FormControl>


    </Grid>
    </Grid>
    
    <Grid container spacing={6} justify="center">
      <Grid item>
      <FormControl className={classes.formControl}> 
                 
      <TextField id="standard-basic" label="Your full name " />
      </FormControl>

      <FormControl className={classes.formControl}> 
      <TextField id="standard-basic" type="gmail" label="Mail address" />
</FormControl>

<FormControl className={classes.formControl}> 
      <TextField
          id="standard-number"
          label="Your cell Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
        
      </Grid>
  </Grid>



  <Grid container spacing={6} justify="center">
      <Grid item xs={6}>
  
      <TextField
          id="standard-full-width"
          label="Message"
          style={{ margin: 8 }}
          placeholder="Describe your problem"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

      </Grid>
  </Grid>



  <Grid container spacing={6} justify="center">
      <Grid item>

      <div>
     Male 
      <Radio
       label="Start"
       labelPlacement="start"
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      Female
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
|

Clinic
      <Radio
       label="Start"
       labelPlacement="start"
        checked={selectedValueClinic === '1'}
        onChange={handleChangeClinic}
        value="1"
        name="radio-button-demo"
        inputProps={{ 'aria-label': '1' }}
      />
      Online
      <GreenRadio
        checked={selectedValueClinic === '2'}
        onChange={handleChangeClinic}
        value="2"
        name="radio-button-demo"
        inputProps={{ 'aria-label': '2' }}
      />


     
    </div>




    
    
      
      </Grid>

</Grid>






<Grid container spacing={6} justify="center">
      <Grid item>



<Button variant="contained" style={{color:'white' ,backgroundColor:'#71C61D'}}>
  FIX APPOINTMENT
</Button>

 
</Grid>

</Grid>

</form>

</Container>
  </div>





 
 );
}

export default BookAppointment;
