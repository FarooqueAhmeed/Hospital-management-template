import '../App.css';


import Typography from '@material-ui/core/Typography';
import Doctors from '../Components/Doctors'
import BookAppointment from '../Components/BookAppointment'
import Footer from '../Components/Footer'
import Suggestions from '../Components/suggestions'
import About from '../Components/About'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppButton from '../Components/Button'
import { Container, Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

function Homepage() {
  const classes = useStyles();
  return (
<div>



    <div className="bg-image">
      <img src="/images/Home-bg.jpg" alt="" /> 
    </div>




     <Doctors/> 
      <BookAppointment/> 
      <Suggestions/>
      <About/>
      <Footer/>   



 </div>
 );
}

export default Homepage;
