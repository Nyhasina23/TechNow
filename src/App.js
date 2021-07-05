import React , {Component}  from 'react';
import './App.css';
import Home from './Components/Home';
import Register from './Components/register';
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import About from './Components/About'
import boutique from './Components/boutique';
import contact from './Components/contact';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/boutique" component={boutique} />
          <Route path="/contact" component={contact} />
        </Switch>
      </BrowserRouter>
    ) 
  } 
}
export default App;