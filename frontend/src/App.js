import React from 'react';
import './App.css';
import { Switch , Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Stock from './components/Stock/Stock';
import CRUD from './components/Stock-CRUD/CRUD';
import Add from './components/Add-Products/Add';
import Footer from './components/Footer/Footer';
import Update from './components/Stock-CRUD/marketform'


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route path='/stock'><Stock/></Route>
          <Route path='/crud'><CRUD/></Route>
          <Route path='/add'><Add/></Route>
          <Route path="/updateProduct/:id"><Update/></Route>

          
        </Switch>
      
        <Footer/>
    </div>
  );
}

export default App;
