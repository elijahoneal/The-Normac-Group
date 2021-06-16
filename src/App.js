import { Route  , Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
