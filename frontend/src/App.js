import React from 'react';
import './App.css';
import { Switch , Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Stock from './components/Stock/Stock';
import CRUD from './components/Stock-CRUD/CRUD';
import Add from './components/Add-Products/Add';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route path='/stock'><Stock/></Route>
          <Route path='/crud'><CRUD/></Route>
          <Route path='/add'><Add/></Route>
        </Switch>
    </div>
  );
}

export default App;
