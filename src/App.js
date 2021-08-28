import { Link, Route  , Switch} from 'react-router-dom';
import './App.css';
// pages
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
// logo
import Logo from './images/the-normac-group-logo.png'

function App() {
  return (
    <div className="App">
      <header>
       <Link to ='/'> <img src={Logo} alt="The Normac Group" className="logo"></img></Link>
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
      <Footer/>
    </div>
  );
}

export default App;
