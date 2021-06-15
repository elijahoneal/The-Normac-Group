import { Route  , Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home';
import About from './pages/About'


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
        </Switch>
      </main>
    </div>
  );
}

export default App;
