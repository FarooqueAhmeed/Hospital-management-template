import '../App.css';


import Typography from '@material-ui/core/Typography';
import Doctors from '../Components/Doctors'
import BookAppointment from '../Components/BookAppointment'
import Footer from '../Components/Footer'
import Suggestions from '../Components/suggestions'
import About from '../Components/About'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import DrProfile from '../Components/DrProfile';

import Button from '@material-ui/core/Button';


function Homepage() {

  return (
<div>



    <div className="bg-image">
      <img src="/images/Home-bg.jpg" alt="" />
    </div>
                  
    <div style={{
      position: 'absolute',
       color: '#71C61D', 
       top: 250, left: '75%',
        transform: 'translateX(-50%)'
      
       
        }} > 
        
        <Typography variant="h4"  >
          
          It is health that is the real wealth,  
        and not pieces of gold and silver. </Typography>
        
  <Button variant="contained" style={{color:'white' ,backgroundColor:'#71C61D'}}>
  BOOK YOUR APPOINTMENT NOW
</Button>
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
