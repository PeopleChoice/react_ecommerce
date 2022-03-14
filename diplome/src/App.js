import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import {BrowserRouter as Router  , Route } from 'react-router-dom';
import Products from './component/Products';
import { Switch } from 'react-router-dom';
import Product from './component/Product';
import Panier from './component/Panier';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
          <Route exact path='/' component={Home} /> 
          <Route  path='/produits' component={Products} />    
          <Route  path='/produit/:id' component={Product} />    
          <Route  path='/panier' component={Panier} />   
          <Home />
      </Switch>
      
    </>
  );
}

export default App;
