import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductListing from './pages/product-listing';
import ProductDetail from './pages/product-detail';

import './App.css';
import Breadcrumbs from './components/breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <h1>Hello Breadcrumbs</h1>
        {/* breadcrumbs */}
        <Breadcrumbs />
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
