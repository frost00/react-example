//import './App.css';
import ComponentOne from './welcome'
import ComponentTwo from './reserve'
import ComponentThree from './rapid'
import ComponentFour from './crawler'
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
        <Link to="/change">Maps</Link>
      </li>
      <li>
        <Link to="/changeit">server Communication</Link>
      </li>
      <li>
        <Link to="/changeitagain">Web Crawler</Link>
      </li>
    </div>
       <Switch>
        <Route path="/" exact component={ComponentOne}/>   
       <Route path="/change" component={ComponentTwo}/>
       <Route path="/changeit" component={ComponentThree}/>
       <Route path="/changeitagain" component={ComponentFour}/>
       </Switch>
     </Router>
    
   
  );
}

export default App;
