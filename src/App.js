import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nomatch from './Components/Nomatch';
import Log from './Components/Log';
import Signup from './Components/Signup1';
import Service1 from './Components/Service1';
import About1 from './Components/About1';
import Home1 from './Components/Home1';
import Logistics from './Components/Logistics';
import Nav1 from './Components/Nav1';
import TruckType from './Components/TruckType';
import Contact1 from './Components/Contact1';






// import Service1 from './components/Service1';
// import Nav1 from './components/Nav1';
// import Home1 from './components/Home1';
// import About1 from './components/About1';
// import TruckType from './components/TruckType';
// import Logistics from './components/Logistics';
// import Contact from './components/Contact';
// import Signup1 from './components/Signup1';
// import Nomatch from './components/Nomatch';
// import Log from './components/Log';

function App() {
  return(
   
 <div>

<Nav1/>
<Routes>
<Route path='/' element={<Home1/>}/>
<Route path='/about' element={<About1/>}/>
  <Route path='/service' element={<Service1/>}/>
  <Route path='/truck' element={<TruckType/>}/>
  <Route path='/logistics' element={<Logistics/>}/>
  <Route path='/contact' element={<Contact1/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Log/>}/>
  <Route path='*' element={<Nomatch/>}/>

</Routes>

 </div>
  );
} 

export default App;