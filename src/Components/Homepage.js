import '../App.css';
import Doctors from '../Components/Doctors'
import BookAppointment from '../Components/BookAppointment'
import Footer from '../Components/Footer'
import Suggestions from '../Components/suggestions'
import About from '../Components/About'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

function Homepage() {
 
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
