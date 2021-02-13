import './App.css';
import ComponentOne from './welcome'
import ComponentTwo from './reserve'
import {BrowserRouter as Router,
Switch,
Route,
Link}from "react-router-dom";
//requests made via axion
function App() {


  return (
    <Router>
    <div>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/change">ABOUT</Link>
      </li>
    </div>
       <Switch>
        <Route path="/" exact component={ComponentOne}/>   
       <Route path="/change" component={ComponentTwo}/>
       </Switch>
     </Router>
    
   
  );
}

export default App;
