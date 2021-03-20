import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div>
    
     <Router>
     <Header/>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route  path="/About">
         <About/>
       </Route>
       <Route path="/Contact">
         <Contact/>
       </Route>
     </Router>
     
    </div>
  );
}

export default App;
