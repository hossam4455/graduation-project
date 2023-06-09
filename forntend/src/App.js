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
import MyForm from './components/register';
import MyFormPatient from './components/register_patient';
import HomeLab from './components/Homelab';




import DoctorDetails from './components/doctor_details';
import ProfileDoctor from './components/doctor_profile';
import Labnav from './components/labnavbar';
import Labform from './components/labform';
import PharmNav from './components/navbarpharm';
import RigisterPatient from './components/register_patient';
import CreateAppointment from './components/appointment';
import PatientAppointments from './components/doctor_appointments'
import ApprovementAppointments from './components/approvement'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewPorfile from './components/viewprofile';
import { Routes  } from 'react-router-dom';
import VerificationPage from './components/verifyotp'
import FeedbackForm from './components/feedback'
import QuestionForm from './components/interact.js'
import Prescription from './components/disply_prescription.js'
import DoctorAppointments from './components/patient_appointments'
import TestList from './components/view_tests'

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
          <Route path='/MyForm' Component={MyForm}></Route>
          <Route path='/MyFormPatient' Component={MyFormPatient}></Route>
          <Route path='/HomeLab' Component={ HomeLab}></Route>
          <Route path='/DoctorAppointments' Component={ DoctorAppointments}></Route>
          <Route path='/TestList' Component={ TestList}></Route>
          

          <Route path='/DoctorDetails' Component={DoctorDetails}></Route>
          <Route path='/ProfileDoctor' Component={ProfileDoctor}></Route>
          <Route path='/Labnav' Component={Labnav}></Route>
          <Route path='/Labform' Component={Labform}></Route>
          <Route path='/PharmNav' Component={PharmNav}></Route>
          <Route path='/RigisterPatient' Component={RigisterPatient}></Route>
          <Route path='/CreateAppointment' Component={CreateAppointment}></Route>
          <Route path='/PatientAppointments' Component={PatientAppointments}></Route>
          <Route path='/ApprovementAppointments' Component={ApprovementAppointments}></Route>
          <Route path='/ViewPorfile' Component={ViewPorfile}></Route>
          <Route path='/VerificationPage' Component={VerificationPage}></Route>
          <Route path='/FeedbackForm' Component={FeedbackForm}></Route>
          <Route path='/QuestionForm' Component={QuestionForm}></Route>
          <Route path='/Prescription' Component={Prescription}></Route>
          
          <Route path='/Login' Component={Login}></Route>
        
          <Route exact path="/" component={Team} />
          <Route path="/ProfileDoctor/:doctorName" component={ProfileDoctor} />
    

          
          
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
