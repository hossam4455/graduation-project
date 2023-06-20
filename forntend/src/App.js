import React,{Component} from 'react';
import Home from './components/Home';
import About from './components/about';
import Appointment from './components/appointment';
import Blog from './components/blog';
import Contact from './components/contact';
import Details from './components/details';
import Register from './components/register';
import Login from './components/login';
import Price from './components/price'
import Search  from './components/search';
import Service from './components/service';
import Team from './components/team';
import Testimonial from './components/testimonial';
import Home2 from './components/home2';
import Medicine from './components/medicine';
import BuyNow from './components/buynow';
import DoctorDetails from './components/doctor_details';
import ProfileDoctor from './components/doctor_profile';

import HomeLab from './components/Homelab';
import NavLab from './components/navlab';
import PharmNav from './components/navbarpharm';
import RigisterPatient from './components/register_patient';
import CreateAppointment from './components/appointment';
import CreateAppointment2 from './components/appointment_home';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import LabForm from './components/labform';



class App extends Component{
  render(){
    return(
      <div className='App'>
       
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/About' Component={About}/>
          <Route path='/Appointment' Component={Appointment}/>
          <Route path='/Blog' Component={Blog}/>
          <Route path='/Contact' Component={Contact}/>
          <Route path='/Details' Component={Details}/>
          <Route path='/Price' Component={Price}/>
          <Route path='/Search' Component={Search}/>
          <Route path='/Register' Component={Register}/>
          <Route path='/Service' Component={Service}/>
          <Route path='/Team' Component={Team}/>
          <Route path='/Testimonial' Component={Testimonial}/>
          <Route path='/Home2' Component={Home2}></Route>
        <Route path='/BuyNow' Component={BuyNow}></Route>
        <Route path='/Medicine' Component={Medicine}></Route>
        <Route path='/PharmNav' Component={PharmNav}></Route>
        <Route path='/RigisterPatient' Component={RigisterPatient}></Route>
        <Route path='/CreateAppointment' Component={CreateAppointment}></Route>
        <Route path='/CreateAppointment2' Component={CreateAppointment2}></Route>

        <Route path='/Login' Component={Login}></Route>
        <Route path='/NavLab' Component={NavLab}></Route>
        <Route path='/HomeLab' Component={HomeLab}></Route>
        <Route path='/LabForm' Component={LabForm}></Route>



        
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
