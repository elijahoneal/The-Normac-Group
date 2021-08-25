import { Route  , Switch} from 'react-router-dom';
import './App.css';
// pages
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
// logo
import Logo from './images/the-normac-group-logo.png'

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="The Normac Group" className="logo"></img>
        <Nav/>
      </header>
      <main>
        <Switch>
          <Route exact path='/' > <Home/> </Route>
          <Route path='/about' > <About/> </Route>
          <Route path='/services' > <Services/> </Route>
          <Route path='/contact' > <Contact/> </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
