import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import NavBar from './components/NavBar';
import ProductImage from './components/ProductImage';
import ProductIndex from './components/ProductIndex';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route> 
        <Route path='/products' element={<Products />}>
          <Route path='/' element={<ProductIndex />}></Route>
          <Route path=':productType' element={<ProductImage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
