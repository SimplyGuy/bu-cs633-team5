import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import SignUp from './components/Pages/SignUp';
import SignIn from './components/Pages/SignIn';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/signin' exact component={SignIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
