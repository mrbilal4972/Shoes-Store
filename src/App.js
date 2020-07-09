import React, {createContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail';
import ProductIndex from './components/ProductIndex';
import Footer from './Footer'
import {shoes} from './components/dummyData';


export const productContext = createContext();

function App() {
  return (
    <Router>
      <productContext.Provider value={shoes}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route> 
        <Route path='/products' element={<Products />}>
          <Route path='/' element={<ProductIndex />}></Route>
          <Route path=':productType' element={<ProductDetail />}></Route>
        </Route>
      </Routes>
      </productContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
