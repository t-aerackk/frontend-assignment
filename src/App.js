import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about';
import Navbar from './component/nav/navbar';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Search from './pages/search/search';




function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/products' Component={Products} />
            <Route path='/cart' Component={Cart} />
            <Route path='/search' Component={Search} />
            

            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
