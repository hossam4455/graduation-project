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
import AddLab from './components/addlab';
import HomeLAb from './components/home_lab';
import Alborj from './components/alborj';
import Alfa from './components/alfa';
import Alfath from './components/alfath';
import Almokhtabar from './components/almokhtbar';
import Alshrook from './components/alshrook';
import RoyalLab from './components/royal_lab';
import DoctorDetails from './components/doctor_details';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';


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
        <Route path='/AddLab' Component={AddLab}></Route>
        <Route path='/HomeLab' Component={HomeLAb}></Route>
        <Route path='/Alborj' Component={Alborj}></Route>
        <Route path='/Alfa' Component={Alfa}></Route>
        <Route path='/Alfath' Component={Alfath}></Route>
        <Route path='/Almokhtabar' Component={Almokhtabar}></Route>
        <Route path='/Alshrook' Component={Alshrook}></Route>
        <Route path='/RoyalLab' Component={RoyalLab}></Route>
        <Route path='/DoctorDetails' Component={DoctorDetails}></Route>
        <Route path='/Login' Component={Login}></Route>



        
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;