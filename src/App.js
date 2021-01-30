import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './components/home'
import Vegetables from './components/product'

function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/vegetables"><Vegetables/></Route>
    </Switch>
    </div>
  );
}

export default App;
